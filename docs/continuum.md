# `continuum` Submodule <a name="`continuum` Submodule" id="@cdk_utils/iam.continuum"></a>


## Structs <a name="Structs" id="Structs"></a>

### ContinuumCodeFindingsArnComponents <a name="ContinuumCodeFindingsArnComponents" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents"></a>

Parsed components of a code-findings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCodeFindingsArnComponents: continuum.ContinuumCodeFindingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.findingId">findingId</a></code> | <code>string</code> | The FindingId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The FindingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ContinuumCodeFindingsArnProps <a name="ContinuumCodeFindingsArnProps" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps"></a>

Properties for building a code-findings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCodeFindingsArnProps: continuum.ContinuumCodeFindingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.findingId">findingId</a></code> | <code>string</code> | The FindingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The FindingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ContinuumCodeIssuesArnComponents <a name="ContinuumCodeIssuesArnComponents" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents"></a>

Parsed components of a code-issues ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCodeIssuesArnComponents: continuum.ContinuumCodeIssuesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.issueId">issueId</a></code> | <code>string</code> | The IssueId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.issueId"></a>

```typescript
public readonly issueId: string;
```

- *Type:* string

The IssueId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ContinuumCodeIssuesArnProps <a name="ContinuumCodeIssuesArnProps" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps"></a>

Properties for building a code-issues ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCodeIssuesArnProps: continuum.ContinuumCodeIssuesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.issueId">issueId</a></code> | <code>string</code> | The IssueId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.issueId"></a>

```typescript
public readonly issueId: string;
```

- *Type:* string

The IssueId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ContinuumCodeScansArnComponents <a name="ContinuumCodeScansArnComponents" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents"></a>

Parsed components of a code-scans ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCodeScansArnComponents: continuum.ContinuumCodeScansArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.scanRunId">scanRunId</a></code> | <code>string</code> | The ScanRunId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scanRunId`<sup>Required</sup> <a name="scanRunId" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnComponents.property.scanRunId"></a>

```typescript
public readonly scanRunId: string;
```

- *Type:* string

The ScanRunId component.

---

### ContinuumCodeScansArnProps <a name="ContinuumCodeScansArnProps" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps"></a>

Properties for building a code-scans ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCodeScansArnProps: continuum.ContinuumCodeScansArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.scanRunId">scanRunId</a></code> | <code>string</code> | The ScanRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `scanRunId`<sup>Required</sup> <a name="scanRunId" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.scanRunId"></a>

```typescript
public readonly scanRunId: string;
```

- *Type:* string

The ScanRunId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCodeScansArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ContinuumCollectorsArnComponents <a name="ContinuumCollectorsArnComponents" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents"></a>

Parsed components of a collectors ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCollectorsArnComponents: continuum.ContinuumCollectorsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.collectorId">collectorId</a></code> | <code>string</code> | The CollectorId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `collectorId`<sup>Required</sup> <a name="collectorId" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.collectorId"></a>

```typescript
public readonly collectorId: string;
```

- *Type:* string

The CollectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ContinuumCollectorsArnProps <a name="ContinuumCollectorsArnProps" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnProps"></a>

Properties for building a collectors ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumCollectorsArnProps: continuum.ContinuumCollectorsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.collectorId">collectorId</a></code> | <code>string</code> | The CollectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `collectorId`<sup>Required</sup> <a name="collectorId" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.collectorId"></a>

```typescript
public readonly collectorId: string;
```

- *Type:* string

The CollectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumCollectorsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ContinuumEnvironmentsArnComponents <a name="ContinuumEnvironmentsArnComponents" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents"></a>

Parsed components of a environments ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumEnvironmentsArnComponents: continuum.ContinuumEnvironmentsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ContinuumEnvironmentsArnProps <a name="ContinuumEnvironmentsArnProps" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps"></a>

Properties for building a environments ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumEnvironmentsArnProps: continuum.ContinuumEnvironmentsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ContinuumIntegrationsArnComponents <a name="ContinuumIntegrationsArnComponents" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents"></a>

Parsed components of a integrations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumIntegrationsArnComponents: continuum.ContinuumIntegrationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ContinuumIntegrationsArnProps <a name="ContinuumIntegrationsArnProps" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps"></a>

Properties for building a integrations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

const continuumIntegrationsArnProps: continuum.ContinuumIntegrationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ContinuumActions <a name="ContinuumActions" id="@cdk_utils/iam.continuum.ContinuumActions"></a>

IAM action constants for the continuum service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.continuum.ContinuumActions.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

new continuum.ContinuumActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeFinding">actionGetCodeFinding</a></code> | <code>string</code> | [Read] continuum:GetCodeFinding. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeIssue">actionGetCodeIssue</a></code> | <code>string</code> | [Read] continuum:GetCodeIssue. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeIssueArtifact">actionGetCodeIssueArtifact</a></code> | <code>string</code> | [Read] continuum:GetCodeIssueArtifact. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeScan">actionGetCodeScan</a></code> | <code>string</code> | [Read] continuum:GetCodeScan. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCollector">actionGetCollector</a></code> | <code>string</code> | [Read] continuum:GetCollector. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCollectorDataAccessAuthorization">actionGetCollectorDataAccessAuthorization</a></code> | <code>string</code> | [Read] continuum:GetCollectorDataAccessAuthorization. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] continuum:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] continuum:GetIntegration. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] continuum:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.AssociateCollector">AssociateCollector</a></code> | <code>string</code> | [Write] continuum:AssociateCollector. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.CreateCodeFinding">CreateCodeFinding</a></code> | <code>string</code> | [Write] continuum:CreateCodeFinding. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.CreateCodeScan">CreateCodeScan</a></code> | <code>string</code> | [Write] continuum:CreateCodeScan. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.CreateCollector">CreateCollector</a></code> | <code>string</code> | [Write] continuum:CreateCollector. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] continuum:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] continuum:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.DeleteCollector">DeleteCollector</a></code> | <code>string</code> | [Write] continuum:DeleteCollector. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] continuum:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] continuum:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.DisassociateCollector">DisassociateCollector</a></code> | <code>string</code> | [Write] continuum:DisassociateCollector. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListAssociatedCollectors">ListAssociatedCollectors</a></code> | <code>string</code> | [List] continuum:ListAssociatedCollectors. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListAssociatedEnvironments">ListAssociatedEnvironments</a></code> | <code>string</code> | [List] continuum:ListAssociatedEnvironments. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeFindings">ListCodeFindings</a></code> | <code>string</code> | [List] continuum:ListCodeFindings. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeIssueArtifacts">ListCodeIssueArtifacts</a></code> | <code>string</code> | [List] continuum:ListCodeIssueArtifacts. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeIssues">ListCodeIssues</a></code> | <code>string</code> | [List] continuum:ListCodeIssues. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeScans">ListCodeScans</a></code> | <code>string</code> | [List] continuum:ListCodeScans. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListCollectors">ListCollectors</a></code> | <code>string</code> | [List] continuum:ListCollectors. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] continuum:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] continuum:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] continuum:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.StartIntegrationAuthorization">StartIntegrationAuthorization</a></code> | <code>string</code> | [Write] continuum:StartIntegrationAuthorization. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.UpdateCollector">UpdateCollector</a></code> | <code>string</code> | [Write] continuum:UpdateCollector. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] continuum:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumActions.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string</code> | [Write] continuum:UpdateIntegration. |

---

##### `actionGetCodeFinding`<sup>Required</sup> <a name="actionGetCodeFinding" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeFinding"></a>

```typescript
public readonly actionGetCodeFinding: string;
```

- *Type:* string

[Read] continuum:GetCodeFinding.

---

##### `actionGetCodeIssue`<sup>Required</sup> <a name="actionGetCodeIssue" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeIssue"></a>

```typescript
public readonly actionGetCodeIssue: string;
```

- *Type:* string

[Read] continuum:GetCodeIssue.

---

##### `actionGetCodeIssueArtifact`<sup>Required</sup> <a name="actionGetCodeIssueArtifact" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeIssueArtifact"></a>

```typescript
public readonly actionGetCodeIssueArtifact: string;
```

- *Type:* string

[Read] continuum:GetCodeIssueArtifact.

---

##### `actionGetCodeScan`<sup>Required</sup> <a name="actionGetCodeScan" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCodeScan"></a>

```typescript
public readonly actionGetCodeScan: string;
```

- *Type:* string

[Read] continuum:GetCodeScan.

---

##### `actionGetCollector`<sup>Required</sup> <a name="actionGetCollector" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCollector"></a>

```typescript
public readonly actionGetCollector: string;
```

- *Type:* string

[Read] continuum:GetCollector.

---

##### `actionGetCollectorDataAccessAuthorization`<sup>Required</sup> <a name="actionGetCollectorDataAccessAuthorization" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetCollectorDataAccessAuthorization"></a>

```typescript
public readonly actionGetCollectorDataAccessAuthorization: string;
```

- *Type:* string

[Read] continuum:GetCollectorDataAccessAuthorization.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] continuum:GetEnvironment.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] continuum:GetIntegration.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.continuum.ContinuumActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] continuum:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.continuum.ContinuumActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.continuum.ContinuumActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.continuum.ContinuumActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.continuum.ContinuumActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.continuum.ContinuumActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateCollector`<sup>Required</sup> <a name="AssociateCollector" id="@cdk_utils/iam.continuum.ContinuumActions.property.AssociateCollector"></a>

```typescript
public readonly AssociateCollector: string;
```

- *Type:* string

[Write] continuum:AssociateCollector.

---

##### `CreateCodeFinding`<sup>Required</sup> <a name="CreateCodeFinding" id="@cdk_utils/iam.continuum.ContinuumActions.property.CreateCodeFinding"></a>

```typescript
public readonly CreateCodeFinding: string;
```

- *Type:* string

[Write] continuum:CreateCodeFinding.

---

##### `CreateCodeScan`<sup>Required</sup> <a name="CreateCodeScan" id="@cdk_utils/iam.continuum.ContinuumActions.property.CreateCodeScan"></a>

```typescript
public readonly CreateCodeScan: string;
```

- *Type:* string

[Write] continuum:CreateCodeScan.

---

##### `CreateCollector`<sup>Required</sup> <a name="CreateCollector" id="@cdk_utils/iam.continuum.ContinuumActions.property.CreateCollector"></a>

```typescript
public readonly CreateCollector: string;
```

- *Type:* string

[Write] continuum:CreateCollector.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.continuum.ContinuumActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] continuum:CreateEnvironment.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.continuum.ContinuumActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] continuum:CreateIntegration.

---

##### `DeleteCollector`<sup>Required</sup> <a name="DeleteCollector" id="@cdk_utils/iam.continuum.ContinuumActions.property.DeleteCollector"></a>

```typescript
public readonly DeleteCollector: string;
```

- *Type:* string

[Write] continuum:DeleteCollector.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.continuum.ContinuumActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] continuum:DeleteEnvironment.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.continuum.ContinuumActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] continuum:DeleteIntegration.

---

##### `DisassociateCollector`<sup>Required</sup> <a name="DisassociateCollector" id="@cdk_utils/iam.continuum.ContinuumActions.property.DisassociateCollector"></a>

```typescript
public readonly DisassociateCollector: string;
```

- *Type:* string

[Write] continuum:DisassociateCollector.

---

##### `ListAssociatedCollectors`<sup>Required</sup> <a name="ListAssociatedCollectors" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListAssociatedCollectors"></a>

```typescript
public readonly ListAssociatedCollectors: string;
```

- *Type:* string

[List] continuum:ListAssociatedCollectors.

---

##### `ListAssociatedEnvironments`<sup>Required</sup> <a name="ListAssociatedEnvironments" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListAssociatedEnvironments"></a>

```typescript
public readonly ListAssociatedEnvironments: string;
```

- *Type:* string

[List] continuum:ListAssociatedEnvironments.

---

##### `ListCodeFindings`<sup>Required</sup> <a name="ListCodeFindings" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeFindings"></a>

```typescript
public readonly ListCodeFindings: string;
```

- *Type:* string

[List] continuum:ListCodeFindings.

---

##### `ListCodeIssueArtifacts`<sup>Required</sup> <a name="ListCodeIssueArtifacts" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeIssueArtifacts"></a>

```typescript
public readonly ListCodeIssueArtifacts: string;
```

- *Type:* string

[List] continuum:ListCodeIssueArtifacts.

---

##### `ListCodeIssues`<sup>Required</sup> <a name="ListCodeIssues" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeIssues"></a>

```typescript
public readonly ListCodeIssues: string;
```

- *Type:* string

[List] continuum:ListCodeIssues.

---

##### `ListCodeScans`<sup>Required</sup> <a name="ListCodeScans" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListCodeScans"></a>

```typescript
public readonly ListCodeScans: string;
```

- *Type:* string

[List] continuum:ListCodeScans.

---

##### `ListCollectors`<sup>Required</sup> <a name="ListCollectors" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListCollectors"></a>

```typescript
public readonly ListCollectors: string;
```

- *Type:* string

[List] continuum:ListCollectors.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] continuum:ListEnvironments.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.continuum.ContinuumActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] continuum:ListIntegrations.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.continuum.ContinuumActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] continuum:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.continuum.ContinuumActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartIntegrationAuthorization`<sup>Required</sup> <a name="StartIntegrationAuthorization" id="@cdk_utils/iam.continuum.ContinuumActions.property.StartIntegrationAuthorization"></a>

```typescript
public readonly StartIntegrationAuthorization: string;
```

- *Type:* string

[Write] continuum:StartIntegrationAuthorization.

---

##### `UpdateCollector`<sup>Required</sup> <a name="UpdateCollector" id="@cdk_utils/iam.continuum.ContinuumActions.property.UpdateCollector"></a>

```typescript
public readonly UpdateCollector: string;
```

- *Type:* string

[Write] continuum:UpdateCollector.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.continuum.ContinuumActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] continuum:UpdateEnvironment.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.continuum.ContinuumActions.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string;
```

- *Type:* string

[Write] continuum:UpdateIntegration.

---

### ContinuumConditions <a name="ContinuumConditions" id="@cdk_utils/iam.continuum.ContinuumConditions"></a>

Condition key constants and builders for continuum.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.continuum.ContinuumConditions.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

new continuum.ContinuumConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.collectorARN">collectorARN</a></code> | Generates a condition block for `continuum:CollectorArn`. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.environmentARN">environmentARN</a></code> | Generates a condition block for `continuum:EnvironmentArn`. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.repositoryName">repositoryName</a></code> | Generates a condition block for `continuum:RepositoryName`. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.s3BucketName">s3BucketName</a></code> | Generates a condition block for `continuum:S3BucketName`. |

---

##### `collectorARN` <a name="collectorARN" id="@cdk_utils/iam.continuum.ContinuumConditions.collectorARN"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumConditions.collectorARN(values: string[])
```

Generates a condition block for `continuum:CollectorArn`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.continuum.ContinuumConditions.collectorARN.parameter.values"></a>

- *Type:* string[]

---

##### `environmentARN` <a name="environmentARN" id="@cdk_utils/iam.continuum.ContinuumConditions.environmentARN"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumConditions.environmentARN(value: string)
```

Generates a condition block for `continuum:EnvironmentArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.continuum.ContinuumConditions.environmentARN.parameter.value"></a>

- *Type:* string

---

##### `repositoryName` <a name="repositoryName" id="@cdk_utils/iam.continuum.ContinuumConditions.repositoryName"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumConditions.repositoryName(values: string[])
```

Generates a condition block for `continuum:RepositoryName`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.continuum.ContinuumConditions.repositoryName.parameter.values"></a>

- *Type:* string[]

---

##### `s3BucketName` <a name="s3BucketName" id="@cdk_utils/iam.continuum.ContinuumConditions.s3BucketName"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumConditions.s3BucketName(value: string)
```

Generates a condition block for `continuum:S3BucketName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.continuum.ContinuumConditions.s3BucketName.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.actionGetCollectorDataAccessAuthorizationConditionKeys">actionGetCollectorDataAccessAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCollectorDataAccessAuthorization action. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.AssociateCollectorConditionKeys">AssociateCollectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateCollector action. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.COLLECTOR_ARN">COLLECTOR_ARN</a></code> | <code>string</code> | Condition key: continuum:CollectorArn (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.DisassociateCollectorConditionKeys">DisassociateCollectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateCollector action. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.ENVIRONMENT_ARN">ENVIRONMENT_ARN</a></code> | <code>string</code> | Condition key: continuum:EnvironmentArn (ARN). |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.REPOSITORY_NAME">REPOSITORY_NAME</a></code> | <code>string</code> | Condition key: continuum:RepositoryName (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.S3_BUCKET_NAME">S3_BUCKET_NAME</a></code> | <code>string</code> | Condition key: continuum:S3BucketName (String). |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumConditions.property.UpdateEnvironmentConditionKeys">UpdateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironment action. |

---

##### `actionGetCollectorDataAccessAuthorizationConditionKeys`<sup>Required</sup> <a name="actionGetCollectorDataAccessAuthorizationConditionKeys" id="@cdk_utils/iam.continuum.ContinuumConditions.property.actionGetCollectorDataAccessAuthorizationConditionKeys"></a>

```typescript
public readonly actionGetCollectorDataAccessAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCollectorDataAccessAuthorization action.

---

##### `AssociateCollectorConditionKeys`<sup>Required</sup> <a name="AssociateCollectorConditionKeys" id="@cdk_utils/iam.continuum.ContinuumConditions.property.AssociateCollectorConditionKeys"></a>

```typescript
public readonly AssociateCollectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateCollector action.

---

##### `COLLECTOR_ARN`<sup>Required</sup> <a name="COLLECTOR_ARN" id="@cdk_utils/iam.continuum.ContinuumConditions.property.COLLECTOR_ARN"></a>

```typescript
public readonly COLLECTOR_ARN: string;
```

- *Type:* string

Condition key: continuum:CollectorArn (ArrayOfARN).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.continuum.ContinuumConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.continuum.ContinuumConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `DisassociateCollectorConditionKeys`<sup>Required</sup> <a name="DisassociateCollectorConditionKeys" id="@cdk_utils/iam.continuum.ContinuumConditions.property.DisassociateCollectorConditionKeys"></a>

```typescript
public readonly DisassociateCollectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateCollector action.

---

##### `ENVIRONMENT_ARN`<sup>Required</sup> <a name="ENVIRONMENT_ARN" id="@cdk_utils/iam.continuum.ContinuumConditions.property.ENVIRONMENT_ARN"></a>

```typescript
public readonly ENVIRONMENT_ARN: string;
```

- *Type:* string

Condition key: continuum:EnvironmentArn (ARN).

---

##### `REPOSITORY_NAME`<sup>Required</sup> <a name="REPOSITORY_NAME" id="@cdk_utils/iam.continuum.ContinuumConditions.property.REPOSITORY_NAME"></a>

```typescript
public readonly REPOSITORY_NAME: string;
```

- *Type:* string

Condition key: continuum:RepositoryName (ArrayOfString).

---

##### `S3_BUCKET_NAME`<sup>Required</sup> <a name="S3_BUCKET_NAME" id="@cdk_utils/iam.continuum.ContinuumConditions.property.S3_BUCKET_NAME"></a>

```typescript
public readonly S3_BUCKET_NAME: string;
```

- *Type:* string

Condition key: continuum:S3BucketName (String).

---

##### `UpdateEnvironmentConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentConditionKeys" id="@cdk_utils/iam.continuum.ContinuumConditions.property.UpdateEnvironmentConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironment action.

---

### ContinuumOperations <a name="ContinuumOperations" id="@cdk_utils/iam.continuum.ContinuumOperations"></a>

API operation to required IAM actions mapping for continuum.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.continuum.ContinuumOperations.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

new continuum.ContinuumOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.AssociateCollector">AssociateCollector</a></code> | <code>string[]</code> | IAM actions required for the AssociateCollector API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.CreateCodeFinding">CreateCodeFinding</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeFinding API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.CreateCodeScan">CreateCodeScan</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeScan API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.CreateCollector">CreateCollector</a></code> | <code>string[]</code> | IAM actions required for the CreateCollector API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.CreateIntegration">CreateIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegration API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.DeleteCollector">DeleteCollector</a></code> | <code>string[]</code> | IAM actions required for the DeleteCollector API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.DisassociateCollector">DisassociateCollector</a></code> | <code>string[]</code> | IAM actions required for the DisassociateCollector API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListAssociatedCollectors">ListAssociatedCollectors</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedCollectors API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListAssociatedEnvironments">ListAssociatedEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedEnvironments API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeFindings">ListCodeFindings</a></code> | <code>string[]</code> | IAM actions required for the ListCodeFindings API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeIssueArtifacts">ListCodeIssueArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListCodeIssueArtifacts API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeIssues">ListCodeIssues</a></code> | <code>string[]</code> | IAM actions required for the ListCodeIssues API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeScans">ListCodeScans</a></code> | <code>string[]</code> | IAM actions required for the ListCodeScans API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListCollectors">ListCollectors</a></code> | <code>string[]</code> | IAM actions required for the ListCollectors API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.ListIntegrations">ListIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListIntegrations API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeFinding">opGetCodeFinding</a></code> | <code>string[]</code> | IAM actions required for the GetCodeFinding API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeIssue">opGetCodeIssue</a></code> | <code>string[]</code> | IAM actions required for the GetCodeIssue API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeIssueArtifact">opGetCodeIssueArtifact</a></code> | <code>string[]</code> | IAM actions required for the GetCodeIssueArtifact API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeScan">opGetCodeScan</a></code> | <code>string[]</code> | IAM actions required for the GetCodeScan API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCollector">opGetCollector</a></code> | <code>string[]</code> | IAM actions required for the GetCollector API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCollectorDataAccessAuthorization">opGetCollectorDataAccessAuthorization</a></code> | <code>string[]</code> | IAM actions required for the GetCollectorDataAccessAuthorization API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetIntegration">opGetIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetIntegration API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.StartIntegrationAuthorization">StartIntegrationAuthorization</a></code> | <code>string[]</code> | IAM actions required for the StartIntegrationAuthorization API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.UpdateCollector">UpdateCollector</a></code> | <code>string[]</code> | IAM actions required for the UpdateCollector API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumOperations.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegration API call. |

---

##### `AssociateCollector`<sup>Required</sup> <a name="AssociateCollector" id="@cdk_utils/iam.continuum.ContinuumOperations.property.AssociateCollector"></a>

```typescript
public readonly AssociateCollector: string[];
```

- *Type:* string[]

IAM actions required for the AssociateCollector API call.

---

##### `CreateCodeFinding`<sup>Required</sup> <a name="CreateCodeFinding" id="@cdk_utils/iam.continuum.ContinuumOperations.property.CreateCodeFinding"></a>

```typescript
public readonly CreateCodeFinding: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeFinding API call.

---

##### `CreateCodeScan`<sup>Required</sup> <a name="CreateCodeScan" id="@cdk_utils/iam.continuum.ContinuumOperations.property.CreateCodeScan"></a>

```typescript
public readonly CreateCodeScan: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeScan API call.

---

##### `CreateCollector`<sup>Required</sup> <a name="CreateCollector" id="@cdk_utils/iam.continuum.ContinuumOperations.property.CreateCollector"></a>

```typescript
public readonly CreateCollector: string[];
```

- *Type:* string[]

IAM actions required for the CreateCollector API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.continuum.ContinuumOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.continuum.ContinuumOperations.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegration API call.

---

##### `DeleteCollector`<sup>Required</sup> <a name="DeleteCollector" id="@cdk_utils/iam.continuum.ContinuumOperations.property.DeleteCollector"></a>

```typescript
public readonly DeleteCollector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCollector API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.continuum.ContinuumOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.continuum.ContinuumOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DisassociateCollector`<sup>Required</sup> <a name="DisassociateCollector" id="@cdk_utils/iam.continuum.ContinuumOperations.property.DisassociateCollector"></a>

```typescript
public readonly DisassociateCollector: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateCollector API call.

---

##### `ListAssociatedCollectors`<sup>Required</sup> <a name="ListAssociatedCollectors" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListAssociatedCollectors"></a>

```typescript
public readonly ListAssociatedCollectors: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedCollectors API call.

---

##### `ListAssociatedEnvironments`<sup>Required</sup> <a name="ListAssociatedEnvironments" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListAssociatedEnvironments"></a>

```typescript
public readonly ListAssociatedEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedEnvironments API call.

---

##### `ListCodeFindings`<sup>Required</sup> <a name="ListCodeFindings" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeFindings"></a>

```typescript
public readonly ListCodeFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeFindings API call.

---

##### `ListCodeIssueArtifacts`<sup>Required</sup> <a name="ListCodeIssueArtifacts" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeIssueArtifacts"></a>

```typescript
public readonly ListCodeIssueArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeIssueArtifacts API call.

---

##### `ListCodeIssues`<sup>Required</sup> <a name="ListCodeIssues" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeIssues"></a>

```typescript
public readonly ListCodeIssues: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeIssues API call.

---

##### `ListCodeScans`<sup>Required</sup> <a name="ListCodeScans" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListCodeScans"></a>

```typescript
public readonly ListCodeScans: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeScans API call.

---

##### `ListCollectors`<sup>Required</sup> <a name="ListCollectors" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListCollectors"></a>

```typescript
public readonly ListCollectors: string[];
```

- *Type:* string[]

IAM actions required for the ListCollectors API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.continuum.ContinuumOperations.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegrations API call.

---

##### `opGetCodeFinding`<sup>Required</sup> <a name="opGetCodeFinding" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeFinding"></a>

```typescript
public readonly opGetCodeFinding: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeFinding API call.

---

##### `opGetCodeIssue`<sup>Required</sup> <a name="opGetCodeIssue" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeIssue"></a>

```typescript
public readonly opGetCodeIssue: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeIssue API call.

---

##### `opGetCodeIssueArtifact`<sup>Required</sup> <a name="opGetCodeIssueArtifact" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeIssueArtifact"></a>

```typescript
public readonly opGetCodeIssueArtifact: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeIssueArtifact API call.

---

##### `opGetCodeScan`<sup>Required</sup> <a name="opGetCodeScan" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCodeScan"></a>

```typescript
public readonly opGetCodeScan: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeScan API call.

---

##### `opGetCollector`<sup>Required</sup> <a name="opGetCollector" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCollector"></a>

```typescript
public readonly opGetCollector: string[];
```

- *Type:* string[]

IAM actions required for the GetCollector API call.

---

##### `opGetCollectorDataAccessAuthorization`<sup>Required</sup> <a name="opGetCollectorDataAccessAuthorization" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetCollectorDataAccessAuthorization"></a>

```typescript
public readonly opGetCollectorDataAccessAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the GetCollectorDataAccessAuthorization API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetIntegration`<sup>Required</sup> <a name="opGetIntegration" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetIntegration"></a>

```typescript
public readonly opGetIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegration API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.continuum.ContinuumOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.continuum.ContinuumOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `StartIntegrationAuthorization`<sup>Required</sup> <a name="StartIntegrationAuthorization" id="@cdk_utils/iam.continuum.ContinuumOperations.property.StartIntegrationAuthorization"></a>

```typescript
public readonly StartIntegrationAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the StartIntegrationAuthorization API call.

---

##### `UpdateCollector`<sup>Required</sup> <a name="UpdateCollector" id="@cdk_utils/iam.continuum.ContinuumOperations.property.UpdateCollector"></a>

```typescript
public readonly UpdateCollector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCollector API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.continuum.ContinuumOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.continuum.ContinuumOperations.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegration API call.

---

### ContinuumResources <a name="ContinuumResources" id="@cdk_utils/iam.continuum.ContinuumResources"></a>

ARN builders, validators, and parsers for continuum resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.continuum.ContinuumResources.Initializer"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

new continuum.ContinuumResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.codeFindings">codeFindings</a></code> | Builds an ARN for the code-findings resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.codeIssues">codeIssues</a></code> | Builds an ARN for the code-issues resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.codeScans">codeScans</a></code> | Builds an ARN for the code-scans resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.collectors">collectors</a></code> | Builds an ARN for the collectors resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.environments">environments</a></code> | Builds an ARN for the environments resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.integrations">integrations</a></code> | Builds an ARN for the integrations resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.isValidCodeFindingsArn">isValidCodeFindingsArn</a></code> | Validates whether a string is a valid ARN for the code-findings resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.isValidCodeIssuesArn">isValidCodeIssuesArn</a></code> | Validates whether a string is a valid ARN for the code-issues resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.isValidCodeScansArn">isValidCodeScansArn</a></code> | Validates whether a string is a valid ARN for the code-scans resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.isValidCollectorsArn">isValidCollectorsArn</a></code> | Validates whether a string is a valid ARN for the collectors resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.isValidEnvironmentsArn">isValidEnvironmentsArn</a></code> | Validates whether a string is a valid ARN for the environments resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.isValidIntegrationsArn">isValidIntegrationsArn</a></code> | Validates whether a string is a valid ARN for the integrations resource. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.parseCodeFindingsArn">parseCodeFindingsArn</a></code> | Parses a code-findings ARN into its components. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.parseCodeIssuesArn">parseCodeIssuesArn</a></code> | Parses a code-issues ARN into its components. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.parseCodeScansArn">parseCodeScansArn</a></code> | Parses a code-scans ARN into its components. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.parseCollectorsArn">parseCollectorsArn</a></code> | Parses a collectors ARN into its components. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.parseEnvironmentsArn">parseEnvironmentsArn</a></code> | Parses a environments ARN into its components. |
| <code><a href="#@cdk_utils/iam.continuum.ContinuumResources.parseIntegrationsArn">parseIntegrationsArn</a></code> | Parses a integrations ARN into its components. |

---

##### `codeFindings` <a name="codeFindings" id="@cdk_utils/iam.continuum.ContinuumResources.codeFindings"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.codeFindings(props: ContinuumCodeFindingsArnProps)
```

Builds an ARN for the code-findings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.continuum.ContinuumResources.codeFindings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.continuum.ContinuumCodeFindingsArnProps">ContinuumCodeFindingsArnProps</a>

---

##### `codeIssues` <a name="codeIssues" id="@cdk_utils/iam.continuum.ContinuumResources.codeIssues"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.codeIssues(props: ContinuumCodeIssuesArnProps)
```

Builds an ARN for the code-issues resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.continuum.ContinuumResources.codeIssues.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.continuum.ContinuumCodeIssuesArnProps">ContinuumCodeIssuesArnProps</a>

---

##### `codeScans` <a name="codeScans" id="@cdk_utils/iam.continuum.ContinuumResources.codeScans"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.codeScans(props: ContinuumCodeScansArnProps)
```

Builds an ARN for the code-scans resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.continuum.ContinuumResources.codeScans.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.continuum.ContinuumCodeScansArnProps">ContinuumCodeScansArnProps</a>

---

##### `collectors` <a name="collectors" id="@cdk_utils/iam.continuum.ContinuumResources.collectors"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.collectors(props: ContinuumCollectorsArnProps)
```

Builds an ARN for the collectors resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.continuum.ContinuumResources.collectors.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.continuum.ContinuumCollectorsArnProps">ContinuumCollectorsArnProps</a>

---

##### `environments` <a name="environments" id="@cdk_utils/iam.continuum.ContinuumResources.environments"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.environments(props: ContinuumEnvironmentsArnProps)
```

Builds an ARN for the environments resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.continuum.ContinuumResources.environments.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.continuum.ContinuumEnvironmentsArnProps">ContinuumEnvironmentsArnProps</a>

---

##### `integrations` <a name="integrations" id="@cdk_utils/iam.continuum.ContinuumResources.integrations"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.integrations(props: ContinuumIntegrationsArnProps)
```

Builds an ARN for the integrations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.continuum.ContinuumResources.integrations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.continuum.ContinuumIntegrationsArnProps">ContinuumIntegrationsArnProps</a>

---

##### `isValidCodeFindingsArn` <a name="isValidCodeFindingsArn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCodeFindingsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.isValidCodeFindingsArn(arn: string)
```

Validates whether a string is a valid ARN for the code-findings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCodeFindingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeIssuesArn` <a name="isValidCodeIssuesArn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCodeIssuesArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.isValidCodeIssuesArn(arn: string)
```

Validates whether a string is a valid ARN for the code-issues resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCodeIssuesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeScansArn` <a name="isValidCodeScansArn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCodeScansArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.isValidCodeScansArn(arn: string)
```

Validates whether a string is a valid ARN for the code-scans resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCodeScansArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCollectorsArn` <a name="isValidCollectorsArn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCollectorsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.isValidCollectorsArn(arn: string)
```

Validates whether a string is a valid ARN for the collectors resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidCollectorsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentsArn` <a name="isValidEnvironmentsArn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidEnvironmentsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.isValidEnvironmentsArn(arn: string)
```

Validates whether a string is a valid ARN for the environments resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidEnvironmentsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationsArn` <a name="isValidIntegrationsArn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidIntegrationsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.isValidIntegrationsArn(arn: string)
```

Validates whether a string is a valid ARN for the integrations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.isValidIntegrationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeFindingsArn` <a name="parseCodeFindingsArn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCodeFindingsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.parseCodeFindingsArn(arn: string)
```

Parses a code-findings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCodeFindingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeIssuesArn` <a name="parseCodeIssuesArn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCodeIssuesArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.parseCodeIssuesArn(arn: string)
```

Parses a code-issues ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCodeIssuesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeScansArn` <a name="parseCodeScansArn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCodeScansArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.parseCodeScansArn(arn: string)
```

Parses a code-scans ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCodeScansArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCollectorsArn` <a name="parseCollectorsArn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCollectorsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.parseCollectorsArn(arn: string)
```

Parses a collectors ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.parseCollectorsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentsArn` <a name="parseEnvironmentsArn" id="@cdk_utils/iam.continuum.ContinuumResources.parseEnvironmentsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.parseEnvironmentsArn(arn: string)
```

Parses a environments ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.parseEnvironmentsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationsArn` <a name="parseIntegrationsArn" id="@cdk_utils/iam.continuum.ContinuumResources.parseIntegrationsArn"></a>

```typescript
import { continuum } from '@cdk_utils/iam'

continuum.ContinuumResources.parseIntegrationsArn(arn: string)
```

Parses a integrations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.continuum.ContinuumResources.parseIntegrationsArn.parameter.arn"></a>

- *Type:* string

---




