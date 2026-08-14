# `codebuild` Submodule <a name="`codebuild` Submodule" id="@cdk_utils/iam.codebuild"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeBuildBuildArnComponents <a name="CodeBuildBuildArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents"></a>

Parsed components of a build ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildBuildArnComponents: codebuild.CodeBuildBuildArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.buildId">buildId</a></code> | <code>string</code> | The BuildId component. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

The BuildId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeBuildBuildArnProps <a name="CodeBuildBuildArnProps" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnProps"></a>

Properties for building a build ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildBuildArnProps: codebuild.CodeBuildBuildArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.buildId">buildId</a></code> | <code>string</code> | The BuildId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

The BuildId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildBuildArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeBuildBuildBatchArnComponents <a name="CodeBuildBuildBatchArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents"></a>

Parsed components of a build-batch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildBuildBatchArnComponents: codebuild.CodeBuildBuildBatchArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.buildBatchId">buildBatchId</a></code> | <code>string</code> | The BuildBatchId component. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `buildBatchId`<sup>Required</sup> <a name="buildBatchId" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.buildBatchId"></a>

```typescript
public readonly buildBatchId: string;
```

- *Type:* string

The BuildBatchId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeBuildBuildBatchArnProps <a name="CodeBuildBuildBatchArnProps" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps"></a>

Properties for building a build-batch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildBuildBatchArnProps: codebuild.CodeBuildBuildBatchArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.buildBatchId">buildBatchId</a></code> | <code>string</code> | The BuildBatchId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `buildBatchId`<sup>Required</sup> <a name="buildBatchId" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.buildBatchId"></a>

```typescript
public readonly buildBatchId: string;
```

- *Type:* string

The BuildBatchId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeBuildFleetArnComponents <a name="CodeBuildFleetArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents"></a>

Parsed components of a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildFleetArnComponents: codebuild.CodeBuildFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeBuildFleetArnProps <a name="CodeBuildFleetArnProps" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps"></a>

Properties for building a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildFleetArnProps: codebuild.CodeBuildFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeBuildProjectArnComponents <a name="CodeBuildProjectArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildProjectArnComponents: codebuild.CodeBuildProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeBuildProjectArnProps <a name="CodeBuildProjectArnProps" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildProjectArnProps: codebuild.CodeBuildProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeBuildReportArnComponents <a name="CodeBuildReportArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents"></a>

Parsed components of a report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildReportArnComponents: codebuild.CodeBuildReportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.reportGroupName">reportGroupName</a></code> | <code>string</code> | The ReportGroupName component. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportGroupName`<sup>Required</sup> <a name="reportGroupName" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.reportGroupName"></a>

```typescript
public readonly reportGroupName: string;
```

- *Type:* string

The ReportGroupName component.

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.codebuild.CodeBuildReportArnComponents.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component.

---

### CodeBuildReportArnProps <a name="CodeBuildReportArnProps" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps"></a>

Properties for building a report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildReportArnProps: codebuild.CodeBuildReportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.reportGroupName">reportGroupName</a></code> | <code>string</code> | The ReportGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportGroupName`<sup>Required</sup> <a name="reportGroupName" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.reportGroupName"></a>

```typescript
public readonly reportGroupName: string;
```

- *Type:* string

The ReportGroupName component of the ARN.

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildReportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeBuildReportGroupArnComponents <a name="CodeBuildReportGroupArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents"></a>

Parsed components of a report-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildReportGroupArnComponents: codebuild.CodeBuildReportGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.reportGroupName">reportGroupName</a></code> | <code>string</code> | The ReportGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportGroupName`<sup>Required</sup> <a name="reportGroupName" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnComponents.property.reportGroupName"></a>

```typescript
public readonly reportGroupName: string;
```

- *Type:* string

The ReportGroupName component.

---

### CodeBuildReportGroupArnProps <a name="CodeBuildReportGroupArnProps" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps"></a>

Properties for building a report-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildReportGroupArnProps: codebuild.CodeBuildReportGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.reportGroupName">reportGroupName</a></code> | <code>string</code> | The ReportGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportGroupName`<sup>Required</sup> <a name="reportGroupName" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.reportGroupName"></a>

```typescript
public readonly reportGroupName: string;
```

- *Type:* string

The ReportGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeBuildSandboxArnComponents <a name="CodeBuildSandboxArnComponents" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents"></a>

Parsed components of a sandbox ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildSandboxArnComponents: codebuild.CodeBuildSandboxArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.sandboxId">sandboxId</a></code> | <code>string</code> | The SandboxId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sandboxId`<sup>Required</sup> <a name="sandboxId" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnComponents.property.sandboxId"></a>

```typescript
public readonly sandboxId: string;
```

- *Type:* string

The SandboxId component.

---

### CodeBuildSandboxArnProps <a name="CodeBuildSandboxArnProps" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps"></a>

Properties for building a sandbox ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

const codeBuildSandboxArnProps: codebuild.CodeBuildSandboxArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.sandboxId">sandboxId</a></code> | <code>string</code> | The SandboxId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sandboxId`<sup>Required</sup> <a name="sandboxId" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.sandboxId"></a>

```typescript
public readonly sandboxId: string;
```

- *Type:* string

The SandboxId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeBuildActions <a name="CodeBuildActions" id="@cdk_utils/iam.codebuild.CodeBuildActions"></a>

IAM action constants for the codebuild service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codebuild.CodeBuildActions.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

new codebuild.CodeBuildActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.actionGetReportGroupTrend">actionGetReportGroupTrend</a></code> | <code>string</code> | [Read] codebuild:GetReportGroupTrend. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] codebuild:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchDeleteBuilds">BatchDeleteBuilds</a></code> | <code>string</code> | [Write] codebuild:BatchDeleteBuilds. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetBuildBatches">BatchGetBuildBatches</a></code> | <code>string</code> | [Read] codebuild:BatchGetBuildBatches. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetBuilds">BatchGetBuilds</a></code> | <code>string</code> | [Read] codebuild:BatchGetBuilds. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetCommandExecutions">BatchGetCommandExecutions</a></code> | <code>string</code> | [Read] codebuild:BatchGetCommandExecutions. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetFleets">BatchGetFleets</a></code> | <code>string</code> | [Read] codebuild:BatchGetFleets. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetProjects">BatchGetProjects</a></code> | <code>string</code> | [Read] codebuild:BatchGetProjects. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetReportGroups">BatchGetReportGroups</a></code> | <code>string</code> | [Read] codebuild:BatchGetReportGroups. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetReports">BatchGetReports</a></code> | <code>string</code> | [Read] codebuild:BatchGetReports. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetSandboxes">BatchGetSandboxes</a></code> | <code>string</code> | [Read] codebuild:BatchGetSandboxes. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchPutCodeCoverages">BatchPutCodeCoverages</a></code> | <code>string</code> | [Write] codebuild:BatchPutCodeCoverages. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchPutTestCases">BatchPutTestCases</a></code> | <code>string</code> | [Write] codebuild:BatchPutTestCases. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] codebuild:CreateFleet. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] codebuild:CreateProject. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateReport">CreateReport</a></code> | <code>string</code> | [Write] codebuild:CreateReport. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateReportGroup">CreateReportGroup</a></code> | <code>string</code> | [Write] codebuild:CreateReportGroup. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateWebhook">CreateWebhook</a></code> | <code>string</code> | [Write] codebuild:CreateWebhook. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteBuildBatch">DeleteBuildBatch</a></code> | <code>string</code> | [Write] codebuild:DeleteBuildBatch. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] codebuild:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteOAuthToken">DeleteOAuthToken</a></code> | <code>string</code> | [Write] codebuild:DeleteOAuthToken. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] codebuild:DeleteProject. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteReport">DeleteReport</a></code> | <code>string</code> | [Write] codebuild:DeleteReport. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteReportGroup">DeleteReportGroup</a></code> | <code>string</code> | [Write] codebuild:DeleteReportGroup. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] codebuild:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteSourceCredentials">DeleteSourceCredentials</a></code> | <code>string</code> | [Write] codebuild:DeleteSourceCredentials. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteWebhook">DeleteWebhook</a></code> | <code>string</code> | [Write] codebuild:DeleteWebhook. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DescribeCodeCoverages">DescribeCodeCoverages</a></code> | <code>string</code> | [Read] codebuild:DescribeCodeCoverages. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.DescribeTestCases">DescribeTestCases</a></code> | <code>string</code> | [Read] codebuild:DescribeTestCases. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ImportSourceCredentials">ImportSourceCredentials</a></code> | <code>string</code> | [Write] codebuild:ImportSourceCredentials. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.InvalidateProjectCache">InvalidateProjectCache</a></code> | <code>string</code> | [Write] codebuild:InvalidateProjectCache. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuildBatches">ListBuildBatches</a></code> | <code>string</code> | [List] codebuild:ListBuildBatches. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuildBatchesForProject">ListBuildBatchesForProject</a></code> | <code>string</code> | [List] codebuild:ListBuildBatchesForProject. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuilds">ListBuilds</a></code> | <code>string</code> | [List] codebuild:ListBuilds. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuildsForProject">ListBuildsForProject</a></code> | <code>string</code> | [List] codebuild:ListBuildsForProject. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListCommandExecutionsForSandbox">ListCommandExecutionsForSandbox</a></code> | <code>string</code> | [List] codebuild:ListCommandExecutionsForSandbox. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListConnectedOAuthAccounts">ListConnectedOAuthAccounts</a></code> | <code>string</code> | [List] codebuild:ListConnectedOAuthAccounts. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListCuratedEnvironmentImages">ListCuratedEnvironmentImages</a></code> | <code>string</code> | [List] codebuild:ListCuratedEnvironmentImages. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListFleets">ListFleets</a></code> | <code>string</code> | [List] codebuild:ListFleets. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] codebuild:ListProjects. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListReportGroups">ListReportGroups</a></code> | <code>string</code> | [List] codebuild:ListReportGroups. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListReports">ListReports</a></code> | <code>string</code> | [List] codebuild:ListReports. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListReportsForReportGroup">ListReportsForReportGroup</a></code> | <code>string</code> | [List] codebuild:ListReportsForReportGroup. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] codebuild:ListRepositories. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSandboxes">ListSandboxes</a></code> | <code>string</code> | [List] codebuild:ListSandboxes. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSandboxesForProject">ListSandboxesForProject</a></code> | <code>string</code> | [List] codebuild:ListSandboxesForProject. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSharedProjects">ListSharedProjects</a></code> | <code>string</code> | [List] codebuild:ListSharedProjects. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSharedReportGroups">ListSharedReportGroups</a></code> | <code>string</code> | [List] codebuild:ListSharedReportGroups. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSourceCredentials">ListSourceCredentials</a></code> | <code>string</code> | [List] codebuild:ListSourceCredentials. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.PersistOAuthToken">PersistOAuthToken</a></code> | <code>string</code> | [Write] codebuild:PersistOAuthToken. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] codebuild:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.RetryBuild">RetryBuild</a></code> | <code>string</code> | [Write] codebuild:RetryBuild. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.RetryBuildBatch">RetryBuildBatch</a></code> | <code>string</code> | [Write] codebuild:RetryBuildBatch. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StartBuild">StartBuild</a></code> | <code>string</code> | [Write] codebuild:StartBuild. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StartBuildBatch">StartBuildBatch</a></code> | <code>string</code> | [Write] codebuild:StartBuildBatch. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StartCommandExecution">StartCommandExecution</a></code> | <code>string</code> | [Write] codebuild:StartCommandExecution. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StartSandbox">StartSandbox</a></code> | <code>string</code> | [Write] codebuild:StartSandbox. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StartSandboxConnection">StartSandboxConnection</a></code> | <code>string</code> | [Write] codebuild:StartSandboxConnection. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StopBuild">StopBuild</a></code> | <code>string</code> | [Write] codebuild:StopBuild. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StopBuildBatch">StopBuildBatch</a></code> | <code>string</code> | [Write] codebuild:StopBuildBatch. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.StopSandbox">StopSandbox</a></code> | <code>string</code> | [Write] codebuild:StopSandbox. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateFleet">UpdateFleet</a></code> | <code>string</code> | [Write] codebuild:UpdateFleet. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] codebuild:UpdateProject. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateProjectVisibility">UpdateProjectVisibility</a></code> | <code>string</code> | [Write] codebuild:UpdateProjectVisibility. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateReport">UpdateReport</a></code> | <code>string</code> | [Write] codebuild:UpdateReport. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateReportGroup">UpdateReportGroup</a></code> | <code>string</code> | [Write] codebuild:UpdateReportGroup. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateWebhook">UpdateWebhook</a></code> | <code>string</code> | [Write] codebuild:UpdateWebhook. |

---

##### `actionGetReportGroupTrend`<sup>Required</sup> <a name="actionGetReportGroupTrend" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.actionGetReportGroupTrend"></a>

```typescript
public readonly actionGetReportGroupTrend: string;
```

- *Type:* string

[Read] codebuild:GetReportGroupTrend.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] codebuild:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteBuilds`<sup>Required</sup> <a name="BatchDeleteBuilds" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchDeleteBuilds"></a>

```typescript
public readonly BatchDeleteBuilds: string;
```

- *Type:* string

[Write] codebuild:BatchDeleteBuilds.

---

##### `BatchGetBuildBatches`<sup>Required</sup> <a name="BatchGetBuildBatches" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetBuildBatches"></a>

```typescript
public readonly BatchGetBuildBatches: string;
```

- *Type:* string

[Read] codebuild:BatchGetBuildBatches.

---

##### `BatchGetBuilds`<sup>Required</sup> <a name="BatchGetBuilds" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetBuilds"></a>

```typescript
public readonly BatchGetBuilds: string;
```

- *Type:* string

[Read] codebuild:BatchGetBuilds.

---

##### `BatchGetCommandExecutions`<sup>Required</sup> <a name="BatchGetCommandExecutions" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetCommandExecutions"></a>

```typescript
public readonly BatchGetCommandExecutions: string;
```

- *Type:* string

[Read] codebuild:BatchGetCommandExecutions.

---

##### `BatchGetFleets`<sup>Required</sup> <a name="BatchGetFleets" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetFleets"></a>

```typescript
public readonly BatchGetFleets: string;
```

- *Type:* string

[Read] codebuild:BatchGetFleets.

---

##### `BatchGetProjects`<sup>Required</sup> <a name="BatchGetProjects" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetProjects"></a>

```typescript
public readonly BatchGetProjects: string;
```

- *Type:* string

[Read] codebuild:BatchGetProjects.

---

##### `BatchGetReportGroups`<sup>Required</sup> <a name="BatchGetReportGroups" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetReportGroups"></a>

```typescript
public readonly BatchGetReportGroups: string;
```

- *Type:* string

[Read] codebuild:BatchGetReportGroups.

---

##### `BatchGetReports`<sup>Required</sup> <a name="BatchGetReports" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetReports"></a>

```typescript
public readonly BatchGetReports: string;
```

- *Type:* string

[Read] codebuild:BatchGetReports.

---

##### `BatchGetSandboxes`<sup>Required</sup> <a name="BatchGetSandboxes" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchGetSandboxes"></a>

```typescript
public readonly BatchGetSandboxes: string;
```

- *Type:* string

[Read] codebuild:BatchGetSandboxes.

---

##### `BatchPutCodeCoverages`<sup>Required</sup> <a name="BatchPutCodeCoverages" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchPutCodeCoverages"></a>

```typescript
public readonly BatchPutCodeCoverages: string;
```

- *Type:* string

[Write] codebuild:BatchPutCodeCoverages.

---

##### `BatchPutTestCases`<sup>Required</sup> <a name="BatchPutTestCases" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.BatchPutTestCases"></a>

```typescript
public readonly BatchPutTestCases: string;
```

- *Type:* string

[Write] codebuild:BatchPutTestCases.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] codebuild:CreateFleet.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] codebuild:CreateProject.

---

##### `CreateReport`<sup>Required</sup> <a name="CreateReport" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateReport"></a>

```typescript
public readonly CreateReport: string;
```

- *Type:* string

[Write] codebuild:CreateReport.

---

##### `CreateReportGroup`<sup>Required</sup> <a name="CreateReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateReportGroup"></a>

```typescript
public readonly CreateReportGroup: string;
```

- *Type:* string

[Write] codebuild:CreateReportGroup.

---

##### `CreateWebhook`<sup>Required</sup> <a name="CreateWebhook" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.CreateWebhook"></a>

```typescript
public readonly CreateWebhook: string;
```

- *Type:* string

[Write] codebuild:CreateWebhook.

---

##### `DeleteBuildBatch`<sup>Required</sup> <a name="DeleteBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteBuildBatch"></a>

```typescript
public readonly DeleteBuildBatch: string;
```

- *Type:* string

[Write] codebuild:DeleteBuildBatch.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] codebuild:DeleteFleet.

---

##### `DeleteOAuthToken`<sup>Required</sup> <a name="DeleteOAuthToken" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteOAuthToken"></a>

```typescript
public readonly DeleteOAuthToken: string;
```

- *Type:* string

[Write] codebuild:DeleteOAuthToken.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] codebuild:DeleteProject.

---

##### `DeleteReport`<sup>Required</sup> <a name="DeleteReport" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteReport"></a>

```typescript
public readonly DeleteReport: string;
```

- *Type:* string

[Write] codebuild:DeleteReport.

---

##### `DeleteReportGroup`<sup>Required</sup> <a name="DeleteReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteReportGroup"></a>

```typescript
public readonly DeleteReportGroup: string;
```

- *Type:* string

[Write] codebuild:DeleteReportGroup.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] codebuild:DeleteResourcePolicy.

---

##### `DeleteSourceCredentials`<sup>Required</sup> <a name="DeleteSourceCredentials" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteSourceCredentials"></a>

```typescript
public readonly DeleteSourceCredentials: string;
```

- *Type:* string

[Write] codebuild:DeleteSourceCredentials.

---

##### `DeleteWebhook`<sup>Required</sup> <a name="DeleteWebhook" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DeleteWebhook"></a>

```typescript
public readonly DeleteWebhook: string;
```

- *Type:* string

[Write] codebuild:DeleteWebhook.

---

##### `DescribeCodeCoverages`<sup>Required</sup> <a name="DescribeCodeCoverages" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DescribeCodeCoverages"></a>

```typescript
public readonly DescribeCodeCoverages: string;
```

- *Type:* string

[Read] codebuild:DescribeCodeCoverages.

---

##### `DescribeTestCases`<sup>Required</sup> <a name="DescribeTestCases" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.DescribeTestCases"></a>

```typescript
public readonly DescribeTestCases: string;
```

- *Type:* string

[Read] codebuild:DescribeTestCases.

---

##### `ImportSourceCredentials`<sup>Required</sup> <a name="ImportSourceCredentials" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ImportSourceCredentials"></a>

```typescript
public readonly ImportSourceCredentials: string;
```

- *Type:* string

[Write] codebuild:ImportSourceCredentials.

---

##### `InvalidateProjectCache`<sup>Required</sup> <a name="InvalidateProjectCache" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.InvalidateProjectCache"></a>

```typescript
public readonly InvalidateProjectCache: string;
```

- *Type:* string

[Write] codebuild:InvalidateProjectCache.

---

##### `ListBuildBatches`<sup>Required</sup> <a name="ListBuildBatches" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuildBatches"></a>

```typescript
public readonly ListBuildBatches: string;
```

- *Type:* string

[List] codebuild:ListBuildBatches.

---

##### `ListBuildBatchesForProject`<sup>Required</sup> <a name="ListBuildBatchesForProject" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuildBatchesForProject"></a>

```typescript
public readonly ListBuildBatchesForProject: string;
```

- *Type:* string

[List] codebuild:ListBuildBatchesForProject.

---

##### `ListBuilds`<sup>Required</sup> <a name="ListBuilds" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuilds"></a>

```typescript
public readonly ListBuilds: string;
```

- *Type:* string

[List] codebuild:ListBuilds.

---

##### `ListBuildsForProject`<sup>Required</sup> <a name="ListBuildsForProject" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListBuildsForProject"></a>

```typescript
public readonly ListBuildsForProject: string;
```

- *Type:* string

[List] codebuild:ListBuildsForProject.

---

##### `ListCommandExecutionsForSandbox`<sup>Required</sup> <a name="ListCommandExecutionsForSandbox" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListCommandExecutionsForSandbox"></a>

```typescript
public readonly ListCommandExecutionsForSandbox: string;
```

- *Type:* string

[List] codebuild:ListCommandExecutionsForSandbox.

---

##### `ListConnectedOAuthAccounts`<sup>Required</sup> <a name="ListConnectedOAuthAccounts" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListConnectedOAuthAccounts"></a>

```typescript
public readonly ListConnectedOAuthAccounts: string;
```

- *Type:* string

[List] codebuild:ListConnectedOAuthAccounts.

---

##### `ListCuratedEnvironmentImages`<sup>Required</sup> <a name="ListCuratedEnvironmentImages" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListCuratedEnvironmentImages"></a>

```typescript
public readonly ListCuratedEnvironmentImages: string;
```

- *Type:* string

[List] codebuild:ListCuratedEnvironmentImages.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListFleets"></a>

```typescript
public readonly ListFleets: string;
```

- *Type:* string

[List] codebuild:ListFleets.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] codebuild:ListProjects.

---

##### `ListReportGroups`<sup>Required</sup> <a name="ListReportGroups" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListReportGroups"></a>

```typescript
public readonly ListReportGroups: string;
```

- *Type:* string

[List] codebuild:ListReportGroups.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListReports"></a>

```typescript
public readonly ListReports: string;
```

- *Type:* string

[List] codebuild:ListReports.

---

##### `ListReportsForReportGroup`<sup>Required</sup> <a name="ListReportsForReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListReportsForReportGroup"></a>

```typescript
public readonly ListReportsForReportGroup: string;
```

- *Type:* string

[List] codebuild:ListReportsForReportGroup.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] codebuild:ListRepositories.

---

##### `ListSandboxes`<sup>Required</sup> <a name="ListSandboxes" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSandboxes"></a>

```typescript
public readonly ListSandboxes: string;
```

- *Type:* string

[List] codebuild:ListSandboxes.

---

##### `ListSandboxesForProject`<sup>Required</sup> <a name="ListSandboxesForProject" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSandboxesForProject"></a>

```typescript
public readonly ListSandboxesForProject: string;
```

- *Type:* string

[List] codebuild:ListSandboxesForProject.

---

##### `ListSharedProjects`<sup>Required</sup> <a name="ListSharedProjects" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSharedProjects"></a>

```typescript
public readonly ListSharedProjects: string;
```

- *Type:* string

[List] codebuild:ListSharedProjects.

---

##### `ListSharedReportGroups`<sup>Required</sup> <a name="ListSharedReportGroups" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSharedReportGroups"></a>

```typescript
public readonly ListSharedReportGroups: string;
```

- *Type:* string

[List] codebuild:ListSharedReportGroups.

---

##### `ListSourceCredentials`<sup>Required</sup> <a name="ListSourceCredentials" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.ListSourceCredentials"></a>

```typescript
public readonly ListSourceCredentials: string;
```

- *Type:* string

[List] codebuild:ListSourceCredentials.

---

##### `PersistOAuthToken`<sup>Required</sup> <a name="PersistOAuthToken" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.PersistOAuthToken"></a>

```typescript
public readonly PersistOAuthToken: string;
```

- *Type:* string

[Write] codebuild:PersistOAuthToken.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] codebuild:PutResourcePolicy.

---

##### `RetryBuild`<sup>Required</sup> <a name="RetryBuild" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.RetryBuild"></a>

```typescript
public readonly RetryBuild: string;
```

- *Type:* string

[Write] codebuild:RetryBuild.

---

##### `RetryBuildBatch`<sup>Required</sup> <a name="RetryBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.RetryBuildBatch"></a>

```typescript
public readonly RetryBuildBatch: string;
```

- *Type:* string

[Write] codebuild:RetryBuildBatch.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBuild`<sup>Required</sup> <a name="StartBuild" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StartBuild"></a>

```typescript
public readonly StartBuild: string;
```

- *Type:* string

[Write] codebuild:StartBuild.

---

##### `StartBuildBatch`<sup>Required</sup> <a name="StartBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StartBuildBatch"></a>

```typescript
public readonly StartBuildBatch: string;
```

- *Type:* string

[Write] codebuild:StartBuildBatch.

---

##### `StartCommandExecution`<sup>Required</sup> <a name="StartCommandExecution" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StartCommandExecution"></a>

```typescript
public readonly StartCommandExecution: string;
```

- *Type:* string

[Write] codebuild:StartCommandExecution.

---

##### `StartSandbox`<sup>Required</sup> <a name="StartSandbox" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StartSandbox"></a>

```typescript
public readonly StartSandbox: string;
```

- *Type:* string

[Write] codebuild:StartSandbox.

---

##### `StartSandboxConnection`<sup>Required</sup> <a name="StartSandboxConnection" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StartSandboxConnection"></a>

```typescript
public readonly StartSandboxConnection: string;
```

- *Type:* string

[Write] codebuild:StartSandboxConnection.

---

##### `StopBuild`<sup>Required</sup> <a name="StopBuild" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StopBuild"></a>

```typescript
public readonly StopBuild: string;
```

- *Type:* string

[Write] codebuild:StopBuild.

---

##### `StopBuildBatch`<sup>Required</sup> <a name="StopBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StopBuildBatch"></a>

```typescript
public readonly StopBuildBatch: string;
```

- *Type:* string

[Write] codebuild:StopBuildBatch.

---

##### `StopSandbox`<sup>Required</sup> <a name="StopSandbox" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.StopSandbox"></a>

```typescript
public readonly StopSandbox: string;
```

- *Type:* string

[Write] codebuild:StopSandbox.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string;
```

- *Type:* string

[Write] codebuild:UpdateFleet.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] codebuild:UpdateProject.

---

##### `UpdateProjectVisibility`<sup>Required</sup> <a name="UpdateProjectVisibility" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateProjectVisibility"></a>

```typescript
public readonly UpdateProjectVisibility: string;
```

- *Type:* string

[Write] codebuild:UpdateProjectVisibility.

---

##### `UpdateReport`<sup>Required</sup> <a name="UpdateReport" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateReport"></a>

```typescript
public readonly UpdateReport: string;
```

- *Type:* string

[Write] codebuild:UpdateReport.

---

##### `UpdateReportGroup`<sup>Required</sup> <a name="UpdateReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateReportGroup"></a>

```typescript
public readonly UpdateReportGroup: string;
```

- *Type:* string

[Write] codebuild:UpdateReportGroup.

---

##### `UpdateWebhook`<sup>Required</sup> <a name="UpdateWebhook" id="@cdk_utils/iam.codebuild.CodeBuildActions.property.UpdateWebhook"></a>

```typescript
public readonly UpdateWebhook: string;
```

- *Type:* string

[Write] codebuild:UpdateWebhook.

---

### CodeBuildConditions <a name="CodeBuildConditions" id="@cdk_utils/iam.codebuild.CodeBuildConditions"></a>

Condition key constants and builders for codebuild.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codebuild.CodeBuildConditions.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

new codebuild.CodeBuildConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.artifacts">artifacts</a></code> | Generates a condition block for `codebuild:artifacts`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsBucketOwnerAccess">artifactsBucketOwnerAccess</a></code> | Generates a condition block for `codebuild:artifacts.bucketOwnerAccess`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsEncryptionDisabled">artifactsEncryptionDisabled</a></code> | Generates a condition block for `codebuild:artifacts.encryptionDisabled`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsLocation">artifactsLocation</a></code> | Generates a condition block for `codebuild:artifacts.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.authType">authType</a></code> | Generates a condition block for `codebuild:authType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.autoRetryLimit">autoRetryLimit</a></code> | Generates a condition block for `codebuild:autoRetryLimit`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.buildARN">buildARN</a></code> | Generates a condition block for `codebuild:buildArn`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfig">buildBatchConfig</a></code> | Generates a condition block for `codebuild:buildBatchConfig`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigRestrictionsComputeTypesAllowed">buildBatchConfigRestrictionsComputeTypesAllowed</a></code> | Generates a condition block for `codebuild:buildBatchConfig.restrictions.computeTypesAllowed`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigRestrictionsFleetsAllowed">buildBatchConfigRestrictionsFleetsAllowed</a></code> | Generates a condition block for `codebuild:buildBatchConfig.restrictions.fleetsAllowed`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigServiceRole">buildBatchConfigServiceRole</a></code> | Generates a condition block for `codebuild:buildBatchConfig.serviceRole`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.buildType">buildType</a></code> | Generates a condition block for `codebuild:buildType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.cache">cache</a></code> | Generates a condition block for `codebuild:cache`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.cacheLocation">cacheLocation</a></code> | Generates a condition block for `codebuild:cache.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.cacheModes">cacheModes</a></code> | Generates a condition block for `codebuild:cache.modes`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.cacheType">cacheType</a></code> | Generates a condition block for `codebuild:cache.type`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfiguration">computeConfiguration</a></code> | Generates a condition block for `codebuild:computeConfiguration`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationDisk">computeConfigurationDisk</a></code> | Generates a condition block for `codebuild:computeConfiguration.disk`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationInstanceType">computeConfigurationInstanceType</a></code> | Generates a condition block for `codebuild:computeConfiguration.instanceType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationMachineType">computeConfigurationMachineType</a></code> | Generates a condition block for `codebuild:computeConfiguration.machineType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationMemory">computeConfigurationMemory</a></code> | Generates a condition block for `codebuild:computeConfiguration.memory`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationVCpu">computeConfigurationVCpu</a></code> | Generates a condition block for `codebuild:computeConfiguration.vCpu`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.computeType">computeType</a></code> | Generates a condition block for `codebuild:computeType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.concurrentBuildLimit">concurrentBuildLimit</a></code> | Generates a condition block for `codebuild:concurrentBuildLimit`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.encryptionKey">encryptionKey</a></code> | Generates a condition block for `codebuild:encryptionKey`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environment">environment</a></code> | Generates a condition block for `codebuild:environment`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentCertificate">environmentCertificate</a></code> | Generates a condition block for `codebuild:environment.certificate`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfiguration">environmentComputeConfiguration</a></code> | Generates a condition block for `codebuild:environment.computeConfiguration`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationDisk">environmentComputeConfigurationDisk</a></code> | Generates a condition block for `codebuild:environment.computeConfiguration.disk`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationInstanceType">environmentComputeConfigurationInstanceType</a></code> | Generates a condition block for `codebuild:environment.computeConfiguration.instanceType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationMachineType">environmentComputeConfigurationMachineType</a></code> | Generates a condition block for `codebuild:environment.computeConfiguration.machineType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationMemory">environmentComputeConfigurationMemory</a></code> | Generates a condition block for `codebuild:environment.computeConfiguration.memory`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationVCpu">environmentComputeConfigurationVCpu</a></code> | Generates a condition block for `codebuild:environment.computeConfiguration.vCpu`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeType">environmentComputeType</a></code> | Generates a condition block for `codebuild:environment.computeType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariables">environmentEnvironmentVariables</a></code> | Generates a condition block for `codebuild:environment.environmentVariables`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariablesName">environmentEnvironmentVariablesName</a></code> | Generates a condition block for `codebuild:environment.environmentVariables.name`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariablesValue">environmentEnvironmentVariablesValue</a></code> | Generates a condition block for `codebuild:environment.environmentVariables.value`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentFleetFleetARN">environmentFleetFleetARN</a></code> | Generates a condition block for `codebuild:environment.fleet.fleetArn`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentImage">environmentImage</a></code> | Generates a condition block for `codebuild:environment.image`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentImagePullCredentialsType">environmentImagePullCredentialsType</a></code> | Generates a condition block for `codebuild:environment.imagePullCredentialsType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentPrivilegedMode">environmentPrivilegedMode</a></code> | Generates a condition block for `codebuild:environment.privilegedMode`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredential">environmentRegistryCredential</a></code> | Generates a condition block for `codebuild:environment.registryCredential`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredentialCredential">environmentRegistryCredentialCredential</a></code> | Generates a condition block for `codebuild:environment.registryCredential.credential`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredentialCredentialProvider">environmentRegistryCredentialCredentialProvider</a></code> | Generates a condition block for `codebuild:environment.registryCredential.credentialProvider`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.environmentType">environmentType</a></code> | Generates a condition block for `codebuild:environment.type`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationBucket">exportConfigS3DestinationBucket</a></code> | Generates a condition block for `codebuild:exportConfig.s3Destination.bucket`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationBucketOwner">exportConfigS3DestinationBucketOwner</a></code> | Generates a condition block for `codebuild:exportConfig.s3Destination.bucketOwner`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionDisabled">exportConfigS3DestinationEncryptionDisabled</a></code> | Generates a condition block for `codebuild:exportConfig.s3Destination.encryptionDisabled`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionKey">exportConfigS3DestinationEncryptionKey</a></code> | Generates a condition block for `codebuild:exportConfig.s3Destination.encryptionKey`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationPath">exportConfigS3DestinationPath</a></code> | Generates a condition block for `codebuild:exportConfig.s3Destination.path`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsIdentifier">fileSystemLocationsIdentifier</a></code> | Generates a condition block for `codebuild:fileSystemLocations.identifier`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsLocation">fileSystemLocationsLocation</a></code> | Generates a condition block for `codebuild:fileSystemLocations.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsType">fileSystemLocationsType</a></code> | Generates a condition block for `codebuild:fileSystemLocations.type`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.fleetServiceRole">fleetServiceRole</a></code> | Generates a condition block for `codebuild:fleetServiceRole`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.imageId">imageId</a></code> | Generates a condition block for `codebuild:imageId`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfig">logsConfig</a></code> | Generates a condition block for `codebuild:logsConfig`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3Logs">logsConfigS3Logs</a></code> | Generates a condition block for `codebuild:logsConfig.s3Logs`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsBucketOwnerAccess">logsConfigS3LogsBucketOwnerAccess</a></code> | Generates a condition block for `codebuild:logsConfig.s3Logs.bucketOwnerAccess`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsEncryptionDisabled">logsConfigS3LogsEncryptionDisabled</a></code> | Generates a condition block for `codebuild:logsConfig.s3Logs.encryptionDisabled`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsLocation">logsConfigS3LogsLocation</a></code> | Generates a condition block for `codebuild:logsConfig.s3Logs.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsStatus">logsConfigS3LogsStatus</a></code> | Generates a condition block for `codebuild:logsConfig.s3Logs.status`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.manualCreation">manualCreation</a></code> | Generates a condition block for `codebuild:manualCreation`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.projectARN">projectARN</a></code> | Generates a condition block for `codebuild:projectArn`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.projectVisibility">projectVisibility</a></code> | Generates a condition block for `codebuild:projectVisibility`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationDomain">scopeConfigurationDomain</a></code> | Generates a condition block for `codebuild:scopeConfiguration.domain`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationName">scopeConfigurationName</a></code> | Generates a condition block for `codebuild:scopeConfiguration.name`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationScope">scopeConfigurationScope</a></code> | Generates a condition block for `codebuild:scopeConfiguration.scope`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifacts">secondaryArtifacts</a></code> | Generates a condition block for `codebuild:secondaryArtifacts`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsArtifactIdentifier">secondaryArtifactsArtifactIdentifier</a></code> | Generates a condition block for `codebuild:secondaryArtifacts.artifactIdentifier`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsBucketOwnerAccess">secondaryArtifactsBucketOwnerAccess</a></code> | Generates a condition block for `codebuild:secondaryArtifacts.bucketOwnerAccess`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsEncryptionDisabled">secondaryArtifactsEncryptionDisabled</a></code> | Generates a condition block for `codebuild:secondaryArtifacts.encryptionDisabled`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsLocation">secondaryArtifactsLocation</a></code> | Generates a condition block for `codebuild:secondaryArtifacts.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySources">secondarySources</a></code> | Generates a condition block for `codebuild:secondarySources`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesAuthResource">secondarySourcesAuthResource</a></code> | Generates a condition block for `codebuild:secondarySources.auth.resource`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesAuthType">secondarySourcesAuthType</a></code> | Generates a condition block for `codebuild:secondarySources.auth.type`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildspec">secondarySourcesBuildspec</a></code> | Generates a condition block for `codebuild:secondarySources.buildspec`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigContext">secondarySourcesBuildStatusConfigContext</a></code> | Generates a condition block for `codebuild:secondarySources.buildStatusConfig.context`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigTargetURL">secondarySourcesBuildStatusConfigTargetURL</a></code> | Generates a condition block for `codebuild:secondarySources.buildStatusConfig.targetUrl`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesInsecureSSL">secondarySourcesInsecureSSL</a></code> | Generates a condition block for `codebuild:secondarySources.insecureSsl`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesLocation">secondarySourcesLocation</a></code> | Generates a condition block for `codebuild:secondarySources.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesSourceIdentifier">secondarySourcesSourceIdentifier</a></code> | Generates a condition block for `codebuild:secondarySources.sourceIdentifier`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.serverType">serverType</a></code> | Generates a condition block for `codebuild:serverType`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.serviceRole">serviceRole</a></code> | Generates a condition block for `codebuild:serviceRole`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.shouldOverwrite">shouldOverwrite</a></code> | Generates a condition block for `codebuild:shouldOverwrite`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.source">source</a></code> | Generates a condition block for `codebuild:source`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceAuthResource">sourceAuthResource</a></code> | Generates a condition block for `codebuild:source.auth.resource`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceAuthType">sourceAuthType</a></code> | Generates a condition block for `codebuild:source.auth.type`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildspec">sourceBuildspec</a></code> | Generates a condition block for `codebuild:source.buildspec`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildStatusConfigContext">sourceBuildStatusConfigContext</a></code> | Generates a condition block for `codebuild:source.buildStatusConfig.context`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildStatusConfigTargetURL">sourceBuildStatusConfigTargetURL</a></code> | Generates a condition block for `codebuild:source.buildStatusConfig.targetUrl`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceInsecureSSL">sourceInsecureSSL</a></code> | Generates a condition block for `codebuild:source.insecureSsl`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.sourceLocation">sourceLocation</a></code> | Generates a condition block for `codebuild:source.location`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.token">token</a></code> | Generates a condition block for `codebuild:token`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.username">username</a></code> | Generates a condition block for `codebuild:username`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfig">vpcConfig</a></code> | Generates a condition block for `codebuild:vpcConfig`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigSecurityGroupIds">vpcConfigSecurityGroupIds</a></code> | Generates a condition block for `codebuild:vpcConfig.securityGroupIds`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigSubnets">vpcConfigSubnets</a></code> | Generates a condition block for `codebuild:vpcConfig.subnets`. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigVPCId">vpcConfigVPCId</a></code> | Generates a condition block for `codebuild:vpcConfig.vpcId`. |

---

##### `artifacts` <a name="artifacts" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifacts"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.artifacts(value: boolean)
```

Generates a condition block for `codebuild:artifacts`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifacts.parameter.value"></a>

- *Type:* boolean

---

##### `artifactsBucketOwnerAccess` <a name="artifactsBucketOwnerAccess" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsBucketOwnerAccess"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.artifactsBucketOwnerAccess(value: string)
```

Generates a condition block for `codebuild:artifacts.bucketOwnerAccess`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsBucketOwnerAccess.parameter.value"></a>

- *Type:* string

---

##### `artifactsEncryptionDisabled` <a name="artifactsEncryptionDisabled" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsEncryptionDisabled"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.artifactsEncryptionDisabled(value: boolean)
```

Generates a condition block for `codebuild:artifacts.encryptionDisabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsEncryptionDisabled.parameter.value"></a>

- *Type:* boolean

---

##### `artifactsLocation` <a name="artifactsLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.artifactsLocation(value: string)
```

Generates a condition block for `codebuild:artifacts.location`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.artifactsLocation.parameter.value"></a>

- *Type:* string

---

##### `authType` <a name="authType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.authType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.authType(value: string)
```

Generates a condition block for `codebuild:authType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.authType.parameter.value"></a>

- *Type:* string

---

##### `autoRetryLimit` <a name="autoRetryLimit" id="@cdk_utils/iam.codebuild.CodeBuildConditions.autoRetryLimit"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.autoRetryLimit(value: number)
```

Generates a condition block for `codebuild:autoRetryLimit`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.autoRetryLimit.parameter.value"></a>

- *Type:* number

---

##### `buildARN` <a name="buildARN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildARN"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.buildARN(value: string)
```

Generates a condition block for `codebuild:buildArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildARN.parameter.value"></a>

- *Type:* string

---

##### `buildBatchConfig` <a name="buildBatchConfig" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfig"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.buildBatchConfig(value: boolean)
```

Generates a condition block for `codebuild:buildBatchConfig`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfig.parameter.value"></a>

- *Type:* boolean

---

##### `buildBatchConfigRestrictionsComputeTypesAllowed` <a name="buildBatchConfigRestrictionsComputeTypesAllowed" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigRestrictionsComputeTypesAllowed"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.buildBatchConfigRestrictionsComputeTypesAllowed(values: string[])
```

Generates a condition block for `codebuild:buildBatchConfig.restrictions.computeTypesAllowed`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigRestrictionsComputeTypesAllowed.parameter.values"></a>

- *Type:* string[]

---

##### `buildBatchConfigRestrictionsFleetsAllowed` <a name="buildBatchConfigRestrictionsFleetsAllowed" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigRestrictionsFleetsAllowed"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.buildBatchConfigRestrictionsFleetsAllowed(values: string[])
```

Generates a condition block for `codebuild:buildBatchConfig.restrictions.fleetsAllowed`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigRestrictionsFleetsAllowed.parameter.values"></a>

- *Type:* string[]

---

##### `buildBatchConfigServiceRole` <a name="buildBatchConfigServiceRole" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigServiceRole"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.buildBatchConfigServiceRole(value: string)
```

Generates a condition block for `codebuild:buildBatchConfig.serviceRole`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildBatchConfigServiceRole.parameter.value"></a>

- *Type:* string

---

##### `buildType` <a name="buildType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.buildType(value: string)
```

Generates a condition block for `codebuild:buildType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.buildType.parameter.value"></a>

- *Type:* string

---

##### `cache` <a name="cache" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cache"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.cache(value: boolean)
```

Generates a condition block for `codebuild:cache`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cache.parameter.value"></a>

- *Type:* boolean

---

##### `cacheLocation` <a name="cacheLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cacheLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.cacheLocation(value: string)
```

Generates a condition block for `codebuild:cache.location`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cacheLocation.parameter.value"></a>

- *Type:* string

---

##### `cacheModes` <a name="cacheModes" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cacheModes"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.cacheModes(values: string[])
```

Generates a condition block for `codebuild:cache.modes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cacheModes.parameter.values"></a>

- *Type:* string[]

---

##### `cacheType` <a name="cacheType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cacheType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.cacheType(value: string)
```

Generates a condition block for `codebuild:cache.type`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.cacheType.parameter.value"></a>

- *Type:* string

---

##### `computeConfiguration` <a name="computeConfiguration" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfiguration"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeConfiguration(value: boolean)
```

Generates a condition block for `codebuild:computeConfiguration`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfiguration.parameter.value"></a>

- *Type:* boolean

---

##### `computeConfigurationDisk` <a name="computeConfigurationDisk" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationDisk"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeConfigurationDisk(value: number)
```

Generates a condition block for `codebuild:computeConfiguration.disk`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationDisk.parameter.value"></a>

- *Type:* number

---

##### `computeConfigurationInstanceType` <a name="computeConfigurationInstanceType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationInstanceType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeConfigurationInstanceType(value: string)
```

Generates a condition block for `codebuild:computeConfiguration.instanceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationInstanceType.parameter.value"></a>

- *Type:* string

---

##### `computeConfigurationMachineType` <a name="computeConfigurationMachineType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationMachineType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeConfigurationMachineType(value: string)
```

Generates a condition block for `codebuild:computeConfiguration.machineType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationMachineType.parameter.value"></a>

- *Type:* string

---

##### `computeConfigurationMemory` <a name="computeConfigurationMemory" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationMemory"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeConfigurationMemory(value: number)
```

Generates a condition block for `codebuild:computeConfiguration.memory`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationMemory.parameter.value"></a>

- *Type:* number

---

##### `computeConfigurationVCpu` <a name="computeConfigurationVCpu" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationVCpu"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeConfigurationVCpu(value: number)
```

Generates a condition block for `codebuild:computeConfiguration.vCpu`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeConfigurationVCpu.parameter.value"></a>

- *Type:* number

---

##### `computeType` <a name="computeType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.computeType(value: string)
```

Generates a condition block for `codebuild:computeType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.computeType.parameter.value"></a>

- *Type:* string

---

##### `concurrentBuildLimit` <a name="concurrentBuildLimit" id="@cdk_utils/iam.codebuild.CodeBuildConditions.concurrentBuildLimit"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.concurrentBuildLimit(value: number)
```

Generates a condition block for `codebuild:concurrentBuildLimit`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.concurrentBuildLimit.parameter.value"></a>

- *Type:* number

---

##### `encryptionKey` <a name="encryptionKey" id="@cdk_utils/iam.codebuild.CodeBuildConditions.encryptionKey"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.encryptionKey(value: string)
```

Generates a condition block for `codebuild:encryptionKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.encryptionKey.parameter.value"></a>

- *Type:* string

---

##### `environment` <a name="environment" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environment"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environment(value: boolean)
```

Generates a condition block for `codebuild:environment`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environment.parameter.value"></a>

- *Type:* boolean

---

##### `environmentCertificate` <a name="environmentCertificate" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentCertificate"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentCertificate(value: string)
```

Generates a condition block for `codebuild:environment.certificate`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentCertificate.parameter.value"></a>

- *Type:* string

---

##### `environmentComputeConfiguration` <a name="environmentComputeConfiguration" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfiguration"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeConfiguration(value: boolean)
```

Generates a condition block for `codebuild:environment.computeConfiguration`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfiguration.parameter.value"></a>

- *Type:* boolean

---

##### `environmentComputeConfigurationDisk` <a name="environmentComputeConfigurationDisk" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationDisk"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeConfigurationDisk(value: number)
```

Generates a condition block for `codebuild:environment.computeConfiguration.disk`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationDisk.parameter.value"></a>

- *Type:* number

---

##### `environmentComputeConfigurationInstanceType` <a name="environmentComputeConfigurationInstanceType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationInstanceType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeConfigurationInstanceType(value: string)
```

Generates a condition block for `codebuild:environment.computeConfiguration.instanceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationInstanceType.parameter.value"></a>

- *Type:* string

---

##### `environmentComputeConfigurationMachineType` <a name="environmentComputeConfigurationMachineType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationMachineType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeConfigurationMachineType(value: string)
```

Generates a condition block for `codebuild:environment.computeConfiguration.machineType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationMachineType.parameter.value"></a>

- *Type:* string

---

##### `environmentComputeConfigurationMemory` <a name="environmentComputeConfigurationMemory" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationMemory"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeConfigurationMemory(value: number)
```

Generates a condition block for `codebuild:environment.computeConfiguration.memory`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationMemory.parameter.value"></a>

- *Type:* number

---

##### `environmentComputeConfigurationVCpu` <a name="environmentComputeConfigurationVCpu" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationVCpu"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeConfigurationVCpu(value: number)
```

Generates a condition block for `codebuild:environment.computeConfiguration.vCpu`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeConfigurationVCpu.parameter.value"></a>

- *Type:* number

---

##### `environmentComputeType` <a name="environmentComputeType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentComputeType(value: string)
```

Generates a condition block for `codebuild:environment.computeType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentComputeType.parameter.value"></a>

- *Type:* string

---

##### `environmentEnvironmentVariables` <a name="environmentEnvironmentVariables" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariables"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentEnvironmentVariables(value: boolean)
```

Generates a condition block for `codebuild:environment.environmentVariables`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariables.parameter.value"></a>

- *Type:* boolean

---

##### `environmentEnvironmentVariablesName` <a name="environmentEnvironmentVariablesName" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariablesName"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentEnvironmentVariablesName(values: string[])
```

Generates a condition block for `codebuild:environment.environmentVariables.name`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariablesName.parameter.values"></a>

- *Type:* string[]

---

##### `environmentEnvironmentVariablesValue` <a name="environmentEnvironmentVariablesValue" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariablesValue"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentEnvironmentVariablesValue(values: string[])
```

Generates a condition block for `codebuild:environment.environmentVariables.value`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentEnvironmentVariablesValue.parameter.values"></a>

- *Type:* string[]

---

##### `environmentFleetFleetARN` <a name="environmentFleetFleetARN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentFleetFleetARN"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentFleetFleetARN(value: string)
```

Generates a condition block for `codebuild:environment.fleet.fleetArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentFleetFleetARN.parameter.value"></a>

- *Type:* string

---

##### `environmentImage` <a name="environmentImage" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentImage"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentImage(value: string)
```

Generates a condition block for `codebuild:environment.image`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentImage.parameter.value"></a>

- *Type:* string

---

##### `environmentImagePullCredentialsType` <a name="environmentImagePullCredentialsType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentImagePullCredentialsType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentImagePullCredentialsType(value: string)
```

Generates a condition block for `codebuild:environment.imagePullCredentialsType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentImagePullCredentialsType.parameter.value"></a>

- *Type:* string

---

##### `environmentPrivilegedMode` <a name="environmentPrivilegedMode" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentPrivilegedMode"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentPrivilegedMode(value: boolean)
```

Generates a condition block for `codebuild:environment.privilegedMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentPrivilegedMode.parameter.value"></a>

- *Type:* boolean

---

##### `environmentRegistryCredential` <a name="environmentRegistryCredential" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredential"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentRegistryCredential(value: boolean)
```

Generates a condition block for `codebuild:environment.registryCredential`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredential.parameter.value"></a>

- *Type:* boolean

---

##### `environmentRegistryCredentialCredential` <a name="environmentRegistryCredentialCredential" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredentialCredential"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentRegistryCredentialCredential(value: string)
```

Generates a condition block for `codebuild:environment.registryCredential.credential`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredentialCredential.parameter.value"></a>

- *Type:* string

---

##### `environmentRegistryCredentialCredentialProvider` <a name="environmentRegistryCredentialCredentialProvider" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredentialCredentialProvider"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentRegistryCredentialCredentialProvider(value: string)
```

Generates a condition block for `codebuild:environment.registryCredential.credentialProvider`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentRegistryCredentialCredentialProvider.parameter.value"></a>

- *Type:* string

---

##### `environmentType` <a name="environmentType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.environmentType(value: string)
```

Generates a condition block for `codebuild:environment.type`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.environmentType.parameter.value"></a>

- *Type:* string

---

##### `exportConfigS3DestinationBucket` <a name="exportConfigS3DestinationBucket" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationBucket"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.exportConfigS3DestinationBucket(value: string)
```

Generates a condition block for `codebuild:exportConfig.s3Destination.bucket`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationBucket.parameter.value"></a>

- *Type:* string

---

##### `exportConfigS3DestinationBucketOwner` <a name="exportConfigS3DestinationBucketOwner" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationBucketOwner"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.exportConfigS3DestinationBucketOwner(value: string)
```

Generates a condition block for `codebuild:exportConfig.s3Destination.bucketOwner`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationBucketOwner.parameter.value"></a>

- *Type:* string

---

##### `exportConfigS3DestinationEncryptionDisabled` <a name="exportConfigS3DestinationEncryptionDisabled" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionDisabled"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionDisabled(value: boolean)
```

Generates a condition block for `codebuild:exportConfig.s3Destination.encryptionDisabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionDisabled.parameter.value"></a>

- *Type:* boolean

---

##### `exportConfigS3DestinationEncryptionKey` <a name="exportConfigS3DestinationEncryptionKey" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionKey"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionKey(value: string)
```

Generates a condition block for `codebuild:exportConfig.s3Destination.encryptionKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationEncryptionKey.parameter.value"></a>

- *Type:* string

---

##### `exportConfigS3DestinationPath` <a name="exportConfigS3DestinationPath" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationPath"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.exportConfigS3DestinationPath(value: string)
```

Generates a condition block for `codebuild:exportConfig.s3Destination.path`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.exportConfigS3DestinationPath.parameter.value"></a>

- *Type:* string

---

##### `fileSystemLocationsIdentifier` <a name="fileSystemLocationsIdentifier" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsIdentifier"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.fileSystemLocationsIdentifier(values: string[])
```

Generates a condition block for `codebuild:fileSystemLocations.identifier`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsIdentifier.parameter.values"></a>

- *Type:* string[]

---

##### `fileSystemLocationsLocation` <a name="fileSystemLocationsLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.fileSystemLocationsLocation(values: string[])
```

Generates a condition block for `codebuild:fileSystemLocations.location`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsLocation.parameter.values"></a>

- *Type:* string[]

---

##### `fileSystemLocationsType` <a name="fileSystemLocationsType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.fileSystemLocationsType(values: string[])
```

Generates a condition block for `codebuild:fileSystemLocations.type`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fileSystemLocationsType.parameter.values"></a>

- *Type:* string[]

---

##### `fleetServiceRole` <a name="fleetServiceRole" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fleetServiceRole"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.fleetServiceRole(value: string)
```

Generates a condition block for `codebuild:fleetServiceRole`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.fleetServiceRole.parameter.value"></a>

- *Type:* string

---

##### `imageId` <a name="imageId" id="@cdk_utils/iam.codebuild.CodeBuildConditions.imageId"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.imageId(value: string)
```

Generates a condition block for `codebuild:imageId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.imageId.parameter.value"></a>

- *Type:* string

---

##### `logsConfig` <a name="logsConfig" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfig"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.logsConfig(value: boolean)
```

Generates a condition block for `codebuild:logsConfig`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfig.parameter.value"></a>

- *Type:* boolean

---

##### `logsConfigS3Logs` <a name="logsConfigS3Logs" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3Logs"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.logsConfigS3Logs(value: boolean)
```

Generates a condition block for `codebuild:logsConfig.s3Logs`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3Logs.parameter.value"></a>

- *Type:* boolean

---

##### `logsConfigS3LogsBucketOwnerAccess` <a name="logsConfigS3LogsBucketOwnerAccess" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsBucketOwnerAccess"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.logsConfigS3LogsBucketOwnerAccess(value: string)
```

Generates a condition block for `codebuild:logsConfig.s3Logs.bucketOwnerAccess`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsBucketOwnerAccess.parameter.value"></a>

- *Type:* string

---

##### `logsConfigS3LogsEncryptionDisabled` <a name="logsConfigS3LogsEncryptionDisabled" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsEncryptionDisabled"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.logsConfigS3LogsEncryptionDisabled(value: boolean)
```

Generates a condition block for `codebuild:logsConfig.s3Logs.encryptionDisabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsEncryptionDisabled.parameter.value"></a>

- *Type:* boolean

---

##### `logsConfigS3LogsLocation` <a name="logsConfigS3LogsLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.logsConfigS3LogsLocation(value: string)
```

Generates a condition block for `codebuild:logsConfig.s3Logs.location`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsLocation.parameter.value"></a>

- *Type:* string

---

##### `logsConfigS3LogsStatus` <a name="logsConfigS3LogsStatus" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsStatus"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.logsConfigS3LogsStatus(value: string)
```

Generates a condition block for `codebuild:logsConfig.s3Logs.status`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.logsConfigS3LogsStatus.parameter.value"></a>

- *Type:* string

---

##### `manualCreation` <a name="manualCreation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.manualCreation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.manualCreation(value: boolean)
```

Generates a condition block for `codebuild:manualCreation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.manualCreation.parameter.value"></a>

- *Type:* boolean

---

##### `projectARN` <a name="projectARN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.projectARN"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.projectARN(value: string)
```

Generates a condition block for `codebuild:projectArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.projectARN.parameter.value"></a>

- *Type:* string

---

##### `projectVisibility` <a name="projectVisibility" id="@cdk_utils/iam.codebuild.CodeBuildConditions.projectVisibility"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.projectVisibility(value: string)
```

Generates a condition block for `codebuild:projectVisibility`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.projectVisibility.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codebuild.CodeBuildConditions.requestTag"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codebuild.CodeBuildConditions.resourceTag"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `scopeConfigurationDomain` <a name="scopeConfigurationDomain" id="@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationDomain"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.scopeConfigurationDomain(value: string)
```

Generates a condition block for `codebuild:scopeConfiguration.domain`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationDomain.parameter.value"></a>

- *Type:* string

---

##### `scopeConfigurationName` <a name="scopeConfigurationName" id="@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationName"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.scopeConfigurationName(value: string)
```

Generates a condition block for `codebuild:scopeConfiguration.name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationName.parameter.value"></a>

- *Type:* string

---

##### `scopeConfigurationScope` <a name="scopeConfigurationScope" id="@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationScope"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.scopeConfigurationScope(value: string)
```

Generates a condition block for `codebuild:scopeConfiguration.scope`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.scopeConfigurationScope.parameter.value"></a>

- *Type:* string

---

##### `secondaryArtifacts` <a name="secondaryArtifacts" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifacts"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondaryArtifacts(value: boolean)
```

Generates a condition block for `codebuild:secondaryArtifacts`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifacts.parameter.value"></a>

- *Type:* boolean

---

##### `secondaryArtifactsArtifactIdentifier` <a name="secondaryArtifactsArtifactIdentifier" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsArtifactIdentifier"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondaryArtifactsArtifactIdentifier(values: string[])
```

Generates a condition block for `codebuild:secondaryArtifacts.artifactIdentifier`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsArtifactIdentifier.parameter.values"></a>

- *Type:* string[]

---

##### `secondaryArtifactsBucketOwnerAccess` <a name="secondaryArtifactsBucketOwnerAccess" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsBucketOwnerAccess"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondaryArtifactsBucketOwnerAccess(values: string[])
```

Generates a condition block for `codebuild:secondaryArtifacts.bucketOwnerAccess`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsBucketOwnerAccess.parameter.values"></a>

- *Type:* string[]

---

##### `secondaryArtifactsEncryptionDisabled` <a name="secondaryArtifactsEncryptionDisabled" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsEncryptionDisabled"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondaryArtifactsEncryptionDisabled(values: boolean[])
```

Generates a condition block for `codebuild:secondaryArtifacts.encryptionDisabled`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsEncryptionDisabled.parameter.values"></a>

- *Type:* boolean[]

---

##### `secondaryArtifactsLocation` <a name="secondaryArtifactsLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondaryArtifactsLocation(values: string[])
```

Generates a condition block for `codebuild:secondaryArtifacts.location`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondaryArtifactsLocation.parameter.values"></a>

- *Type:* string[]

---

##### `secondarySources` <a name="secondarySources" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySources"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySources(value: boolean)
```

Generates a condition block for `codebuild:secondarySources`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySources.parameter.value"></a>

- *Type:* boolean

---

##### `secondarySourcesAuthResource` <a name="secondarySourcesAuthResource" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesAuthResource"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesAuthResource(values: string[])
```

Generates a condition block for `codebuild:secondarySources.auth.resource`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesAuthResource.parameter.values"></a>

- *Type:* string[]

---

##### `secondarySourcesAuthType` <a name="secondarySourcesAuthType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesAuthType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesAuthType(values: string[])
```

Generates a condition block for `codebuild:secondarySources.auth.type`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesAuthType.parameter.values"></a>

- *Type:* string[]

---

##### `secondarySourcesBuildspec` <a name="secondarySourcesBuildspec" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildspec"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesBuildspec(value: boolean)
```

Generates a condition block for `codebuild:secondarySources.buildspec`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildspec.parameter.value"></a>

- *Type:* boolean

---

##### `secondarySourcesBuildStatusConfigContext` <a name="secondarySourcesBuildStatusConfigContext" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigContext"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigContext(values: string[])
```

Generates a condition block for `codebuild:secondarySources.buildStatusConfig.context`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigContext.parameter.values"></a>

- *Type:* string[]

---

##### `secondarySourcesBuildStatusConfigTargetURL` <a name="secondarySourcesBuildStatusConfigTargetURL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigTargetURL"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigTargetURL(values: string[])
```

Generates a condition block for `codebuild:secondarySources.buildStatusConfig.targetUrl`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesBuildStatusConfigTargetURL.parameter.values"></a>

- *Type:* string[]

---

##### `secondarySourcesInsecureSSL` <a name="secondarySourcesInsecureSSL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesInsecureSSL"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesInsecureSSL(values: boolean[])
```

Generates a condition block for `codebuild:secondarySources.insecureSsl`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesInsecureSSL.parameter.values"></a>

- *Type:* boolean[]

---

##### `secondarySourcesLocation` <a name="secondarySourcesLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesLocation(values: string[])
```

Generates a condition block for `codebuild:secondarySources.location`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesLocation.parameter.values"></a>

- *Type:* string[]

---

##### `secondarySourcesSourceIdentifier` <a name="secondarySourcesSourceIdentifier" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesSourceIdentifier"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.secondarySourcesSourceIdentifier(values: string[])
```

Generates a condition block for `codebuild:secondarySources.sourceIdentifier`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.secondarySourcesSourceIdentifier.parameter.values"></a>

- *Type:* string[]

---

##### `serverType` <a name="serverType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.serverType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.serverType(value: string)
```

Generates a condition block for `codebuild:serverType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.serverType.parameter.value"></a>

- *Type:* string

---

##### `serviceRole` <a name="serviceRole" id="@cdk_utils/iam.codebuild.CodeBuildConditions.serviceRole"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.serviceRole(value: string)
```

Generates a condition block for `codebuild:serviceRole`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.serviceRole.parameter.value"></a>

- *Type:* string

---

##### `shouldOverwrite` <a name="shouldOverwrite" id="@cdk_utils/iam.codebuild.CodeBuildConditions.shouldOverwrite"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.shouldOverwrite(value: boolean)
```

Generates a condition block for `codebuild:shouldOverwrite`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.shouldOverwrite.parameter.value"></a>

- *Type:* boolean

---

##### `source` <a name="source" id="@cdk_utils/iam.codebuild.CodeBuildConditions.source"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.source(value: boolean)
```

Generates a condition block for `codebuild:source`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.source.parameter.value"></a>

- *Type:* boolean

---

##### `sourceAuthResource` <a name="sourceAuthResource" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceAuthResource"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceAuthResource(value: string)
```

Generates a condition block for `codebuild:source.auth.resource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceAuthResource.parameter.value"></a>

- *Type:* string

---

##### `sourceAuthType` <a name="sourceAuthType" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceAuthType"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceAuthType(value: string)
```

Generates a condition block for `codebuild:source.auth.type`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceAuthType.parameter.value"></a>

- *Type:* string

---

##### `sourceBuildspec` <a name="sourceBuildspec" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildspec"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceBuildspec(value: boolean)
```

Generates a condition block for `codebuild:source.buildspec`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildspec.parameter.value"></a>

- *Type:* boolean

---

##### `sourceBuildStatusConfigContext` <a name="sourceBuildStatusConfigContext" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildStatusConfigContext"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceBuildStatusConfigContext(value: string)
```

Generates a condition block for `codebuild:source.buildStatusConfig.context`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildStatusConfigContext.parameter.value"></a>

- *Type:* string

---

##### `sourceBuildStatusConfigTargetURL` <a name="sourceBuildStatusConfigTargetURL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildStatusConfigTargetURL"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceBuildStatusConfigTargetURL(value: string)
```

Generates a condition block for `codebuild:source.buildStatusConfig.targetUrl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceBuildStatusConfigTargetURL.parameter.value"></a>

- *Type:* string

---

##### `sourceInsecureSSL` <a name="sourceInsecureSSL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceInsecureSSL"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceInsecureSSL(value: boolean)
```

Generates a condition block for `codebuild:source.insecureSsl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceInsecureSSL.parameter.value"></a>

- *Type:* boolean

---

##### `sourceLocation` <a name="sourceLocation" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceLocation"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.sourceLocation(value: string)
```

Generates a condition block for `codebuild:source.location`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.sourceLocation.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.tagKeys"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `token` <a name="token" id="@cdk_utils/iam.codebuild.CodeBuildConditions.token"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.token(value: string)
```

Generates a condition block for `codebuild:token`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.token.parameter.value"></a>

- *Type:* string

---

##### `username` <a name="username" id="@cdk_utils/iam.codebuild.CodeBuildConditions.username"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.username(value: string)
```

Generates a condition block for `codebuild:username`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.username.parameter.value"></a>

- *Type:* string

---

##### `vpcConfig` <a name="vpcConfig" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfig"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.vpcConfig(value: boolean)
```

Generates a condition block for `codebuild:vpcConfig`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfig.parameter.value"></a>

- *Type:* boolean

---

##### `vpcConfigSecurityGroupIds` <a name="vpcConfigSecurityGroupIds" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigSecurityGroupIds"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.vpcConfigSecurityGroupIds(values: string[])
```

Generates a condition block for `codebuild:vpcConfig.securityGroupIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigSecurityGroupIds.parameter.values"></a>

- *Type:* string[]

---

##### `vpcConfigSubnets` <a name="vpcConfigSubnets" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigSubnets"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.vpcConfigSubnets(values: string[])
```

Generates a condition block for `codebuild:vpcConfig.subnets`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigSubnets.parameter.values"></a>

- *Type:* string[]

---

##### `vpcConfigVPCId` <a name="vpcConfigVPCId" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigVPCId"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildConditions.vpcConfigVPCId(value: string)
```

Generates a condition block for `codebuild:vpcConfig.vpcId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codebuild.CodeBuildConditions.vpcConfigVPCId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS">ARTIFACTS</a></code> | <code>string</code> | Condition key: codebuild:artifacts (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS_BUCKET_OWNER_ACCESS">ARTIFACTS_BUCKET_OWNER_ACCESS</a></code> | <code>string</code> | Condition key: codebuild:artifacts.bucketOwnerAccess (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS_ENCRYPTION_DISABLED">ARTIFACTS_ENCRYPTION_DISABLED</a></code> | <code>string</code> | Condition key: codebuild:artifacts.encryptionDisabled (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS_LOCATION">ARTIFACTS_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:artifacts.location (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.AUTH_TYPE">AUTH_TYPE</a></code> | <code>string</code> | Condition key: codebuild:authType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.AUTO_RETRY_LIMIT">AUTO_RETRY_LIMIT</a></code> | <code>string</code> | Condition key: codebuild:autoRetryLimit (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_ARN">BUILD_ARN</a></code> | <code>string</code> | Condition key: codebuild:buildArn (ARN). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG">BUILD_BATCH_CONFIG</a></code> | <code>string</code> | Condition key: codebuild:buildBatchConfig (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED">BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED</a></code> | <code>string</code> | Condition key: codebuild:buildBatchConfig.restrictions.computeTypesAllowed (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED">BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED</a></code> | <code>string</code> | Condition key: codebuild:buildBatchConfig.restrictions.fleetsAllowed (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG_SERVICE_ROLE">BUILD_BATCH_CONFIG_SERVICE_ROLE</a></code> | <code>string</code> | Condition key: codebuild:buildBatchConfig.serviceRole (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_TYPE">BUILD_TYPE</a></code> | <code>string</code> | Condition key: codebuild:buildType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE">CACHE</a></code> | <code>string</code> | Condition key: codebuild:cache (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE_LOCATION">CACHE_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:cache.location (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE_MODES">CACHE_MODES</a></code> | <code>string</code> | Condition key: codebuild:cache.modes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE_TYPE">CACHE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:cache.type (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION">COMPUTE_CONFIGURATION</a></code> | <code>string</code> | Condition key: codebuild:computeConfiguration (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_DISK">COMPUTE_CONFIGURATION_DISK</a></code> | <code>string</code> | Condition key: codebuild:computeConfiguration.disk (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_INSTANCE_TYPE">COMPUTE_CONFIGURATION_INSTANCE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:computeConfiguration.instanceType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_MACHINE_TYPE">COMPUTE_CONFIGURATION_MACHINE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:computeConfiguration.machineType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_MEMORY">COMPUTE_CONFIGURATION_MEMORY</a></code> | <code>string</code> | Condition key: codebuild:computeConfiguration.memory (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_V_CPU">COMPUTE_CONFIGURATION_V_CPU</a></code> | <code>string</code> | Condition key: codebuild:computeConfiguration.vCpu (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_TYPE">COMPUTE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:computeType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CONCURRENT_BUILD_LIMIT">CONCURRENT_BUILD_LIMIT</a></code> | <code>string</code> | Condition key: codebuild:concurrentBuildLimit (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateReportGroupConditionKeys">CreateReportGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReportGroup action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateWebhookConditionKeys">CreateWebhookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebhook action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENCRYPTION_KEY">ENCRYPTION_KEY</a></code> | <code>string</code> | Condition key: codebuild:encryptionKey (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT">ENVIRONMENT</a></code> | <code>string</code> | Condition key: codebuild:environment (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_CERTIFICATE">ENVIRONMENT_CERTIFICATE</a></code> | <code>string</code> | Condition key: codebuild:environment.certificate (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION">ENVIRONMENT_COMPUTE_CONFIGURATION</a></code> | <code>string</code> | Condition key: codebuild:environment.computeConfiguration (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_DISK">ENVIRONMENT_COMPUTE_CONFIGURATION_DISK</a></code> | <code>string</code> | Condition key: codebuild:environment.computeConfiguration.disk (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE">ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:environment.computeConfiguration.instanceType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE">ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:environment.computeConfiguration.machineType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY">ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY</a></code> | <code>string</code> | Condition key: codebuild:environment.computeConfiguration.memory (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU">ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU</a></code> | <code>string</code> | Condition key: codebuild:environment.computeConfiguration.vCpu (Numeric). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_TYPE">ENVIRONMENT_COMPUTE_TYPE</a></code> | <code>string</code> | Condition key: codebuild:environment.computeType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_ENVIRONMENT_VARIABLES">ENVIRONMENT_ENVIRONMENT_VARIABLES</a></code> | <code>string</code> | Condition key: codebuild:environment.environmentVariables (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME">ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME</a></code> | <code>string</code> | Condition key: codebuild:environment.environmentVariables.name (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE">ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE</a></code> | <code>string</code> | Condition key: codebuild:environment.environmentVariables.value (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_FLEET_FLEET_ARN">ENVIRONMENT_FLEET_FLEET_ARN</a></code> | <code>string</code> | Condition key: codebuild:environment.fleet.fleetArn (ARN). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_IMAGE">ENVIRONMENT_IMAGE</a></code> | <code>string</code> | Condition key: codebuild:environment.image (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE">ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE</a></code> | <code>string</code> | Condition key: codebuild:environment.imagePullCredentialsType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_PRIVILEGED_MODE">ENVIRONMENT_PRIVILEGED_MODE</a></code> | <code>string</code> | Condition key: codebuild:environment.privilegedMode (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_REGISTRY_CREDENTIAL">ENVIRONMENT_REGISTRY_CREDENTIAL</a></code> | <code>string</code> | Condition key: codebuild:environment.registryCredential (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL">ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL</a></code> | <code>string</code> | Condition key: codebuild:environment.registryCredential.credential (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER">ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER</a></code> | <code>string</code> | Condition key: codebuild:environment.registryCredential.credentialProvider (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_TYPE">ENVIRONMENT_TYPE</a></code> | <code>string</code> | Condition key: codebuild:environment.type (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_BUCKET">EXPORT_CONFIG_S3_DESTINATION_BUCKET</a></code> | <code>string</code> | Condition key: codebuild:exportConfig.s3Destination.bucket (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER">EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER</a></code> | <code>string</code> | Condition key: codebuild:exportConfig.s3Destination.bucketOwner (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED">EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED</a></code> | <code>string</code> | Condition key: codebuild:exportConfig.s3Destination.encryptionDisabled (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY">EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY</a></code> | <code>string</code> | Condition key: codebuild:exportConfig.s3Destination.encryptionKey (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_PATH">EXPORT_CONFIG_S3_DESTINATION_PATH</a></code> | <code>string</code> | Condition key: codebuild:exportConfig.s3Destination.path (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.FILE_SYSTEM_LOCATIONS_IDENTIFIER">FILE_SYSTEM_LOCATIONS_IDENTIFIER</a></code> | <code>string</code> | Condition key: codebuild:fileSystemLocations.identifier (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.FILE_SYSTEM_LOCATIONS_LOCATION">FILE_SYSTEM_LOCATIONS_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:fileSystemLocations.location (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.FILE_SYSTEM_LOCATIONS_TYPE">FILE_SYSTEM_LOCATIONS_TYPE</a></code> | <code>string</code> | Condition key: codebuild:fileSystemLocations.type (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.FLEET_SERVICE_ROLE">FLEET_SERVICE_ROLE</a></code> | <code>string</code> | Condition key: codebuild:fleetServiceRole (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.IMAGE_ID">IMAGE_ID</a></code> | <code>string</code> | Condition key: codebuild:imageId (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.ImportSourceCredentialsConditionKeys">ImportSourceCredentialsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportSourceCredentials action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG">LOGS_CONFIG</a></code> | <code>string</code> | Condition key: codebuild:logsConfig (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS">LOGS_CONFIG_S3_LOGS</a></code> | <code>string</code> | Condition key: codebuild:logsConfig.s3Logs (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS">LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS</a></code> | <code>string</code> | Condition key: codebuild:logsConfig.s3Logs.bucketOwnerAccess (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED">LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED</a></code> | <code>string</code> | Condition key: codebuild:logsConfig.s3Logs.encryptionDisabled (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_LOCATION">LOGS_CONFIG_S3_LOGS_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:logsConfig.s3Logs.location (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_STATUS">LOGS_CONFIG_S3_LOGS_STATUS</a></code> | <code>string</code> | Condition key: codebuild:logsConfig.s3Logs.status (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.MANUAL_CREATION">MANUAL_CREATION</a></code> | <code>string</code> | Condition key: codebuild:manualCreation (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.PROJECT_ARN">PROJECT_ARN</a></code> | <code>string</code> | Condition key: codebuild:projectArn (ARN). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.PROJECT_VISIBILITY">PROJECT_VISIBILITY</a></code> | <code>string</code> | Condition key: codebuild:projectVisibility (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SCOPE_CONFIGURATION_DOMAIN">SCOPE_CONFIGURATION_DOMAIN</a></code> | <code>string</code> | Condition key: codebuild:scopeConfiguration.domain (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SCOPE_CONFIGURATION_NAME">SCOPE_CONFIGURATION_NAME</a></code> | <code>string</code> | Condition key: codebuild:scopeConfiguration.name (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SCOPE_CONFIGURATION_SCOPE">SCOPE_CONFIGURATION_SCOPE</a></code> | <code>string</code> | Condition key: codebuild:scopeConfiguration.scope (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS">SECONDARY_ARTIFACTS</a></code> | <code>string</code> | Condition key: codebuild:secondaryArtifacts (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER">SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER</a></code> | <code>string</code> | Condition key: codebuild:secondaryArtifacts.artifactIdentifier (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS">SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS</a></code> | <code>string</code> | Condition key: codebuild:secondaryArtifacts.bucketOwnerAccess (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED">SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED</a></code> | <code>string</code> | Condition key: codebuild:secondaryArtifacts.encryptionDisabled (ArrayOfBool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_LOCATION">SECONDARY_ARTIFACTS_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:secondaryArtifacts.location (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES">SECONDARY_SOURCES</a></code> | <code>string</code> | Condition key: codebuild:secondarySources (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_AUTH_RESOURCE">SECONDARY_SOURCES_AUTH_RESOURCE</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.auth.resource (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_AUTH_TYPE">SECONDARY_SOURCES_AUTH_TYPE</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.auth.type (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT">SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.buildStatusConfig.context (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL">SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.buildStatusConfig.targetUrl (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_BUILDSPEC">SECONDARY_SOURCES_BUILDSPEC</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.buildspec (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_INSECURE_SSL">SECONDARY_SOURCES_INSECURE_SSL</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.insecureSsl (ArrayOfBool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_LOCATION">SECONDARY_SOURCES_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.location (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_SOURCE_IDENTIFIER">SECONDARY_SOURCES_SOURCE_IDENTIFIER</a></code> | <code>string</code> | Condition key: codebuild:secondarySources.sourceIdentifier (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SERVER_TYPE">SERVER_TYPE</a></code> | <code>string</code> | Condition key: codebuild:serverType (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SERVICE_ROLE">SERVICE_ROLE</a></code> | <code>string</code> | Condition key: codebuild:serviceRole (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SHOULD_OVERWRITE">SHOULD_OVERWRITE</a></code> | <code>string</code> | Condition key: codebuild:shouldOverwrite (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE">SOURCE</a></code> | <code>string</code> | Condition key: codebuild:source (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_AUTH_RESOURCE">SOURCE_AUTH_RESOURCE</a></code> | <code>string</code> | Condition key: codebuild:source.auth.resource (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_AUTH_TYPE">SOURCE_AUTH_TYPE</a></code> | <code>string</code> | Condition key: codebuild:source.auth.type (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_BUILD_STATUS_CONFIG_CONTEXT">SOURCE_BUILD_STATUS_CONFIG_CONTEXT</a></code> | <code>string</code> | Condition key: codebuild:source.buildStatusConfig.context (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_BUILD_STATUS_CONFIG_TARGET_URL">SOURCE_BUILD_STATUS_CONFIG_TARGET_URL</a></code> | <code>string</code> | Condition key: codebuild:source.buildStatusConfig.targetUrl (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_BUILDSPEC">SOURCE_BUILDSPEC</a></code> | <code>string</code> | Condition key: codebuild:source.buildspec (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_INSECURE_SSL">SOURCE_INSECURE_SSL</a></code> | <code>string</code> | Condition key: codebuild:source.insecureSsl (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_LOCATION">SOURCE_LOCATION</a></code> | <code>string</code> | Condition key: codebuild:source.location (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.StartBuildBatchConditionKeys">StartBuildBatchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartBuildBatch action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.StartBuildConditionKeys">StartBuildConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartBuild action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.TOKEN">TOKEN</a></code> | <code>string</code> | Condition key: codebuild:token (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateFleetConditionKeys">UpdateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateFleet action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateProjectConditionKeys">UpdateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProject action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateProjectVisibilityConditionKeys">UpdateProjectVisibilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProjectVisibility action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateReportGroupConditionKeys">UpdateReportGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReportGroup action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateWebhookConditionKeys">UpdateWebhookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWebhook action. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.USERNAME">USERNAME</a></code> | <code>string</code> | Condition key: codebuild:username (String). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG">VPC_CONFIG</a></code> | <code>string</code> | Condition key: codebuild:vpcConfig (Bool). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG_SECURITY_GROUP_IDS">VPC_CONFIG_SECURITY_GROUP_IDS</a></code> | <code>string</code> | Condition key: codebuild:vpcConfig.securityGroupIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG_SUBNETS">VPC_CONFIG_SUBNETS</a></code> | <code>string</code> | Condition key: codebuild:vpcConfig.subnets (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG_VPC_ID">VPC_CONFIG_VPC_ID</a></code> | <code>string</code> | Condition key: codebuild:vpcConfig.vpcId (String). |

---

##### `ARTIFACTS`<sup>Required</sup> <a name="ARTIFACTS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS"></a>

```typescript
public readonly ARTIFACTS: string;
```

- *Type:* string

Condition key: codebuild:artifacts (Bool).

---

##### `ARTIFACTS_BUCKET_OWNER_ACCESS`<sup>Required</sup> <a name="ARTIFACTS_BUCKET_OWNER_ACCESS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS_BUCKET_OWNER_ACCESS"></a>

```typescript
public readonly ARTIFACTS_BUCKET_OWNER_ACCESS: string;
```

- *Type:* string

Condition key: codebuild:artifacts.bucketOwnerAccess (String).

---

##### `ARTIFACTS_ENCRYPTION_DISABLED`<sup>Required</sup> <a name="ARTIFACTS_ENCRYPTION_DISABLED" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS_ENCRYPTION_DISABLED"></a>

```typescript
public readonly ARTIFACTS_ENCRYPTION_DISABLED: string;
```

- *Type:* string

Condition key: codebuild:artifacts.encryptionDisabled (Bool).

---

##### `ARTIFACTS_LOCATION`<sup>Required</sup> <a name="ARTIFACTS_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ARTIFACTS_LOCATION"></a>

```typescript
public readonly ARTIFACTS_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:artifacts.location (String).

---

##### `AUTH_TYPE`<sup>Required</sup> <a name="AUTH_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.AUTH_TYPE"></a>

```typescript
public readonly AUTH_TYPE: string;
```

- *Type:* string

Condition key: codebuild:authType (String).

---

##### `AUTO_RETRY_LIMIT`<sup>Required</sup> <a name="AUTO_RETRY_LIMIT" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.AUTO_RETRY_LIMIT"></a>

```typescript
public readonly AUTO_RETRY_LIMIT: string;
```

- *Type:* string

Condition key: codebuild:autoRetryLimit (Numeric).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BUILD_ARN`<sup>Required</sup> <a name="BUILD_ARN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_ARN"></a>

```typescript
public readonly BUILD_ARN: string;
```

- *Type:* string

Condition key: codebuild:buildArn (ARN).

---

##### `BUILD_BATCH_CONFIG`<sup>Required</sup> <a name="BUILD_BATCH_CONFIG" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG"></a>

```typescript
public readonly BUILD_BATCH_CONFIG: string;
```

- *Type:* string

Condition key: codebuild:buildBatchConfig (Bool).

---

##### `BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED`<sup>Required</sup> <a name="BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED"></a>

```typescript
public readonly BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED: string;
```

- *Type:* string

Condition key: codebuild:buildBatchConfig.restrictions.computeTypesAllowed (ArrayOfString).

---

##### `BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED`<sup>Required</sup> <a name="BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED"></a>

```typescript
public readonly BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED: string;
```

- *Type:* string

Condition key: codebuild:buildBatchConfig.restrictions.fleetsAllowed (ArrayOfString).

---

##### `BUILD_BATCH_CONFIG_SERVICE_ROLE`<sup>Required</sup> <a name="BUILD_BATCH_CONFIG_SERVICE_ROLE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_BATCH_CONFIG_SERVICE_ROLE"></a>

```typescript
public readonly BUILD_BATCH_CONFIG_SERVICE_ROLE: string;
```

- *Type:* string

Condition key: codebuild:buildBatchConfig.serviceRole (String).

---

##### `BUILD_TYPE`<sup>Required</sup> <a name="BUILD_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.BUILD_TYPE"></a>

```typescript
public readonly BUILD_TYPE: string;
```

- *Type:* string

Condition key: codebuild:buildType (String).

---

##### `CACHE`<sup>Required</sup> <a name="CACHE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE"></a>

```typescript
public readonly CACHE: string;
```

- *Type:* string

Condition key: codebuild:cache (Bool).

---

##### `CACHE_LOCATION`<sup>Required</sup> <a name="CACHE_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE_LOCATION"></a>

```typescript
public readonly CACHE_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:cache.location (String).

---

##### `CACHE_MODES`<sup>Required</sup> <a name="CACHE_MODES" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE_MODES"></a>

```typescript
public readonly CACHE_MODES: string;
```

- *Type:* string

Condition key: codebuild:cache.modes (ArrayOfString).

---

##### `CACHE_TYPE`<sup>Required</sup> <a name="CACHE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CACHE_TYPE"></a>

```typescript
public readonly CACHE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:cache.type (String).

---

##### `COMPUTE_CONFIGURATION`<sup>Required</sup> <a name="COMPUTE_CONFIGURATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION"></a>

```typescript
public readonly COMPUTE_CONFIGURATION: string;
```

- *Type:* string

Condition key: codebuild:computeConfiguration (Bool).

---

##### `COMPUTE_CONFIGURATION_DISK`<sup>Required</sup> <a name="COMPUTE_CONFIGURATION_DISK" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_DISK"></a>

```typescript
public readonly COMPUTE_CONFIGURATION_DISK: string;
```

- *Type:* string

Condition key: codebuild:computeConfiguration.disk (Numeric).

---

##### `COMPUTE_CONFIGURATION_INSTANCE_TYPE`<sup>Required</sup> <a name="COMPUTE_CONFIGURATION_INSTANCE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_INSTANCE_TYPE"></a>

```typescript
public readonly COMPUTE_CONFIGURATION_INSTANCE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:computeConfiguration.instanceType (String).

---

##### `COMPUTE_CONFIGURATION_MACHINE_TYPE`<sup>Required</sup> <a name="COMPUTE_CONFIGURATION_MACHINE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_MACHINE_TYPE"></a>

```typescript
public readonly COMPUTE_CONFIGURATION_MACHINE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:computeConfiguration.machineType (String).

---

##### `COMPUTE_CONFIGURATION_MEMORY`<sup>Required</sup> <a name="COMPUTE_CONFIGURATION_MEMORY" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_MEMORY"></a>

```typescript
public readonly COMPUTE_CONFIGURATION_MEMORY: string;
```

- *Type:* string

Condition key: codebuild:computeConfiguration.memory (Numeric).

---

##### `COMPUTE_CONFIGURATION_V_CPU`<sup>Required</sup> <a name="COMPUTE_CONFIGURATION_V_CPU" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_CONFIGURATION_V_CPU"></a>

```typescript
public readonly COMPUTE_CONFIGURATION_V_CPU: string;
```

- *Type:* string

Condition key: codebuild:computeConfiguration.vCpu (Numeric).

---

##### `COMPUTE_TYPE`<sup>Required</sup> <a name="COMPUTE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.COMPUTE_TYPE"></a>

```typescript
public readonly COMPUTE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:computeType (String).

---

##### `CONCURRENT_BUILD_LIMIT`<sup>Required</sup> <a name="CONCURRENT_BUILD_LIMIT" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CONCURRENT_BUILD_LIMIT"></a>

```typescript
public readonly CONCURRENT_BUILD_LIMIT: string;
```

- *Type:* string

Condition key: codebuild:concurrentBuildLimit (Numeric).

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `CreateReportGroupConditionKeys`<sup>Required</sup> <a name="CreateReportGroupConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateReportGroupConditionKeys"></a>

```typescript
public readonly CreateReportGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReportGroup action.

---

##### `CreateWebhookConditionKeys`<sup>Required</sup> <a name="CreateWebhookConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.CreateWebhookConditionKeys"></a>

```typescript
public readonly CreateWebhookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebhook action.

---

##### `ENCRYPTION_KEY`<sup>Required</sup> <a name="ENCRYPTION_KEY" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENCRYPTION_KEY"></a>

```typescript
public readonly ENCRYPTION_KEY: string;
```

- *Type:* string

Condition key: codebuild:encryptionKey (String).

---

##### `ENVIRONMENT`<sup>Required</sup> <a name="ENVIRONMENT" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT"></a>

```typescript
public readonly ENVIRONMENT: string;
```

- *Type:* string

Condition key: codebuild:environment (Bool).

---

##### `ENVIRONMENT_CERTIFICATE`<sup>Required</sup> <a name="ENVIRONMENT_CERTIFICATE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_CERTIFICATE"></a>

```typescript
public readonly ENVIRONMENT_CERTIFICATE: string;
```

- *Type:* string

Condition key: codebuild:environment.certificate (String).

---

##### `ENVIRONMENT_COMPUTE_CONFIGURATION`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_CONFIGURATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_CONFIGURATION: string;
```

- *Type:* string

Condition key: codebuild:environment.computeConfiguration (Bool).

---

##### `ENVIRONMENT_COMPUTE_CONFIGURATION_DISK`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_CONFIGURATION_DISK" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_DISK"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_CONFIGURATION_DISK: string;
```

- *Type:* string

Condition key: codebuild:environment.computeConfiguration.disk (Numeric).

---

##### `ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:environment.computeConfiguration.instanceType (String).

---

##### `ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:environment.computeConfiguration.machineType (String).

---

##### `ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY: string;
```

- *Type:* string

Condition key: codebuild:environment.computeConfiguration.memory (Numeric).

---

##### `ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU: string;
```

- *Type:* string

Condition key: codebuild:environment.computeConfiguration.vCpu (Numeric).

---

##### `ENVIRONMENT_COMPUTE_TYPE`<sup>Required</sup> <a name="ENVIRONMENT_COMPUTE_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_COMPUTE_TYPE"></a>

```typescript
public readonly ENVIRONMENT_COMPUTE_TYPE: string;
```

- *Type:* string

Condition key: codebuild:environment.computeType (String).

---

##### `ENVIRONMENT_ENVIRONMENT_VARIABLES`<sup>Required</sup> <a name="ENVIRONMENT_ENVIRONMENT_VARIABLES" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_ENVIRONMENT_VARIABLES"></a>

```typescript
public readonly ENVIRONMENT_ENVIRONMENT_VARIABLES: string;
```

- *Type:* string

Condition key: codebuild:environment.environmentVariables (Bool).

---

##### `ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME`<sup>Required</sup> <a name="ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME"></a>

```typescript
public readonly ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME: string;
```

- *Type:* string

Condition key: codebuild:environment.environmentVariables.name (ArrayOfString).

---

##### `ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE`<sup>Required</sup> <a name="ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE"></a>

```typescript
public readonly ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE: string;
```

- *Type:* string

Condition key: codebuild:environment.environmentVariables.value (ArrayOfString).

---

##### `ENVIRONMENT_FLEET_FLEET_ARN`<sup>Required</sup> <a name="ENVIRONMENT_FLEET_FLEET_ARN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_FLEET_FLEET_ARN"></a>

```typescript
public readonly ENVIRONMENT_FLEET_FLEET_ARN: string;
```

- *Type:* string

Condition key: codebuild:environment.fleet.fleetArn (ARN).

---

##### `ENVIRONMENT_IMAGE`<sup>Required</sup> <a name="ENVIRONMENT_IMAGE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_IMAGE"></a>

```typescript
public readonly ENVIRONMENT_IMAGE: string;
```

- *Type:* string

Condition key: codebuild:environment.image (String).

---

##### `ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE`<sup>Required</sup> <a name="ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE"></a>

```typescript
public readonly ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE: string;
```

- *Type:* string

Condition key: codebuild:environment.imagePullCredentialsType (String).

---

##### `ENVIRONMENT_PRIVILEGED_MODE`<sup>Required</sup> <a name="ENVIRONMENT_PRIVILEGED_MODE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_PRIVILEGED_MODE"></a>

```typescript
public readonly ENVIRONMENT_PRIVILEGED_MODE: string;
```

- *Type:* string

Condition key: codebuild:environment.privilegedMode (Bool).

---

##### `ENVIRONMENT_REGISTRY_CREDENTIAL`<sup>Required</sup> <a name="ENVIRONMENT_REGISTRY_CREDENTIAL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_REGISTRY_CREDENTIAL"></a>

```typescript
public readonly ENVIRONMENT_REGISTRY_CREDENTIAL: string;
```

- *Type:* string

Condition key: codebuild:environment.registryCredential (Bool).

---

##### `ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL`<sup>Required</sup> <a name="ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL"></a>

```typescript
public readonly ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL: string;
```

- *Type:* string

Condition key: codebuild:environment.registryCredential.credential (String).

---

##### `ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER`<sup>Required</sup> <a name="ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER"></a>

```typescript
public readonly ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER: string;
```

- *Type:* string

Condition key: codebuild:environment.registryCredential.credentialProvider (String).

---

##### `ENVIRONMENT_TYPE`<sup>Required</sup> <a name="ENVIRONMENT_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ENVIRONMENT_TYPE"></a>

```typescript
public readonly ENVIRONMENT_TYPE: string;
```

- *Type:* string

Condition key: codebuild:environment.type (String).

---

##### `EXPORT_CONFIG_S3_DESTINATION_BUCKET`<sup>Required</sup> <a name="EXPORT_CONFIG_S3_DESTINATION_BUCKET" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_BUCKET"></a>

```typescript
public readonly EXPORT_CONFIG_S3_DESTINATION_BUCKET: string;
```

- *Type:* string

Condition key: codebuild:exportConfig.s3Destination.bucket (String).

---

##### `EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER`<sup>Required</sup> <a name="EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER"></a>

```typescript
public readonly EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER: string;
```

- *Type:* string

Condition key: codebuild:exportConfig.s3Destination.bucketOwner (String).

---

##### `EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED`<sup>Required</sup> <a name="EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED"></a>

```typescript
public readonly EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED: string;
```

- *Type:* string

Condition key: codebuild:exportConfig.s3Destination.encryptionDisabled (Bool).

---

##### `EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY`<sup>Required</sup> <a name="EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY"></a>

```typescript
public readonly EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY: string;
```

- *Type:* string

Condition key: codebuild:exportConfig.s3Destination.encryptionKey (String).

---

##### `EXPORT_CONFIG_S3_DESTINATION_PATH`<sup>Required</sup> <a name="EXPORT_CONFIG_S3_DESTINATION_PATH" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.EXPORT_CONFIG_S3_DESTINATION_PATH"></a>

```typescript
public readonly EXPORT_CONFIG_S3_DESTINATION_PATH: string;
```

- *Type:* string

Condition key: codebuild:exportConfig.s3Destination.path (String).

---

##### `FILE_SYSTEM_LOCATIONS_IDENTIFIER`<sup>Required</sup> <a name="FILE_SYSTEM_LOCATIONS_IDENTIFIER" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.FILE_SYSTEM_LOCATIONS_IDENTIFIER"></a>

```typescript
public readonly FILE_SYSTEM_LOCATIONS_IDENTIFIER: string;
```

- *Type:* string

Condition key: codebuild:fileSystemLocations.identifier (ArrayOfString).

---

##### `FILE_SYSTEM_LOCATIONS_LOCATION`<sup>Required</sup> <a name="FILE_SYSTEM_LOCATIONS_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.FILE_SYSTEM_LOCATIONS_LOCATION"></a>

```typescript
public readonly FILE_SYSTEM_LOCATIONS_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:fileSystemLocations.location (ArrayOfString).

---

##### `FILE_SYSTEM_LOCATIONS_TYPE`<sup>Required</sup> <a name="FILE_SYSTEM_LOCATIONS_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.FILE_SYSTEM_LOCATIONS_TYPE"></a>

```typescript
public readonly FILE_SYSTEM_LOCATIONS_TYPE: string;
```

- *Type:* string

Condition key: codebuild:fileSystemLocations.type (ArrayOfString).

---

##### `FLEET_SERVICE_ROLE`<sup>Required</sup> <a name="FLEET_SERVICE_ROLE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.FLEET_SERVICE_ROLE"></a>

```typescript
public readonly FLEET_SERVICE_ROLE: string;
```

- *Type:* string

Condition key: codebuild:fleetServiceRole (String).

---

##### `IMAGE_ID`<sup>Required</sup> <a name="IMAGE_ID" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.IMAGE_ID"></a>

```typescript
public readonly IMAGE_ID: string;
```

- *Type:* string

Condition key: codebuild:imageId (String).

---

##### `ImportSourceCredentialsConditionKeys`<sup>Required</sup> <a name="ImportSourceCredentialsConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.ImportSourceCredentialsConditionKeys"></a>

```typescript
public readonly ImportSourceCredentialsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportSourceCredentials action.

---

##### `LOGS_CONFIG`<sup>Required</sup> <a name="LOGS_CONFIG" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG"></a>

```typescript
public readonly LOGS_CONFIG: string;
```

- *Type:* string

Condition key: codebuild:logsConfig (Bool).

---

##### `LOGS_CONFIG_S3_LOGS`<sup>Required</sup> <a name="LOGS_CONFIG_S3_LOGS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS"></a>

```typescript
public readonly LOGS_CONFIG_S3_LOGS: string;
```

- *Type:* string

Condition key: codebuild:logsConfig.s3Logs (Bool).

---

##### `LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS`<sup>Required</sup> <a name="LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS"></a>

```typescript
public readonly LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS: string;
```

- *Type:* string

Condition key: codebuild:logsConfig.s3Logs.bucketOwnerAccess (String).

---

##### `LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED`<sup>Required</sup> <a name="LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED"></a>

```typescript
public readonly LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED: string;
```

- *Type:* string

Condition key: codebuild:logsConfig.s3Logs.encryptionDisabled (Bool).

---

##### `LOGS_CONFIG_S3_LOGS_LOCATION`<sup>Required</sup> <a name="LOGS_CONFIG_S3_LOGS_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_LOCATION"></a>

```typescript
public readonly LOGS_CONFIG_S3_LOGS_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:logsConfig.s3Logs.location (String).

---

##### `LOGS_CONFIG_S3_LOGS_STATUS`<sup>Required</sup> <a name="LOGS_CONFIG_S3_LOGS_STATUS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.LOGS_CONFIG_S3_LOGS_STATUS"></a>

```typescript
public readonly LOGS_CONFIG_S3_LOGS_STATUS: string;
```

- *Type:* string

Condition key: codebuild:logsConfig.s3Logs.status (String).

---

##### `MANUAL_CREATION`<sup>Required</sup> <a name="MANUAL_CREATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.MANUAL_CREATION"></a>

```typescript
public readonly MANUAL_CREATION: string;
```

- *Type:* string

Condition key: codebuild:manualCreation (Bool).

---

##### `PROJECT_ARN`<sup>Required</sup> <a name="PROJECT_ARN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.PROJECT_ARN"></a>

```typescript
public readonly PROJECT_ARN: string;
```

- *Type:* string

Condition key: codebuild:projectArn (ARN).

---

##### `PROJECT_VISIBILITY`<sup>Required</sup> <a name="PROJECT_VISIBILITY" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.PROJECT_VISIBILITY"></a>

```typescript
public readonly PROJECT_VISIBILITY: string;
```

- *Type:* string

Condition key: codebuild:projectVisibility (String).

---

##### `SCOPE_CONFIGURATION_DOMAIN`<sup>Required</sup> <a name="SCOPE_CONFIGURATION_DOMAIN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SCOPE_CONFIGURATION_DOMAIN"></a>

```typescript
public readonly SCOPE_CONFIGURATION_DOMAIN: string;
```

- *Type:* string

Condition key: codebuild:scopeConfiguration.domain (String).

---

##### `SCOPE_CONFIGURATION_NAME`<sup>Required</sup> <a name="SCOPE_CONFIGURATION_NAME" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SCOPE_CONFIGURATION_NAME"></a>

```typescript
public readonly SCOPE_CONFIGURATION_NAME: string;
```

- *Type:* string

Condition key: codebuild:scopeConfiguration.name (String).

---

##### `SCOPE_CONFIGURATION_SCOPE`<sup>Required</sup> <a name="SCOPE_CONFIGURATION_SCOPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SCOPE_CONFIGURATION_SCOPE"></a>

```typescript
public readonly SCOPE_CONFIGURATION_SCOPE: string;
```

- *Type:* string

Condition key: codebuild:scopeConfiguration.scope (String).

---

##### `SECONDARY_ARTIFACTS`<sup>Required</sup> <a name="SECONDARY_ARTIFACTS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS"></a>

```typescript
public readonly SECONDARY_ARTIFACTS: string;
```

- *Type:* string

Condition key: codebuild:secondaryArtifacts (Bool).

---

##### `SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER`<sup>Required</sup> <a name="SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER"></a>

```typescript
public readonly SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER: string;
```

- *Type:* string

Condition key: codebuild:secondaryArtifacts.artifactIdentifier (ArrayOfString).

---

##### `SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS`<sup>Required</sup> <a name="SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS"></a>

```typescript
public readonly SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS: string;
```

- *Type:* string

Condition key: codebuild:secondaryArtifacts.bucketOwnerAccess (ArrayOfString).

---

##### `SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED`<sup>Required</sup> <a name="SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED"></a>

```typescript
public readonly SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED: string;
```

- *Type:* string

Condition key: codebuild:secondaryArtifacts.encryptionDisabled (ArrayOfBool).

---

##### `SECONDARY_ARTIFACTS_LOCATION`<sup>Required</sup> <a name="SECONDARY_ARTIFACTS_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_ARTIFACTS_LOCATION"></a>

```typescript
public readonly SECONDARY_ARTIFACTS_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:secondaryArtifacts.location (ArrayOfString).

---

##### `SECONDARY_SOURCES`<sup>Required</sup> <a name="SECONDARY_SOURCES" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES"></a>

```typescript
public readonly SECONDARY_SOURCES: string;
```

- *Type:* string

Condition key: codebuild:secondarySources (Bool).

---

##### `SECONDARY_SOURCES_AUTH_RESOURCE`<sup>Required</sup> <a name="SECONDARY_SOURCES_AUTH_RESOURCE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_AUTH_RESOURCE"></a>

```typescript
public readonly SECONDARY_SOURCES_AUTH_RESOURCE: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.auth.resource (ArrayOfString).

---

##### `SECONDARY_SOURCES_AUTH_TYPE`<sup>Required</sup> <a name="SECONDARY_SOURCES_AUTH_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_AUTH_TYPE"></a>

```typescript
public readonly SECONDARY_SOURCES_AUTH_TYPE: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.auth.type (ArrayOfString).

---

##### `SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT`<sup>Required</sup> <a name="SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT"></a>

```typescript
public readonly SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.buildStatusConfig.context (ArrayOfString).

---

##### `SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL`<sup>Required</sup> <a name="SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL"></a>

```typescript
public readonly SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.buildStatusConfig.targetUrl (ArrayOfString).

---

##### `SECONDARY_SOURCES_BUILDSPEC`<sup>Required</sup> <a name="SECONDARY_SOURCES_BUILDSPEC" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_BUILDSPEC"></a>

```typescript
public readonly SECONDARY_SOURCES_BUILDSPEC: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.buildspec (Bool).

---

##### `SECONDARY_SOURCES_INSECURE_SSL`<sup>Required</sup> <a name="SECONDARY_SOURCES_INSECURE_SSL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_INSECURE_SSL"></a>

```typescript
public readonly SECONDARY_SOURCES_INSECURE_SSL: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.insecureSsl (ArrayOfBool).

---

##### `SECONDARY_SOURCES_LOCATION`<sup>Required</sup> <a name="SECONDARY_SOURCES_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_LOCATION"></a>

```typescript
public readonly SECONDARY_SOURCES_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.location (ArrayOfString).

---

##### `SECONDARY_SOURCES_SOURCE_IDENTIFIER`<sup>Required</sup> <a name="SECONDARY_SOURCES_SOURCE_IDENTIFIER" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SECONDARY_SOURCES_SOURCE_IDENTIFIER"></a>

```typescript
public readonly SECONDARY_SOURCES_SOURCE_IDENTIFIER: string;
```

- *Type:* string

Condition key: codebuild:secondarySources.sourceIdentifier (ArrayOfString).

---

##### `SERVER_TYPE`<sup>Required</sup> <a name="SERVER_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SERVER_TYPE"></a>

```typescript
public readonly SERVER_TYPE: string;
```

- *Type:* string

Condition key: codebuild:serverType (String).

---

##### `SERVICE_ROLE`<sup>Required</sup> <a name="SERVICE_ROLE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SERVICE_ROLE"></a>

```typescript
public readonly SERVICE_ROLE: string;
```

- *Type:* string

Condition key: codebuild:serviceRole (String).

---

##### `SHOULD_OVERWRITE`<sup>Required</sup> <a name="SHOULD_OVERWRITE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SHOULD_OVERWRITE"></a>

```typescript
public readonly SHOULD_OVERWRITE: string;
```

- *Type:* string

Condition key: codebuild:shouldOverwrite (Bool).

---

##### `SOURCE`<sup>Required</sup> <a name="SOURCE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE"></a>

```typescript
public readonly SOURCE: string;
```

- *Type:* string

Condition key: codebuild:source (Bool).

---

##### `SOURCE_AUTH_RESOURCE`<sup>Required</sup> <a name="SOURCE_AUTH_RESOURCE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_AUTH_RESOURCE"></a>

```typescript
public readonly SOURCE_AUTH_RESOURCE: string;
```

- *Type:* string

Condition key: codebuild:source.auth.resource (String).

---

##### `SOURCE_AUTH_TYPE`<sup>Required</sup> <a name="SOURCE_AUTH_TYPE" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_AUTH_TYPE"></a>

```typescript
public readonly SOURCE_AUTH_TYPE: string;
```

- *Type:* string

Condition key: codebuild:source.auth.type (String).

---

##### `SOURCE_BUILD_STATUS_CONFIG_CONTEXT`<sup>Required</sup> <a name="SOURCE_BUILD_STATUS_CONFIG_CONTEXT" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_BUILD_STATUS_CONFIG_CONTEXT"></a>

```typescript
public readonly SOURCE_BUILD_STATUS_CONFIG_CONTEXT: string;
```

- *Type:* string

Condition key: codebuild:source.buildStatusConfig.context (String).

---

##### `SOURCE_BUILD_STATUS_CONFIG_TARGET_URL`<sup>Required</sup> <a name="SOURCE_BUILD_STATUS_CONFIG_TARGET_URL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_BUILD_STATUS_CONFIG_TARGET_URL"></a>

```typescript
public readonly SOURCE_BUILD_STATUS_CONFIG_TARGET_URL: string;
```

- *Type:* string

Condition key: codebuild:source.buildStatusConfig.targetUrl (String).

---

##### `SOURCE_BUILDSPEC`<sup>Required</sup> <a name="SOURCE_BUILDSPEC" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_BUILDSPEC"></a>

```typescript
public readonly SOURCE_BUILDSPEC: string;
```

- *Type:* string

Condition key: codebuild:source.buildspec (Bool).

---

##### `SOURCE_INSECURE_SSL`<sup>Required</sup> <a name="SOURCE_INSECURE_SSL" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_INSECURE_SSL"></a>

```typescript
public readonly SOURCE_INSECURE_SSL: string;
```

- *Type:* string

Condition key: codebuild:source.insecureSsl (Bool).

---

##### `SOURCE_LOCATION`<sup>Required</sup> <a name="SOURCE_LOCATION" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.SOURCE_LOCATION"></a>

```typescript
public readonly SOURCE_LOCATION: string;
```

- *Type:* string

Condition key: codebuild:source.location (String).

---

##### `StartBuildBatchConditionKeys`<sup>Required</sup> <a name="StartBuildBatchConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.StartBuildBatchConditionKeys"></a>

```typescript
public readonly StartBuildBatchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartBuildBatch action.

---

##### `StartBuildConditionKeys`<sup>Required</sup> <a name="StartBuildConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.StartBuildConditionKeys"></a>

```typescript
public readonly StartBuildConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartBuild action.

---

##### `TOKEN`<sup>Required</sup> <a name="TOKEN" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.TOKEN"></a>

```typescript
public readonly TOKEN: string;
```

- *Type:* string

Condition key: codebuild:token (String).

---

##### `UpdateFleetConditionKeys`<sup>Required</sup> <a name="UpdateFleetConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateFleetConditionKeys"></a>

```typescript
public readonly UpdateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateFleet action.

---

##### `UpdateProjectConditionKeys`<sup>Required</sup> <a name="UpdateProjectConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateProjectConditionKeys"></a>

```typescript
public readonly UpdateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProject action.

---

##### `UpdateProjectVisibilityConditionKeys`<sup>Required</sup> <a name="UpdateProjectVisibilityConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateProjectVisibilityConditionKeys"></a>

```typescript
public readonly UpdateProjectVisibilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProjectVisibility action.

---

##### `UpdateReportGroupConditionKeys`<sup>Required</sup> <a name="UpdateReportGroupConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateReportGroupConditionKeys"></a>

```typescript
public readonly UpdateReportGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReportGroup action.

---

##### `UpdateWebhookConditionKeys`<sup>Required</sup> <a name="UpdateWebhookConditionKeys" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.UpdateWebhookConditionKeys"></a>

```typescript
public readonly UpdateWebhookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWebhook action.

---

##### `USERNAME`<sup>Required</sup> <a name="USERNAME" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.USERNAME"></a>

```typescript
public readonly USERNAME: string;
```

- *Type:* string

Condition key: codebuild:username (String).

---

##### `VPC_CONFIG`<sup>Required</sup> <a name="VPC_CONFIG" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG"></a>

```typescript
public readonly VPC_CONFIG: string;
```

- *Type:* string

Condition key: codebuild:vpcConfig (Bool).

---

##### `VPC_CONFIG_SECURITY_GROUP_IDS`<sup>Required</sup> <a name="VPC_CONFIG_SECURITY_GROUP_IDS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG_SECURITY_GROUP_IDS"></a>

```typescript
public readonly VPC_CONFIG_SECURITY_GROUP_IDS: string;
```

- *Type:* string

Condition key: codebuild:vpcConfig.securityGroupIds (ArrayOfString).

---

##### `VPC_CONFIG_SUBNETS`<sup>Required</sup> <a name="VPC_CONFIG_SUBNETS" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG_SUBNETS"></a>

```typescript
public readonly VPC_CONFIG_SUBNETS: string;
```

- *Type:* string

Condition key: codebuild:vpcConfig.subnets (ArrayOfString).

---

##### `VPC_CONFIG_VPC_ID`<sup>Required</sup> <a name="VPC_CONFIG_VPC_ID" id="@cdk_utils/iam.codebuild.CodeBuildConditions.property.VPC_CONFIG_VPC_ID"></a>

```typescript
public readonly VPC_CONFIG_VPC_ID: string;
```

- *Type:* string

Condition key: codebuild:vpcConfig.vpcId (String).

---

### CodeBuildOperations <a name="CodeBuildOperations" id="@cdk_utils/iam.codebuild.CodeBuildOperations"></a>

API operation to required IAM actions mapping for codebuild.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codebuild.CodeBuildOperations.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

new codebuild.CodeBuildOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchDeleteBuilds">BatchDeleteBuilds</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteBuilds API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetBuildBatches">BatchGetBuildBatches</a></code> | <code>string[]</code> | IAM actions required for the BatchGetBuildBatches API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetBuilds">BatchGetBuilds</a></code> | <code>string[]</code> | IAM actions required for the BatchGetBuilds API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetCommandExecutions">BatchGetCommandExecutions</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCommandExecutions API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetFleets">BatchGetFleets</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFleets API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetProjects">BatchGetProjects</a></code> | <code>string[]</code> | IAM actions required for the BatchGetProjects API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetReportGroups">BatchGetReportGroups</a></code> | <code>string[]</code> | IAM actions required for the BatchGetReportGroups API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetReports">BatchGetReports</a></code> | <code>string[]</code> | IAM actions required for the BatchGetReports API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetSandboxes">BatchGetSandboxes</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSandboxes API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateFleet">CreateFleet</a></code> | <code>string[]</code> | IAM actions required for the CreateFleet API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateReportGroup">CreateReportGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateReportGroup API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateWebhook">CreateWebhook</a></code> | <code>string[]</code> | IAM actions required for the CreateWebhook API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteBuildBatch">DeleteBuildBatch</a></code> | <code>string[]</code> | IAM actions required for the DeleteBuildBatch API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteFleet">DeleteFleet</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleet API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteReport">DeleteReport</a></code> | <code>string[]</code> | IAM actions required for the DeleteReport API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteReportGroup">DeleteReportGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteReportGroup API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteSourceCredentials">DeleteSourceCredentials</a></code> | <code>string[]</code> | IAM actions required for the DeleteSourceCredentials API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteWebhook">DeleteWebhook</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebhook API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DescribeCodeCoverages">DescribeCodeCoverages</a></code> | <code>string[]</code> | IAM actions required for the DescribeCodeCoverages API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.DescribeTestCases">DescribeTestCases</a></code> | <code>string[]</code> | IAM actions required for the DescribeTestCases API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ImportSourceCredentials">ImportSourceCredentials</a></code> | <code>string[]</code> | IAM actions required for the ImportSourceCredentials API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.InvalidateProjectCache">InvalidateProjectCache</a></code> | <code>string[]</code> | IAM actions required for the InvalidateProjectCache API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuildBatches">ListBuildBatches</a></code> | <code>string[]</code> | IAM actions required for the ListBuildBatches API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuildBatchesForProject">ListBuildBatchesForProject</a></code> | <code>string[]</code> | IAM actions required for the ListBuildBatchesForProject API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuilds">ListBuilds</a></code> | <code>string[]</code> | IAM actions required for the ListBuilds API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuildsForProject">ListBuildsForProject</a></code> | <code>string[]</code> | IAM actions required for the ListBuildsForProject API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListCommandExecutionsForSandbox">ListCommandExecutionsForSandbox</a></code> | <code>string[]</code> | IAM actions required for the ListCommandExecutionsForSandbox API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListCuratedEnvironmentImages">ListCuratedEnvironmentImages</a></code> | <code>string[]</code> | IAM actions required for the ListCuratedEnvironmentImages API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListFleets">ListFleets</a></code> | <code>string[]</code> | IAM actions required for the ListFleets API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListProjects">ListProjects</a></code> | <code>string[]</code> | IAM actions required for the ListProjects API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListReportGroups">ListReportGroups</a></code> | <code>string[]</code> | IAM actions required for the ListReportGroups API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListReports">ListReports</a></code> | <code>string[]</code> | IAM actions required for the ListReports API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListReportsForReportGroup">ListReportsForReportGroup</a></code> | <code>string[]</code> | IAM actions required for the ListReportsForReportGroup API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSandboxes">ListSandboxes</a></code> | <code>string[]</code> | IAM actions required for the ListSandboxes API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSandboxesForProject">ListSandboxesForProject</a></code> | <code>string[]</code> | IAM actions required for the ListSandboxesForProject API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSharedProjects">ListSharedProjects</a></code> | <code>string[]</code> | IAM actions required for the ListSharedProjects API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSharedReportGroups">ListSharedReportGroups</a></code> | <code>string[]</code> | IAM actions required for the ListSharedReportGroups API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSourceCredentials">ListSourceCredentials</a></code> | <code>string[]</code> | IAM actions required for the ListSourceCredentials API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.opGetReportGroupTrend">opGetReportGroupTrend</a></code> | <code>string[]</code> | IAM actions required for the GetReportGroupTrend API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.RetryBuild">RetryBuild</a></code> | <code>string[]</code> | IAM actions required for the RetryBuild API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.RetryBuildBatch">RetryBuildBatch</a></code> | <code>string[]</code> | IAM actions required for the RetryBuildBatch API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartBuild">StartBuild</a></code> | <code>string[]</code> | IAM actions required for the StartBuild API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartBuildBatch">StartBuildBatch</a></code> | <code>string[]</code> | IAM actions required for the StartBuildBatch API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartCommandExecution">StartCommandExecution</a></code> | <code>string[]</code> | IAM actions required for the StartCommandExecution API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartSandbox">StartSandbox</a></code> | <code>string[]</code> | IAM actions required for the StartSandbox API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartSandboxConnection">StartSandboxConnection</a></code> | <code>string[]</code> | IAM actions required for the StartSandboxConnection API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StopBuild">StopBuild</a></code> | <code>string[]</code> | IAM actions required for the StopBuild API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StopBuildBatch">StopBuildBatch</a></code> | <code>string[]</code> | IAM actions required for the StopBuildBatch API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.StopSandbox">StopSandbox</a></code> | <code>string[]</code> | IAM actions required for the StopSandbox API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateFleet">UpdateFleet</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleet API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateProject">UpdateProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateProject API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateProjectVisibility">UpdateProjectVisibility</a></code> | <code>string[]</code> | IAM actions required for the UpdateProjectVisibility API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateReportGroup">UpdateReportGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateReportGroup API call. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateWebhook">UpdateWebhook</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebhook API call. |

---

##### `BatchDeleteBuilds`<sup>Required</sup> <a name="BatchDeleteBuilds" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchDeleteBuilds"></a>

```typescript
public readonly BatchDeleteBuilds: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteBuilds API call.

---

##### `BatchGetBuildBatches`<sup>Required</sup> <a name="BatchGetBuildBatches" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetBuildBatches"></a>

```typescript
public readonly BatchGetBuildBatches: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetBuildBatches API call.

---

##### `BatchGetBuilds`<sup>Required</sup> <a name="BatchGetBuilds" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetBuilds"></a>

```typescript
public readonly BatchGetBuilds: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetBuilds API call.

---

##### `BatchGetCommandExecutions`<sup>Required</sup> <a name="BatchGetCommandExecutions" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetCommandExecutions"></a>

```typescript
public readonly BatchGetCommandExecutions: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCommandExecutions API call.

---

##### `BatchGetFleets`<sup>Required</sup> <a name="BatchGetFleets" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetFleets"></a>

```typescript
public readonly BatchGetFleets: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFleets API call.

---

##### `BatchGetProjects`<sup>Required</sup> <a name="BatchGetProjects" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetProjects"></a>

```typescript
public readonly BatchGetProjects: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetProjects API call.

---

##### `BatchGetReportGroups`<sup>Required</sup> <a name="BatchGetReportGroups" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetReportGroups"></a>

```typescript
public readonly BatchGetReportGroups: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetReportGroups API call.

---

##### `BatchGetReports`<sup>Required</sup> <a name="BatchGetReports" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetReports"></a>

```typescript
public readonly BatchGetReports: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetReports API call.

---

##### `BatchGetSandboxes`<sup>Required</sup> <a name="BatchGetSandboxes" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.BatchGetSandboxes"></a>

```typescript
public readonly BatchGetSandboxes: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSandboxes API call.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleet API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateReportGroup`<sup>Required</sup> <a name="CreateReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateReportGroup"></a>

```typescript
public readonly CreateReportGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateReportGroup API call.

---

##### `CreateWebhook`<sup>Required</sup> <a name="CreateWebhook" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.CreateWebhook"></a>

```typescript
public readonly CreateWebhook: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebhook API call.

---

##### `DeleteBuildBatch`<sup>Required</sup> <a name="DeleteBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteBuildBatch"></a>

```typescript
public readonly DeleteBuildBatch: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBuildBatch API call.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleet API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteReport`<sup>Required</sup> <a name="DeleteReport" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteReport"></a>

```typescript
public readonly DeleteReport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReport API call.

---

##### `DeleteReportGroup`<sup>Required</sup> <a name="DeleteReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteReportGroup"></a>

```typescript
public readonly DeleteReportGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReportGroup API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSourceCredentials`<sup>Required</sup> <a name="DeleteSourceCredentials" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteSourceCredentials"></a>

```typescript
public readonly DeleteSourceCredentials: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSourceCredentials API call.

---

##### `DeleteWebhook`<sup>Required</sup> <a name="DeleteWebhook" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DeleteWebhook"></a>

```typescript
public readonly DeleteWebhook: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebhook API call.

---

##### `DescribeCodeCoverages`<sup>Required</sup> <a name="DescribeCodeCoverages" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DescribeCodeCoverages"></a>

```typescript
public readonly DescribeCodeCoverages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCodeCoverages API call.

---

##### `DescribeTestCases`<sup>Required</sup> <a name="DescribeTestCases" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.DescribeTestCases"></a>

```typescript
public readonly DescribeTestCases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTestCases API call.

---

##### `ImportSourceCredentials`<sup>Required</sup> <a name="ImportSourceCredentials" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ImportSourceCredentials"></a>

```typescript
public readonly ImportSourceCredentials: string[];
```

- *Type:* string[]

IAM actions required for the ImportSourceCredentials API call.

---

##### `InvalidateProjectCache`<sup>Required</sup> <a name="InvalidateProjectCache" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.InvalidateProjectCache"></a>

```typescript
public readonly InvalidateProjectCache: string[];
```

- *Type:* string[]

IAM actions required for the InvalidateProjectCache API call.

---

##### `ListBuildBatches`<sup>Required</sup> <a name="ListBuildBatches" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuildBatches"></a>

```typescript
public readonly ListBuildBatches: string[];
```

- *Type:* string[]

IAM actions required for the ListBuildBatches API call.

---

##### `ListBuildBatchesForProject`<sup>Required</sup> <a name="ListBuildBatchesForProject" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuildBatchesForProject"></a>

```typescript
public readonly ListBuildBatchesForProject: string[];
```

- *Type:* string[]

IAM actions required for the ListBuildBatchesForProject API call.

---

##### `ListBuilds`<sup>Required</sup> <a name="ListBuilds" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuilds"></a>

```typescript
public readonly ListBuilds: string[];
```

- *Type:* string[]

IAM actions required for the ListBuilds API call.

---

##### `ListBuildsForProject`<sup>Required</sup> <a name="ListBuildsForProject" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListBuildsForProject"></a>

```typescript
public readonly ListBuildsForProject: string[];
```

- *Type:* string[]

IAM actions required for the ListBuildsForProject API call.

---

##### `ListCommandExecutionsForSandbox`<sup>Required</sup> <a name="ListCommandExecutionsForSandbox" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListCommandExecutionsForSandbox"></a>

```typescript
public readonly ListCommandExecutionsForSandbox: string[];
```

- *Type:* string[]

IAM actions required for the ListCommandExecutionsForSandbox API call.

---

##### `ListCuratedEnvironmentImages`<sup>Required</sup> <a name="ListCuratedEnvironmentImages" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListCuratedEnvironmentImages"></a>

```typescript
public readonly ListCuratedEnvironmentImages: string[];
```

- *Type:* string[]

IAM actions required for the ListCuratedEnvironmentImages API call.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListFleets"></a>

```typescript
public readonly ListFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListFleets API call.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListProjects"></a>

```typescript
public readonly ListProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProjects API call.

---

##### `ListReportGroups`<sup>Required</sup> <a name="ListReportGroups" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListReportGroups"></a>

```typescript
public readonly ListReportGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListReportGroups API call.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListReports"></a>

```typescript
public readonly ListReports: string[];
```

- *Type:* string[]

IAM actions required for the ListReports API call.

---

##### `ListReportsForReportGroup`<sup>Required</sup> <a name="ListReportsForReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListReportsForReportGroup"></a>

```typescript
public readonly ListReportsForReportGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListReportsForReportGroup API call.

---

##### `ListSandboxes`<sup>Required</sup> <a name="ListSandboxes" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSandboxes"></a>

```typescript
public readonly ListSandboxes: string[];
```

- *Type:* string[]

IAM actions required for the ListSandboxes API call.

---

##### `ListSandboxesForProject`<sup>Required</sup> <a name="ListSandboxesForProject" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSandboxesForProject"></a>

```typescript
public readonly ListSandboxesForProject: string[];
```

- *Type:* string[]

IAM actions required for the ListSandboxesForProject API call.

---

##### `ListSharedProjects`<sup>Required</sup> <a name="ListSharedProjects" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSharedProjects"></a>

```typescript
public readonly ListSharedProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListSharedProjects API call.

---

##### `ListSharedReportGroups`<sup>Required</sup> <a name="ListSharedReportGroups" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSharedReportGroups"></a>

```typescript
public readonly ListSharedReportGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListSharedReportGroups API call.

---

##### `ListSourceCredentials`<sup>Required</sup> <a name="ListSourceCredentials" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.ListSourceCredentials"></a>

```typescript
public readonly ListSourceCredentials: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceCredentials API call.

---

##### `opGetReportGroupTrend`<sup>Required</sup> <a name="opGetReportGroupTrend" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.opGetReportGroupTrend"></a>

```typescript
public readonly opGetReportGroupTrend: string[];
```

- *Type:* string[]

IAM actions required for the GetReportGroupTrend API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RetryBuild`<sup>Required</sup> <a name="RetryBuild" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.RetryBuild"></a>

```typescript
public readonly RetryBuild: string[];
```

- *Type:* string[]

IAM actions required for the RetryBuild API call.

---

##### `RetryBuildBatch`<sup>Required</sup> <a name="RetryBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.RetryBuildBatch"></a>

```typescript
public readonly RetryBuildBatch: string[];
```

- *Type:* string[]

IAM actions required for the RetryBuildBatch API call.

---

##### `StartBuild`<sup>Required</sup> <a name="StartBuild" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartBuild"></a>

```typescript
public readonly StartBuild: string[];
```

- *Type:* string[]

IAM actions required for the StartBuild API call.

---

##### `StartBuildBatch`<sup>Required</sup> <a name="StartBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartBuildBatch"></a>

```typescript
public readonly StartBuildBatch: string[];
```

- *Type:* string[]

IAM actions required for the StartBuildBatch API call.

---

##### `StartCommandExecution`<sup>Required</sup> <a name="StartCommandExecution" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartCommandExecution"></a>

```typescript
public readonly StartCommandExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartCommandExecution API call.

---

##### `StartSandbox`<sup>Required</sup> <a name="StartSandbox" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartSandbox"></a>

```typescript
public readonly StartSandbox: string[];
```

- *Type:* string[]

IAM actions required for the StartSandbox API call.

---

##### `StartSandboxConnection`<sup>Required</sup> <a name="StartSandboxConnection" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StartSandboxConnection"></a>

```typescript
public readonly StartSandboxConnection: string[];
```

- *Type:* string[]

IAM actions required for the StartSandboxConnection API call.

---

##### `StopBuild`<sup>Required</sup> <a name="StopBuild" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StopBuild"></a>

```typescript
public readonly StopBuild: string[];
```

- *Type:* string[]

IAM actions required for the StopBuild API call.

---

##### `StopBuildBatch`<sup>Required</sup> <a name="StopBuildBatch" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StopBuildBatch"></a>

```typescript
public readonly StopBuildBatch: string[];
```

- *Type:* string[]

IAM actions required for the StopBuildBatch API call.

---

##### `StopSandbox`<sup>Required</sup> <a name="StopSandbox" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.StopSandbox"></a>

```typescript
public readonly StopSandbox: string[];
```

- *Type:* string[]

IAM actions required for the StopSandbox API call.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleet API call.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProject API call.

---

##### `UpdateProjectVisibility`<sup>Required</sup> <a name="UpdateProjectVisibility" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateProjectVisibility"></a>

```typescript
public readonly UpdateProjectVisibility: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProjectVisibility API call.

---

##### `UpdateReportGroup`<sup>Required</sup> <a name="UpdateReportGroup" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateReportGroup"></a>

```typescript
public readonly UpdateReportGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReportGroup API call.

---

##### `UpdateWebhook`<sup>Required</sup> <a name="UpdateWebhook" id="@cdk_utils/iam.codebuild.CodeBuildOperations.property.UpdateWebhook"></a>

```typescript
public readonly UpdateWebhook: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebhook API call.

---

### CodeBuildResources <a name="CodeBuildResources" id="@cdk_utils/iam.codebuild.CodeBuildResources"></a>

ARN builders, validators, and parsers for codebuild resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codebuild.CodeBuildResources.Initializer"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

new codebuild.CodeBuildResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.buildBatch">buildBatch</a></code> | Builds an ARN for the build-batch resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.buildResource">buildResource</a></code> | Builds an ARN for the build resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.fleet">fleet</a></code> | Builds an ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidBuildArn">isValidBuildArn</a></code> | Validates whether a string is a valid ARN for the build resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidBuildBatchArn">isValidBuildBatchArn</a></code> | Validates whether a string is a valid ARN for the build-batch resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidFleetArn">isValidFleetArn</a></code> | Validates whether a string is a valid ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidReportArn">isValidReportArn</a></code> | Validates whether a string is a valid ARN for the report resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidReportGroupArn">isValidReportGroupArn</a></code> | Validates whether a string is a valid ARN for the report-group resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.isValidSandboxArn">isValidSandboxArn</a></code> | Validates whether a string is a valid ARN for the sandbox resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseBuildArn">parseBuildArn</a></code> | Parses a build ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseBuildBatchArn">parseBuildBatchArn</a></code> | Parses a build-batch ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseFleetArn">parseFleetArn</a></code> | Parses a fleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseReportArn">parseReportArn</a></code> | Parses a report ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseReportGroupArn">parseReportGroupArn</a></code> | Parses a report-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.parseSandboxArn">parseSandboxArn</a></code> | Parses a sandbox ARN into its components. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.report">report</a></code> | Builds an ARN for the report resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.reportGroup">reportGroup</a></code> | Builds an ARN for the report-group resource. |
| <code><a href="#@cdk_utils/iam.codebuild.CodeBuildResources.sandbox">sandbox</a></code> | Builds an ARN for the sandbox resource. |

---

##### `buildBatch` <a name="buildBatch" id="@cdk_utils/iam.codebuild.CodeBuildResources.buildBatch"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.buildBatch(props: CodeBuildBuildBatchArnProps)
```

Builds an ARN for the build-batch resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.buildBatch.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildBuildBatchArnProps">CodeBuildBuildBatchArnProps</a>

---

##### `buildResource` <a name="buildResource" id="@cdk_utils/iam.codebuild.CodeBuildResources.buildResource"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.buildResource(props: CodeBuildBuildArnProps)
```

Builds an ARN for the build resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.buildResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildBuildArnProps">CodeBuildBuildArnProps</a>

---

##### `fleet` <a name="fleet" id="@cdk_utils/iam.codebuild.CodeBuildResources.fleet"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.fleet(props: CodeBuildFleetArnProps)
```

Builds an ARN for the fleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.fleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildFleetArnProps">CodeBuildFleetArnProps</a>

---

##### `isValidBuildArn` <a name="isValidBuildArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidBuildArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidBuildArn(arn: string)
```

Validates whether a string is a valid ARN for the build resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidBuildArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBuildBatchArn` <a name="isValidBuildBatchArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidBuildBatchArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidBuildBatchArn(arn: string)
```

Validates whether a string is a valid ARN for the build-batch resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidBuildBatchArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFleetArn` <a name="isValidFleetArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidFleetArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the fleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidProjectArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReportArn` <a name="isValidReportArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidReportArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidReportArn(arn: string)
```

Validates whether a string is a valid ARN for the report resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidReportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReportGroupArn` <a name="isValidReportGroupArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidReportGroupArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidReportGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the report-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidReportGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSandboxArn` <a name="isValidSandboxArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidSandboxArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.isValidSandboxArn(arn: string)
```

Validates whether a string is a valid ARN for the sandbox resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.isValidSandboxArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBuildArn` <a name="parseBuildArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseBuildArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseBuildArn(arn: string)
```

Parses a build ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseBuildArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBuildBatchArn` <a name="parseBuildBatchArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseBuildBatchArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseBuildBatchArn(arn: string)
```

Parses a build-batch ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseBuildBatchArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetArn` <a name="parseFleetArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseFleetArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseFleetArn(arn: string)
```

Parses a fleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseProjectArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReportArn` <a name="parseReportArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseReportArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseReportArn(arn: string)
```

Parses a report ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseReportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReportGroupArn` <a name="parseReportGroupArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseReportGroupArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseReportGroupArn(arn: string)
```

Parses a report-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseReportGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSandboxArn` <a name="parseSandboxArn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseSandboxArn"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.parseSandboxArn(arn: string)
```

Parses a sandbox ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codebuild.CodeBuildResources.parseSandboxArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.codebuild.CodeBuildResources.project"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.project(props: CodeBuildProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildProjectArnProps">CodeBuildProjectArnProps</a>

---

##### `report` <a name="report" id="@cdk_utils/iam.codebuild.CodeBuildResources.report"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.report(props: CodeBuildReportArnProps)
```

Builds an ARN for the report resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.report.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildReportArnProps">CodeBuildReportArnProps</a>

---

##### `reportGroup` <a name="reportGroup" id="@cdk_utils/iam.codebuild.CodeBuildResources.reportGroup"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.reportGroup(props: CodeBuildReportGroupArnProps)
```

Builds an ARN for the report-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.reportGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildReportGroupArnProps">CodeBuildReportGroupArnProps</a>

---

##### `sandbox` <a name="sandbox" id="@cdk_utils/iam.codebuild.CodeBuildResources.sandbox"></a>

```typescript
import { codebuild } from '@cdk_utils/iam'

codebuild.CodeBuildResources.sandbox(props: CodeBuildSandboxArnProps)
```

Builds an ARN for the sandbox resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codebuild.CodeBuildResources.sandbox.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codebuild.CodeBuildSandboxArnProps">CodeBuildSandboxArnProps</a>

---




