# `honeycode` Submodule <a name="`honeycode` Submodule" id="@cdk_utils/iam.honeycode"></a>


## Structs <a name="Structs" id="Structs"></a>

### HoneycodeScreenArnComponents <a name="HoneycodeScreenArnComponents" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents"></a>

Parsed components of a screen ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeScreenArnComponents: honeycode.HoneycodeScreenArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.screenId">screenId</a></code> | <code>string</code> | The ScreenId component. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `screenId`<sup>Required</sup> <a name="screenId" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.screenId"></a>

```typescript
public readonly screenId: string;
```

- *Type:* string

The ScreenId component.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnComponents.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component.

---

### HoneycodeScreenArnProps <a name="HoneycodeScreenArnProps" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps"></a>

Properties for building a screen ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeScreenArnProps: honeycode.HoneycodeScreenArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.screenId">screenId</a></code> | <code>string</code> | The ScreenId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `screenId`<sup>Required</sup> <a name="screenId" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.screenId"></a>

```typescript
public readonly screenId: string;
```

- *Type:* string

The ScreenId component of the ARN.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeScreenArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HoneycodeScreenAutomationArnComponents <a name="HoneycodeScreenAutomationArnComponents" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents"></a>

Parsed components of a screen-automation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeScreenAutomationArnComponents: honeycode.HoneycodeScreenAutomationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.automationId">automationId</a></code> | <code>string</code> | The AutomationId component. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.screenId">screenId</a></code> | <code>string</code> | The ScreenId component. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `automationId`<sup>Required</sup> <a name="automationId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.automationId"></a>

```typescript
public readonly automationId: string;
```

- *Type:* string

The AutomationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `screenId`<sup>Required</sup> <a name="screenId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.screenId"></a>

```typescript
public readonly screenId: string;
```

- *Type:* string

The ScreenId component.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnComponents.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component.

---

### HoneycodeScreenAutomationArnProps <a name="HoneycodeScreenAutomationArnProps" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps"></a>

Properties for building a screen-automation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeScreenAutomationArnProps: honeycode.HoneycodeScreenAutomationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.automationId">automationId</a></code> | <code>string</code> | The AutomationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.screenId">screenId</a></code> | <code>string</code> | The ScreenId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `automationId`<sup>Required</sup> <a name="automationId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.automationId"></a>

```typescript
public readonly automationId: string;
```

- *Type:* string

The AutomationId component of the ARN.

---

##### `screenId`<sup>Required</sup> <a name="screenId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.screenId"></a>

```typescript
public readonly screenId: string;
```

- *Type:* string

The ScreenId component of the ARN.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HoneycodeTableArnComponents <a name="HoneycodeTableArnComponents" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents"></a>

Parsed components of a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeTableArnComponents: honeycode.HoneycodeTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.tableId">tableId</a></code> | <code>string</code> | The TableId component. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableId component.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeTableArnComponents.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component.

---

### HoneycodeTableArnProps <a name="HoneycodeTableArnProps" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps"></a>

Properties for building a table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeTableArnProps: honeycode.HoneycodeTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.tableId">tableId</a></code> | <code>string</code> | The TableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableId component of the ARN.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HoneycodeWorkbookArnComponents <a name="HoneycodeWorkbookArnComponents" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents"></a>

Parsed components of a workbook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeWorkbookArnComponents: honeycode.HoneycodeWorkbookArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnComponents.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component.

---

### HoneycodeWorkbookArnProps <a name="HoneycodeWorkbookArnProps" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps"></a>

Properties for building a workbook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

const honeycodeWorkbookArnProps: honeycode.HoneycodeWorkbookArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.workbookId">workbookId</a></code> | <code>string</code> | The WorkbookId component of the ARN. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workbookId`<sup>Required</sup> <a name="workbookId" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.workbookId"></a>

```typescript
public readonly workbookId: string;
```

- *Type:* string

The WorkbookId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### HoneycodeActions <a name="HoneycodeActions" id="@cdk_utils/iam.honeycode.HoneycodeActions"></a>

IAM action constants for the honeycode service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.honeycode.HoneycodeActions.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

new honeycode.HoneycodeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.actionGetScreenData">actionGetScreenData</a></code> | <code>string</code> | [Read] honeycode:GetScreenData. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ApproveTeamAssociation">ApproveTeamAssociation</a></code> | <code>string</code> | [Write] honeycode:ApproveTeamAssociation. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchCreateTableRows">BatchCreateTableRows</a></code> | <code>string</code> | [Write] honeycode:BatchCreateTableRows. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchDeleteTableRows">BatchDeleteTableRows</a></code> | <code>string</code> | [Write] honeycode:BatchDeleteTableRows. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchUpdateTableRows">BatchUpdateTableRows</a></code> | <code>string</code> | [Write] honeycode:BatchUpdateTableRows. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchUpsertTableRows">BatchUpsertTableRows</a></code> | <code>string</code> | [Write] honeycode:BatchUpsertTableRows. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.CreateTeam">CreateTeam</a></code> | <code>string</code> | [Write] honeycode:CreateTeam. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.CreateTenant">CreateTenant</a></code> | <code>string</code> | [Write] honeycode:CreateTenant. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.DeleteDomains">DeleteDomains</a></code> | <code>string</code> | [Write] honeycode:DeleteDomains. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.DeregisterGroups">DeregisterGroups</a></code> | <code>string</code> | [Write] honeycode:DeregisterGroups. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.DescribeTableDataImportJob">DescribeTableDataImportJob</a></code> | <code>string</code> | [Read] honeycode:DescribeTableDataImportJob. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.DescribeTeam">DescribeTeam</a></code> | <code>string</code> | [Read] honeycode:DescribeTeam. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.InvokeScreenAutomation">InvokeScreenAutomation</a></code> | <code>string</code> | [Write] honeycode:InvokeScreenAutomation. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] honeycode:ListDomains. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] honeycode:ListGroups. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTableColumns">ListTableColumns</a></code> | <code>string</code> | [List] honeycode:ListTableColumns. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTableRows">ListTableRows</a></code> | <code>string</code> | [List] honeycode:ListTableRows. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] honeycode:ListTables. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Tagging] honeycode:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTeamAssociations">ListTeamAssociations</a></code> | <code>string</code> | [List] honeycode:ListTeamAssociations. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTenants">ListTenants</a></code> | <code>string</code> | [List] honeycode:ListTenants. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.QueryTableRows">QueryTableRows</a></code> | <code>string</code> | [Read] honeycode:QueryTableRows. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.RegisterDomainForVerification">RegisterDomainForVerification</a></code> | <code>string</code> | [Write] honeycode:RegisterDomainForVerification. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.RegisterGroups">RegisterGroups</a></code> | <code>string</code> | [Write] honeycode:RegisterGroups. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.RejectTeamAssociation">RejectTeamAssociation</a></code> | <code>string</code> | [Write] honeycode:RejectTeamAssociation. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.RestartDomainVerification">RestartDomainVerification</a></code> | <code>string</code> | [Write] honeycode:RestartDomainVerification. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.StartTableDataImportJob">StartTableDataImportJob</a></code> | <code>string</code> | [Write] honeycode:StartTableDataImportJob. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] honeycode:TagResource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] honeycode:UntagResource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeActions.property.UpdateTeam">UpdateTeam</a></code> | <code>string</code> | [Write] honeycode:UpdateTeam. |

---

##### `actionGetScreenData`<sup>Required</sup> <a name="actionGetScreenData" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.actionGetScreenData"></a>

```typescript
public readonly actionGetScreenData: string;
```

- *Type:* string

[Read] honeycode:GetScreenData.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApproveTeamAssociation`<sup>Required</sup> <a name="ApproveTeamAssociation" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ApproveTeamAssociation"></a>

```typescript
public readonly ApproveTeamAssociation: string;
```

- *Type:* string

[Write] honeycode:ApproveTeamAssociation.

---

##### `BatchCreateTableRows`<sup>Required</sup> <a name="BatchCreateTableRows" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchCreateTableRows"></a>

```typescript
public readonly BatchCreateTableRows: string;
```

- *Type:* string

[Write] honeycode:BatchCreateTableRows.

---

##### `BatchDeleteTableRows`<sup>Required</sup> <a name="BatchDeleteTableRows" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchDeleteTableRows"></a>

```typescript
public readonly BatchDeleteTableRows: string;
```

- *Type:* string

[Write] honeycode:BatchDeleteTableRows.

---

##### `BatchUpdateTableRows`<sup>Required</sup> <a name="BatchUpdateTableRows" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchUpdateTableRows"></a>

```typescript
public readonly BatchUpdateTableRows: string;
```

- *Type:* string

[Write] honeycode:BatchUpdateTableRows.

---

##### `BatchUpsertTableRows`<sup>Required</sup> <a name="BatchUpsertTableRows" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.BatchUpsertTableRows"></a>

```typescript
public readonly BatchUpsertTableRows: string;
```

- *Type:* string

[Write] honeycode:BatchUpsertTableRows.

---

##### `CreateTeam`<sup>Required</sup> <a name="CreateTeam" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.CreateTeam"></a>

```typescript
public readonly CreateTeam: string;
```

- *Type:* string

[Write] honeycode:CreateTeam.

---

##### `CreateTenant`<sup>Required</sup> <a name="CreateTenant" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.CreateTenant"></a>

```typescript
public readonly CreateTenant: string;
```

- *Type:* string

[Write] honeycode:CreateTenant.

---

##### `DeleteDomains`<sup>Required</sup> <a name="DeleteDomains" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.DeleteDomains"></a>

```typescript
public readonly DeleteDomains: string;
```

- *Type:* string

[Write] honeycode:DeleteDomains.

---

##### `DeregisterGroups`<sup>Required</sup> <a name="DeregisterGroups" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.DeregisterGroups"></a>

```typescript
public readonly DeregisterGroups: string;
```

- *Type:* string

[Write] honeycode:DeregisterGroups.

---

##### `DescribeTableDataImportJob`<sup>Required</sup> <a name="DescribeTableDataImportJob" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.DescribeTableDataImportJob"></a>

```typescript
public readonly DescribeTableDataImportJob: string;
```

- *Type:* string

[Read] honeycode:DescribeTableDataImportJob.

---

##### `DescribeTeam`<sup>Required</sup> <a name="DescribeTeam" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.DescribeTeam"></a>

```typescript
public readonly DescribeTeam: string;
```

- *Type:* string

[Read] honeycode:DescribeTeam.

---

##### `InvokeScreenAutomation`<sup>Required</sup> <a name="InvokeScreenAutomation" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.InvokeScreenAutomation"></a>

```typescript
public readonly InvokeScreenAutomation: string;
```

- *Type:* string

[Write] honeycode:InvokeScreenAutomation.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] honeycode:ListDomains.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] honeycode:ListGroups.

---

##### `ListTableColumns`<sup>Required</sup> <a name="ListTableColumns" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTableColumns"></a>

```typescript
public readonly ListTableColumns: string;
```

- *Type:* string

[List] honeycode:ListTableColumns.

---

##### `ListTableRows`<sup>Required</sup> <a name="ListTableRows" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTableRows"></a>

```typescript
public readonly ListTableRows: string;
```

- *Type:* string

[List] honeycode:ListTableRows.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] honeycode:ListTables.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Tagging] honeycode:ListTagsForResource.

---

##### `ListTeamAssociations`<sup>Required</sup> <a name="ListTeamAssociations" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTeamAssociations"></a>

```typescript
public readonly ListTeamAssociations: string;
```

- *Type:* string

[List] honeycode:ListTeamAssociations.

---

##### `ListTenants`<sup>Required</sup> <a name="ListTenants" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.ListTenants"></a>

```typescript
public readonly ListTenants: string;
```

- *Type:* string

[List] honeycode:ListTenants.

---

##### `QueryTableRows`<sup>Required</sup> <a name="QueryTableRows" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.QueryTableRows"></a>

```typescript
public readonly QueryTableRows: string;
```

- *Type:* string

[Read] honeycode:QueryTableRows.

---

##### `RegisterDomainForVerification`<sup>Required</sup> <a name="RegisterDomainForVerification" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.RegisterDomainForVerification"></a>

```typescript
public readonly RegisterDomainForVerification: string;
```

- *Type:* string

[Write] honeycode:RegisterDomainForVerification.

---

##### `RegisterGroups`<sup>Required</sup> <a name="RegisterGroups" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.RegisterGroups"></a>

```typescript
public readonly RegisterGroups: string;
```

- *Type:* string

[Write] honeycode:RegisterGroups.

---

##### `RejectTeamAssociation`<sup>Required</sup> <a name="RejectTeamAssociation" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.RejectTeamAssociation"></a>

```typescript
public readonly RejectTeamAssociation: string;
```

- *Type:* string

[Write] honeycode:RejectTeamAssociation.

---

##### `RestartDomainVerification`<sup>Required</sup> <a name="RestartDomainVerification" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.RestartDomainVerification"></a>

```typescript
public readonly RestartDomainVerification: string;
```

- *Type:* string

[Write] honeycode:RestartDomainVerification.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTableDataImportJob`<sup>Required</sup> <a name="StartTableDataImportJob" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.StartTableDataImportJob"></a>

```typescript
public readonly StartTableDataImportJob: string;
```

- *Type:* string

[Write] honeycode:StartTableDataImportJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] honeycode:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] honeycode:UntagResource.

---

##### `UpdateTeam`<sup>Required</sup> <a name="UpdateTeam" id="@cdk_utils/iam.honeycode.HoneycodeActions.property.UpdateTeam"></a>

```typescript
public readonly UpdateTeam: string;
```

- *Type:* string

[Write] honeycode:UpdateTeam.

---

### HoneycodeResources <a name="HoneycodeResources" id="@cdk_utils/iam.honeycode.HoneycodeResources"></a>

ARN builders, validators, and parsers for honeycode resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.honeycode.HoneycodeResources.Initializer"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

new honeycode.HoneycodeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.isValidScreenArn">isValidScreenArn</a></code> | Validates whether a string is a valid ARN for the screen resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.isValidScreenAutomationArn">isValidScreenAutomationArn</a></code> | Validates whether a string is a valid ARN for the screen-automation resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.isValidTableArn">isValidTableArn</a></code> | Validates whether a string is a valid ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.isValidWorkbookArn">isValidWorkbookArn</a></code> | Validates whether a string is a valid ARN for the workbook resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.parseScreenArn">parseScreenArn</a></code> | Parses a screen ARN into its components. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.parseScreenAutomationArn">parseScreenAutomationArn</a></code> | Parses a screen-automation ARN into its components. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.parseTableArn">parseTableArn</a></code> | Parses a table ARN into its components. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.parseWorkbookArn">parseWorkbookArn</a></code> | Parses a workbook ARN into its components. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.screen">screen</a></code> | Builds an ARN for the screen resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.screenAutomation">screenAutomation</a></code> | Builds an ARN for the screen-automation resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.table">table</a></code> | Builds an ARN for the table resource. |
| <code><a href="#@cdk_utils/iam.honeycode.HoneycodeResources.workbook">workbook</a></code> | Builds an ARN for the workbook resource. |

---

##### `isValidScreenArn` <a name="isValidScreenArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidScreenArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.isValidScreenArn(arn: string)
```

Validates whether a string is a valid ARN for the screen resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidScreenArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScreenAutomationArn` <a name="isValidScreenAutomationArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidScreenAutomationArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.isValidScreenAutomationArn(arn: string)
```

Validates whether a string is a valid ARN for the screen-automation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidScreenAutomationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTableArn` <a name="isValidTableArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidTableArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.isValidTableArn(arn: string)
```

Validates whether a string is a valid ARN for the table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidTableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkbookArn` <a name="isValidWorkbookArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidWorkbookArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.isValidWorkbookArn(arn: string)
```

Validates whether a string is a valid ARN for the workbook resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.isValidWorkbookArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScreenArn` <a name="parseScreenArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseScreenArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.parseScreenArn(arn: string)
```

Parses a screen ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseScreenArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScreenAutomationArn` <a name="parseScreenAutomationArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseScreenAutomationArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.parseScreenAutomationArn(arn: string)
```

Parses a screen-automation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseScreenAutomationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTableArn` <a name="parseTableArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseTableArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.parseTableArn(arn: string)
```

Parses a table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkbookArn` <a name="parseWorkbookArn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseWorkbookArn"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.parseWorkbookArn(arn: string)
```

Parses a workbook ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.honeycode.HoneycodeResources.parseWorkbookArn.parameter.arn"></a>

- *Type:* string

---

##### `screen` <a name="screen" id="@cdk_utils/iam.honeycode.HoneycodeResources.screen"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.screen(props: HoneycodeScreenArnProps)
```

Builds an ARN for the screen resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.honeycode.HoneycodeResources.screen.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.honeycode.HoneycodeScreenArnProps">HoneycodeScreenArnProps</a>

---

##### `screenAutomation` <a name="screenAutomation" id="@cdk_utils/iam.honeycode.HoneycodeResources.screenAutomation"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.screenAutomation(props: HoneycodeScreenAutomationArnProps)
```

Builds an ARN for the screen-automation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.honeycode.HoneycodeResources.screenAutomation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.honeycode.HoneycodeScreenAutomationArnProps">HoneycodeScreenAutomationArnProps</a>

---

##### `table` <a name="table" id="@cdk_utils/iam.honeycode.HoneycodeResources.table"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.table(props: HoneycodeTableArnProps)
```

Builds an ARN for the table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.honeycode.HoneycodeResources.table.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.honeycode.HoneycodeTableArnProps">HoneycodeTableArnProps</a>

---

##### `workbook` <a name="workbook" id="@cdk_utils/iam.honeycode.HoneycodeResources.workbook"></a>

```typescript
import { honeycode } from '@cdk_utils/iam'

honeycode.HoneycodeResources.workbook(props: HoneycodeWorkbookArnProps)
```

Builds an ARN for the workbook resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.honeycode.HoneycodeResources.workbook.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.honeycode.HoneycodeWorkbookArnProps">HoneycodeWorkbookArnProps</a>

---




