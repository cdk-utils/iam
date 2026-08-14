# `apptest` Submodule <a name="`apptest` Submodule" id="@cdk_utils/iam.apptest"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApptestTestCaseArnComponents <a name="ApptestTestCaseArnComponents" id="@cdk_utils/iam.apptest.ApptestTestCaseArnComponents"></a>

Parsed components of a TestCase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestCaseArnComponents: apptest.ApptestTestCaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.testCaseId">testCaseId</a></code> | <code>string</code> | The TestCaseId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `testCaseId`<sup>Required</sup> <a name="testCaseId" id="@cdk_utils/iam.apptest.ApptestTestCaseArnComponents.property.testCaseId"></a>

```typescript
public readonly testCaseId: string;
```

- *Type:* string

The TestCaseId component.

---

### ApptestTestCaseArnProps <a name="ApptestTestCaseArnProps" id="@cdk_utils/iam.apptest.ApptestTestCaseArnProps"></a>

Properties for building a TestCase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestCaseArnProps.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestCaseArnProps: apptest.ApptestTestCaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.testCaseId">testCaseId</a></code> | <code>string</code> | The TestCaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `testCaseId`<sup>Required</sup> <a name="testCaseId" id="@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.testCaseId"></a>

```typescript
public readonly testCaseId: string;
```

- *Type:* string

The TestCaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestCaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApptestTestConfigurationArnComponents <a name="ApptestTestConfigurationArnComponents" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents"></a>

Parsed components of a TestConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestConfigurationArnComponents: apptest.ApptestTestConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.testConfigurationId">testConfigurationId</a></code> | <code>string</code> | The TestConfigurationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `testConfigurationId`<sup>Required</sup> <a name="testConfigurationId" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnComponents.property.testConfigurationId"></a>

```typescript
public readonly testConfigurationId: string;
```

- *Type:* string

The TestConfigurationId component.

---

### ApptestTestConfigurationArnProps <a name="ApptestTestConfigurationArnProps" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps"></a>

Properties for building a TestConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestConfigurationArnProps: apptest.ApptestTestConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.testConfigurationId">testConfigurationId</a></code> | <code>string</code> | The TestConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `testConfigurationId`<sup>Required</sup> <a name="testConfigurationId" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.testConfigurationId"></a>

```typescript
public readonly testConfigurationId: string;
```

- *Type:* string

The TestConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApptestTestRunArnComponents <a name="ApptestTestRunArnComponents" id="@cdk_utils/iam.apptest.ApptestTestRunArnComponents"></a>

Parsed components of a TestRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestRunArnComponents.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestRunArnComponents: apptest.ApptestTestRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.testRunId">testRunId</a></code> | <code>string</code> | The TestRunId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `testRunId`<sup>Required</sup> <a name="testRunId" id="@cdk_utils/iam.apptest.ApptestTestRunArnComponents.property.testRunId"></a>

```typescript
public readonly testRunId: string;
```

- *Type:* string

The TestRunId component.

---

### ApptestTestRunArnProps <a name="ApptestTestRunArnProps" id="@cdk_utils/iam.apptest.ApptestTestRunArnProps"></a>

Properties for building a TestRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestRunArnProps.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestRunArnProps: apptest.ApptestTestRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.testRunId">testRunId</a></code> | <code>string</code> | The TestRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `testRunId`<sup>Required</sup> <a name="testRunId" id="@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.testRunId"></a>

```typescript
public readonly testRunId: string;
```

- *Type:* string

The TestRunId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApptestTestSuiteArnComponents <a name="ApptestTestSuiteArnComponents" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents"></a>

Parsed components of a TestSuite ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestSuiteArnComponents: apptest.ApptestTestSuiteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.testSuiteId">testSuiteId</a></code> | <code>string</code> | The TestSuiteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `testSuiteId`<sup>Required</sup> <a name="testSuiteId" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnComponents.property.testSuiteId"></a>

```typescript
public readonly testSuiteId: string;
```

- *Type:* string

The TestSuiteId component.

---

### ApptestTestSuiteArnProps <a name="ApptestTestSuiteArnProps" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnProps"></a>

Properties for building a TestSuite ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

const apptestTestSuiteArnProps: apptest.ApptestTestSuiteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.testSuiteId">testSuiteId</a></code> | <code>string</code> | The TestSuiteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `testSuiteId`<sup>Required</sup> <a name="testSuiteId" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.testSuiteId"></a>

```typescript
public readonly testSuiteId: string;
```

- *Type:* string

The TestSuiteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apptest.ApptestTestSuiteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApptestActions <a name="ApptestActions" id="@cdk_utils/iam.apptest.ApptestActions"></a>

IAM action constants for the apptest service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apptest.ApptestActions.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

new apptest.ApptestActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestCase">actionGetTestCase</a></code> | <code>string</code> | [Read] apptest:GetTestCase. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestConfiguration">actionGetTestConfiguration</a></code> | <code>string</code> | [Read] apptest:GetTestConfiguration. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestRunStep">actionGetTestRunStep</a></code> | <code>string</code> | [Read] apptest:GetTestRunStep. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestSuite">actionGetTestSuite</a></code> | <code>string</code> | [Read] apptest:GetTestSuite. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.CreateTestCase">CreateTestCase</a></code> | <code>string</code> | [Write] apptest:CreateTestCase. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.CreateTestConfiguration">CreateTestConfiguration</a></code> | <code>string</code> | [Write] apptest:CreateTestConfiguration. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.CreateTestSuite">CreateTestSuite</a></code> | <code>string</code> | [Write] apptest:CreateTestSuite. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestCase">DeleteTestCase</a></code> | <code>string</code> | [Write] apptest:DeleteTestCase. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestConfiguration">DeleteTestConfiguration</a></code> | <code>string</code> | [Write] apptest:DeleteTestConfiguration. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestRun">DeleteTestRun</a></code> | <code>string</code> | [Write] apptest:DeleteTestRun. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestSuite">DeleteTestSuite</a></code> | <code>string</code> | [Write] apptest:DeleteTestSuite. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] apptest:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTestCases">ListTestCases</a></code> | <code>string</code> | [List] apptest:ListTestCases. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTestConfigurations">ListTestConfigurations</a></code> | <code>string</code> | [List] apptest:ListTestConfigurations. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTestRuns">ListTestRuns</a></code> | <code>string</code> | [List] apptest:ListTestRuns. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTestRunSteps">ListTestRunSteps</a></code> | <code>string</code> | [Read] apptest:ListTestRunSteps. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTestRunTestCases">ListTestRunTestCases</a></code> | <code>string</code> | [Read] apptest:ListTestRunTestCases. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.ListTestSuites">ListTestSuites</a></code> | <code>string</code> | [List] apptest:ListTestSuites. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.StartTestRun">StartTestRun</a></code> | <code>string</code> | [Write] apptest:StartTestRun. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] apptest:TagResource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] apptest:UntagResource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.UpdateTestCase">UpdateTestCase</a></code> | <code>string</code> | [Write] apptest:UpdateTestCase. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.UpdateTestConfiguration">UpdateTestConfiguration</a></code> | <code>string</code> | [Write] apptest:UpdateTestConfiguration. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestActions.property.UpdateTestSuite">UpdateTestSuite</a></code> | <code>string</code> | [Write] apptest:UpdateTestSuite. |

---

##### `actionGetTestCase`<sup>Required</sup> <a name="actionGetTestCase" id="@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestCase"></a>

```typescript
public readonly actionGetTestCase: string;
```

- *Type:* string

[Read] apptest:GetTestCase.

---

##### `actionGetTestConfiguration`<sup>Required</sup> <a name="actionGetTestConfiguration" id="@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestConfiguration"></a>

```typescript
public readonly actionGetTestConfiguration: string;
```

- *Type:* string

[Read] apptest:GetTestConfiguration.

---

##### `actionGetTestRunStep`<sup>Required</sup> <a name="actionGetTestRunStep" id="@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestRunStep"></a>

```typescript
public readonly actionGetTestRunStep: string;
```

- *Type:* string

[Read] apptest:GetTestRunStep.

---

##### `actionGetTestSuite`<sup>Required</sup> <a name="actionGetTestSuite" id="@cdk_utils/iam.apptest.ApptestActions.property.actionGetTestSuite"></a>

```typescript
public readonly actionGetTestSuite: string;
```

- *Type:* string

[Read] apptest:GetTestSuite.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.apptest.ApptestActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.apptest.ApptestActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.apptest.ApptestActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.apptest.ApptestActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.apptest.ApptestActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateTestCase`<sup>Required</sup> <a name="CreateTestCase" id="@cdk_utils/iam.apptest.ApptestActions.property.CreateTestCase"></a>

```typescript
public readonly CreateTestCase: string;
```

- *Type:* string

[Write] apptest:CreateTestCase.

---

##### `CreateTestConfiguration`<sup>Required</sup> <a name="CreateTestConfiguration" id="@cdk_utils/iam.apptest.ApptestActions.property.CreateTestConfiguration"></a>

```typescript
public readonly CreateTestConfiguration: string;
```

- *Type:* string

[Write] apptest:CreateTestConfiguration.

---

##### `CreateTestSuite`<sup>Required</sup> <a name="CreateTestSuite" id="@cdk_utils/iam.apptest.ApptestActions.property.CreateTestSuite"></a>

```typescript
public readonly CreateTestSuite: string;
```

- *Type:* string

[Write] apptest:CreateTestSuite.

---

##### `DeleteTestCase`<sup>Required</sup> <a name="DeleteTestCase" id="@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestCase"></a>

```typescript
public readonly DeleteTestCase: string;
```

- *Type:* string

[Write] apptest:DeleteTestCase.

---

##### `DeleteTestConfiguration`<sup>Required</sup> <a name="DeleteTestConfiguration" id="@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestConfiguration"></a>

```typescript
public readonly DeleteTestConfiguration: string;
```

- *Type:* string

[Write] apptest:DeleteTestConfiguration.

---

##### `DeleteTestRun`<sup>Required</sup> <a name="DeleteTestRun" id="@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestRun"></a>

```typescript
public readonly DeleteTestRun: string;
```

- *Type:* string

[Write] apptest:DeleteTestRun.

---

##### `DeleteTestSuite`<sup>Required</sup> <a name="DeleteTestSuite" id="@cdk_utils/iam.apptest.ApptestActions.property.DeleteTestSuite"></a>

```typescript
public readonly DeleteTestSuite: string;
```

- *Type:* string

[Write] apptest:DeleteTestSuite.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] apptest:ListTagsForResource.

---

##### `ListTestCases`<sup>Required</sup> <a name="ListTestCases" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTestCases"></a>

```typescript
public readonly ListTestCases: string;
```

- *Type:* string

[List] apptest:ListTestCases.

---

##### `ListTestConfigurations`<sup>Required</sup> <a name="ListTestConfigurations" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTestConfigurations"></a>

```typescript
public readonly ListTestConfigurations: string;
```

- *Type:* string

[List] apptest:ListTestConfigurations.

---

##### `ListTestRuns`<sup>Required</sup> <a name="ListTestRuns" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTestRuns"></a>

```typescript
public readonly ListTestRuns: string;
```

- *Type:* string

[List] apptest:ListTestRuns.

---

##### `ListTestRunSteps`<sup>Required</sup> <a name="ListTestRunSteps" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTestRunSteps"></a>

```typescript
public readonly ListTestRunSteps: string;
```

- *Type:* string

[Read] apptest:ListTestRunSteps.

---

##### `ListTestRunTestCases`<sup>Required</sup> <a name="ListTestRunTestCases" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTestRunTestCases"></a>

```typescript
public readonly ListTestRunTestCases: string;
```

- *Type:* string

[Read] apptest:ListTestRunTestCases.

---

##### `ListTestSuites`<sup>Required</sup> <a name="ListTestSuites" id="@cdk_utils/iam.apptest.ApptestActions.property.ListTestSuites"></a>

```typescript
public readonly ListTestSuites: string;
```

- *Type:* string

[List] apptest:ListTestSuites.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.apptest.ApptestActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTestRun`<sup>Required</sup> <a name="StartTestRun" id="@cdk_utils/iam.apptest.ApptestActions.property.StartTestRun"></a>

```typescript
public readonly StartTestRun: string;
```

- *Type:* string

[Write] apptest:StartTestRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.apptest.ApptestActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] apptest:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.apptest.ApptestActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] apptest:UntagResource.

---

##### `UpdateTestCase`<sup>Required</sup> <a name="UpdateTestCase" id="@cdk_utils/iam.apptest.ApptestActions.property.UpdateTestCase"></a>

```typescript
public readonly UpdateTestCase: string;
```

- *Type:* string

[Write] apptest:UpdateTestCase.

---

##### `UpdateTestConfiguration`<sup>Required</sup> <a name="UpdateTestConfiguration" id="@cdk_utils/iam.apptest.ApptestActions.property.UpdateTestConfiguration"></a>

```typescript
public readonly UpdateTestConfiguration: string;
```

- *Type:* string

[Write] apptest:UpdateTestConfiguration.

---

##### `UpdateTestSuite`<sup>Required</sup> <a name="UpdateTestSuite" id="@cdk_utils/iam.apptest.ApptestActions.property.UpdateTestSuite"></a>

```typescript
public readonly UpdateTestSuite: string;
```

- *Type:* string

[Write] apptest:UpdateTestSuite.

---

### ApptestConditions <a name="ApptestConditions" id="@cdk_utils/iam.apptest.ApptestConditions"></a>

Condition key constants and builders for apptest.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apptest.ApptestConditions.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

new apptest.ApptestConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.apptest.ApptestConditions.requestTag"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apptest.ApptestConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.apptest.ApptestConditions.resourceTag"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apptest.ApptestConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.apptest.ApptestConditions.tagKeys"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apptest.ApptestConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.CreateTestCaseConditionKeys">CreateTestCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTestCase action. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.CreateTestConfigurationConditionKeys">CreateTestConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTestConfiguration action. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.CreateTestSuiteConditionKeys">CreateTestSuiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTestSuite action. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.StartTestRunConditionKeys">StartTestRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTestRun action. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.apptest.ApptestConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.apptest.ApptestConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.apptest.ApptestConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateTestCaseConditionKeys`<sup>Required</sup> <a name="CreateTestCaseConditionKeys" id="@cdk_utils/iam.apptest.ApptestConditions.property.CreateTestCaseConditionKeys"></a>

```typescript
public readonly CreateTestCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTestCase action.

---

##### `CreateTestConfigurationConditionKeys`<sup>Required</sup> <a name="CreateTestConfigurationConditionKeys" id="@cdk_utils/iam.apptest.ApptestConditions.property.CreateTestConfigurationConditionKeys"></a>

```typescript
public readonly CreateTestConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTestConfiguration action.

---

##### `CreateTestSuiteConditionKeys`<sup>Required</sup> <a name="CreateTestSuiteConditionKeys" id="@cdk_utils/iam.apptest.ApptestConditions.property.CreateTestSuiteConditionKeys"></a>

```typescript
public readonly CreateTestSuiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTestSuite action.

---

##### `StartTestRunConditionKeys`<sup>Required</sup> <a name="StartTestRunConditionKeys" id="@cdk_utils/iam.apptest.ApptestConditions.property.StartTestRunConditionKeys"></a>

```typescript
public readonly StartTestRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTestRun action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.apptest.ApptestConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.apptest.ApptestConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ApptestResources <a name="ApptestResources" id="@cdk_utils/iam.apptest.ApptestResources"></a>

ARN builders, validators, and parsers for apptest resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apptest.ApptestResources.Initializer"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

new apptest.ApptestResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.isValidTestCaseArn">isValidTestCaseArn</a></code> | Validates whether a string is a valid ARN for the TestCase resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.isValidTestConfigurationArn">isValidTestConfigurationArn</a></code> | Validates whether a string is a valid ARN for the TestConfiguration resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.isValidTestRunArn">isValidTestRunArn</a></code> | Validates whether a string is a valid ARN for the TestRun resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.isValidTestSuiteArn">isValidTestSuiteArn</a></code> | Validates whether a string is a valid ARN for the TestSuite resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.parseTestCaseArn">parseTestCaseArn</a></code> | Parses a TestCase ARN into its components. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.parseTestConfigurationArn">parseTestConfigurationArn</a></code> | Parses a TestConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.parseTestRunArn">parseTestRunArn</a></code> | Parses a TestRun ARN into its components. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.parseTestSuiteArn">parseTestSuiteArn</a></code> | Parses a TestSuite ARN into its components. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.testCase">testCase</a></code> | Builds an ARN for the TestCase resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.testConfiguration">testConfiguration</a></code> | Builds an ARN for the TestConfiguration resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.testRun">testRun</a></code> | Builds an ARN for the TestRun resource. |
| <code><a href="#@cdk_utils/iam.apptest.ApptestResources.testSuite">testSuite</a></code> | Builds an ARN for the TestSuite resource. |

---

##### `isValidTestCaseArn` <a name="isValidTestCaseArn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestCaseArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.isValidTestCaseArn(arn: string)
```

Validates whether a string is a valid ARN for the TestCase resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestConfigurationArn` <a name="isValidTestConfigurationArn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestConfigurationArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.isValidTestConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the TestConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestRunArn` <a name="isValidTestRunArn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestRunArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.isValidTestRunArn(arn: string)
```

Validates whether a string is a valid ARN for the TestRun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestRunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestSuiteArn` <a name="isValidTestSuiteArn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestSuiteArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.isValidTestSuiteArn(arn: string)
```

Validates whether a string is a valid ARN for the TestSuite resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.isValidTestSuiteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestCaseArn` <a name="parseTestCaseArn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestCaseArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.parseTestCaseArn(arn: string)
```

Parses a TestCase ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestConfigurationArn` <a name="parseTestConfigurationArn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestConfigurationArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.parseTestConfigurationArn(arn: string)
```

Parses a TestConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestRunArn` <a name="parseTestRunArn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestRunArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.parseTestRunArn(arn: string)
```

Parses a TestRun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestSuiteArn` <a name="parseTestSuiteArn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestSuiteArn"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.parseTestSuiteArn(arn: string)
```

Parses a TestSuite ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apptest.ApptestResources.parseTestSuiteArn.parameter.arn"></a>

- *Type:* string

---

##### `testCase` <a name="testCase" id="@cdk_utils/iam.apptest.ApptestResources.testCase"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.testCase(props: ApptestTestCaseArnProps)
```

Builds an ARN for the TestCase resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apptest.ApptestResources.testCase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apptest.ApptestTestCaseArnProps">ApptestTestCaseArnProps</a>

---

##### `testConfiguration` <a name="testConfiguration" id="@cdk_utils/iam.apptest.ApptestResources.testConfiguration"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.testConfiguration(props: ApptestTestConfigurationArnProps)
```

Builds an ARN for the TestConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apptest.ApptestResources.testConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apptest.ApptestTestConfigurationArnProps">ApptestTestConfigurationArnProps</a>

---

##### `testRun` <a name="testRun" id="@cdk_utils/iam.apptest.ApptestResources.testRun"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.testRun(props: ApptestTestRunArnProps)
```

Builds an ARN for the TestRun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apptest.ApptestResources.testRun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apptest.ApptestTestRunArnProps">ApptestTestRunArnProps</a>

---

##### `testSuite` <a name="testSuite" id="@cdk_utils/iam.apptest.ApptestResources.testSuite"></a>

```typescript
import { apptest } from '@cdk_utils/iam'

apptest.ApptestResources.testSuite(props: ApptestTestSuiteArnProps)
```

Builds an ARN for the TestSuite resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apptest.ApptestResources.testSuite.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apptest.ApptestTestSuiteArnProps">ApptestTestSuiteArnProps</a>

---




