# `agentaccess_mcp` Submodule <a name="`agentaccess_mcp` Submodule" id="@cdk_utils/iam.agentaccess_mcp"></a>



## Classes <a name="Classes" id="Classes"></a>

### AgentaccessMcpActions <a name="AgentaccessMcpActions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions"></a>

IAM action constants for the agentaccess-mcp service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.Initializer"></a>

```typescript
import { agentaccess_mcp } from '@cdk_utils/iam'

new agentaccess_mcp.AgentaccessMcpActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.actionGetScreenshot">actionGetScreenshot</a></code> | <code>string</code> | [Read] agentaccess-mcp:GetScreenshot. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.CallForwardedTool">CallForwardedTool</a></code> | <code>string</code> | [Write] agentaccess-mcp:CallForwardedTool. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.CheckConnectionStatus">CheckConnectionStatus</a></code> | <code>string</code> | [Read] agentaccess-mcp:CheckConnectionStatus. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.DoubleClick">DoubleClick</a></code> | <code>string</code> | [Write] agentaccess-mcp:DoubleClick. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.HoldKey">HoldKey</a></code> | <code>string</code> | [Write] agentaccess-mcp:HoldKey. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.InvokeMcp">InvokeMcp</a></code> | <code>string</code> | [Write] agentaccess-mcp:InvokeMcp. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.KeyPress">KeyPress</a></code> | <code>string</code> | [Write] agentaccess-mcp:KeyPress. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftClick">LeftClick</a></code> | <code>string</code> | [Write] agentaccess-mcp:LeftClick. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftClickDrag">LeftClickDrag</a></code> | <code>string</code> | [Write] agentaccess-mcp:LeftClickDrag. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftMouseDown">LeftMouseDown</a></code> | <code>string</code> | [Write] agentaccess-mcp:LeftMouseDown. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftMouseUp">LeftMouseUp</a></code> | <code>string</code> | [Write] agentaccess-mcp:LeftMouseUp. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.MiddleClick">MiddleClick</a></code> | <code>string</code> | [Write] agentaccess-mcp:MiddleClick. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.MovePointer">MovePointer</a></code> | <code>string</code> | [Write] agentaccess-mcp:MovePointer. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.RightClick">RightClick</a></code> | <code>string</code> | [Write] agentaccess-mcp:RightClick. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.Scroll">Scroll</a></code> | <code>string</code> | [Write] agentaccess-mcp:Scroll. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.TripleClick">TripleClick</a></code> | <code>string</code> | [Write] agentaccess-mcp:TripleClick. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.TypeText">TypeText</a></code> | <code>string</code> | [Write] agentaccess-mcp:TypeText. |

---

##### `actionGetScreenshot`<sup>Required</sup> <a name="actionGetScreenshot" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.actionGetScreenshot"></a>

```typescript
public readonly actionGetScreenshot: string;
```

- *Type:* string

[Read] agentaccess-mcp:GetScreenshot.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CallForwardedTool`<sup>Required</sup> <a name="CallForwardedTool" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.CallForwardedTool"></a>

```typescript
public readonly CallForwardedTool: string;
```

- *Type:* string

[Write] agentaccess-mcp:CallForwardedTool.

---

##### `CheckConnectionStatus`<sup>Required</sup> <a name="CheckConnectionStatus" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.CheckConnectionStatus"></a>

```typescript
public readonly CheckConnectionStatus: string;
```

- *Type:* string

[Read] agentaccess-mcp:CheckConnectionStatus.

---

##### `DoubleClick`<sup>Required</sup> <a name="DoubleClick" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.DoubleClick"></a>

```typescript
public readonly DoubleClick: string;
```

- *Type:* string

[Write] agentaccess-mcp:DoubleClick.

---

##### `HoldKey`<sup>Required</sup> <a name="HoldKey" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.HoldKey"></a>

```typescript
public readonly HoldKey: string;
```

- *Type:* string

[Write] agentaccess-mcp:HoldKey.

---

##### `InvokeMcp`<sup>Required</sup> <a name="InvokeMcp" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.InvokeMcp"></a>

```typescript
public readonly InvokeMcp: string;
```

- *Type:* string

[Write] agentaccess-mcp:InvokeMcp.

---

##### `KeyPress`<sup>Required</sup> <a name="KeyPress" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.KeyPress"></a>

```typescript
public readonly KeyPress: string;
```

- *Type:* string

[Write] agentaccess-mcp:KeyPress.

---

##### `LeftClick`<sup>Required</sup> <a name="LeftClick" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftClick"></a>

```typescript
public readonly LeftClick: string;
```

- *Type:* string

[Write] agentaccess-mcp:LeftClick.

---

##### `LeftClickDrag`<sup>Required</sup> <a name="LeftClickDrag" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftClickDrag"></a>

```typescript
public readonly LeftClickDrag: string;
```

- *Type:* string

[Write] agentaccess-mcp:LeftClickDrag.

---

##### `LeftMouseDown`<sup>Required</sup> <a name="LeftMouseDown" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftMouseDown"></a>

```typescript
public readonly LeftMouseDown: string;
```

- *Type:* string

[Write] agentaccess-mcp:LeftMouseDown.

---

##### `LeftMouseUp`<sup>Required</sup> <a name="LeftMouseUp" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.LeftMouseUp"></a>

```typescript
public readonly LeftMouseUp: string;
```

- *Type:* string

[Write] agentaccess-mcp:LeftMouseUp.

---

##### `MiddleClick`<sup>Required</sup> <a name="MiddleClick" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.MiddleClick"></a>

```typescript
public readonly MiddleClick: string;
```

- *Type:* string

[Write] agentaccess-mcp:MiddleClick.

---

##### `MovePointer`<sup>Required</sup> <a name="MovePointer" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.MovePointer"></a>

```typescript
public readonly MovePointer: string;
```

- *Type:* string

[Write] agentaccess-mcp:MovePointer.

---

##### `RightClick`<sup>Required</sup> <a name="RightClick" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.RightClick"></a>

```typescript
public readonly RightClick: string;
```

- *Type:* string

[Write] agentaccess-mcp:RightClick.

---

##### `Scroll`<sup>Required</sup> <a name="Scroll" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.Scroll"></a>

```typescript
public readonly Scroll: string;
```

- *Type:* string

[Write] agentaccess-mcp:Scroll.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TripleClick`<sup>Required</sup> <a name="TripleClick" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.TripleClick"></a>

```typescript
public readonly TripleClick: string;
```

- *Type:* string

[Write] agentaccess-mcp:TripleClick.

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpActions.property.TypeText"></a>

```typescript
public readonly TypeText: string;
```

- *Type:* string

[Write] agentaccess-mcp:TypeText.

---

### AgentaccessMcpConditions <a name="AgentaccessMcpConditions" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions"></a>

Condition key constants and builders for agentaccess-mcp.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.Initializer"></a>

```typescript
import { agentaccess_mcp } from '@cdk_utils/iam'

new agentaccess_mcp.AgentaccessMcpConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.stackARN">stackARN</a></code> | Generates a condition block for `agentaccess-mcp:StackArn`. |

---

##### `stackARN` <a name="stackARN" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.stackARN"></a>

```typescript
import { agentaccess_mcp } from '@cdk_utils/iam'

agentaccess_mcp.AgentaccessMcpConditions.stackARN(value: string)
```

Generates a condition block for `agentaccess-mcp:StackArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.stackARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.actionGetScreenshotConditionKeys">actionGetScreenshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetScreenshot action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.CallForwardedToolConditionKeys">CallForwardedToolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CallForwardedTool action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.CheckConnectionStatusConditionKeys">CheckConnectionStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CheckConnectionStatus action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.DoubleClickConditionKeys">DoubleClickConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DoubleClick action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.HoldKeyConditionKeys">HoldKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the HoldKey action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.InvokeMcpConditionKeys">InvokeMcpConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeMcp action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.KeyPressConditionKeys">KeyPressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the KeyPress action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftClickConditionKeys">LeftClickConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the LeftClick action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftClickDragConditionKeys">LeftClickDragConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the LeftClickDrag action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftMouseDownConditionKeys">LeftMouseDownConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the LeftMouseDown action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftMouseUpConditionKeys">LeftMouseUpConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the LeftMouseUp action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.MiddleClickConditionKeys">MiddleClickConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MiddleClick action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.MovePointerConditionKeys">MovePointerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MovePointer action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.RightClickConditionKeys">RightClickConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RightClick action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.ScrollConditionKeys">ScrollConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Scroll action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.STACK_ARN">STACK_ARN</a></code> | <code>string</code> | Condition key: agentaccess-mcp:StackArn (ARN). |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.TripleClickConditionKeys">TripleClickConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TripleClick action. |
| <code><a href="#@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.TypeTextConditionKeys">TypeTextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TypeText action. |

---

##### `actionGetScreenshotConditionKeys`<sup>Required</sup> <a name="actionGetScreenshotConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.actionGetScreenshotConditionKeys"></a>

```typescript
public readonly actionGetScreenshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetScreenshot action.

---

##### `CallForwardedToolConditionKeys`<sup>Required</sup> <a name="CallForwardedToolConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.CallForwardedToolConditionKeys"></a>

```typescript
public readonly CallForwardedToolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CallForwardedTool action.

---

##### `CheckConnectionStatusConditionKeys`<sup>Required</sup> <a name="CheckConnectionStatusConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.CheckConnectionStatusConditionKeys"></a>

```typescript
public readonly CheckConnectionStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CheckConnectionStatus action.

---

##### `DoubleClickConditionKeys`<sup>Required</sup> <a name="DoubleClickConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.DoubleClickConditionKeys"></a>

```typescript
public readonly DoubleClickConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DoubleClick action.

---

##### `HoldKeyConditionKeys`<sup>Required</sup> <a name="HoldKeyConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.HoldKeyConditionKeys"></a>

```typescript
public readonly HoldKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the HoldKey action.

---

##### `InvokeMcpConditionKeys`<sup>Required</sup> <a name="InvokeMcpConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.InvokeMcpConditionKeys"></a>

```typescript
public readonly InvokeMcpConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeMcp action.

---

##### `KeyPressConditionKeys`<sup>Required</sup> <a name="KeyPressConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.KeyPressConditionKeys"></a>

```typescript
public readonly KeyPressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the KeyPress action.

---

##### `LeftClickConditionKeys`<sup>Required</sup> <a name="LeftClickConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftClickConditionKeys"></a>

```typescript
public readonly LeftClickConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the LeftClick action.

---

##### `LeftClickDragConditionKeys`<sup>Required</sup> <a name="LeftClickDragConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftClickDragConditionKeys"></a>

```typescript
public readonly LeftClickDragConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the LeftClickDrag action.

---

##### `LeftMouseDownConditionKeys`<sup>Required</sup> <a name="LeftMouseDownConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftMouseDownConditionKeys"></a>

```typescript
public readonly LeftMouseDownConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the LeftMouseDown action.

---

##### `LeftMouseUpConditionKeys`<sup>Required</sup> <a name="LeftMouseUpConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.LeftMouseUpConditionKeys"></a>

```typescript
public readonly LeftMouseUpConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the LeftMouseUp action.

---

##### `MiddleClickConditionKeys`<sup>Required</sup> <a name="MiddleClickConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.MiddleClickConditionKeys"></a>

```typescript
public readonly MiddleClickConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MiddleClick action.

---

##### `MovePointerConditionKeys`<sup>Required</sup> <a name="MovePointerConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.MovePointerConditionKeys"></a>

```typescript
public readonly MovePointerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MovePointer action.

---

##### `RightClickConditionKeys`<sup>Required</sup> <a name="RightClickConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.RightClickConditionKeys"></a>

```typescript
public readonly RightClickConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RightClick action.

---

##### `ScrollConditionKeys`<sup>Required</sup> <a name="ScrollConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.ScrollConditionKeys"></a>

```typescript
public readonly ScrollConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Scroll action.

---

##### `STACK_ARN`<sup>Required</sup> <a name="STACK_ARN" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.STACK_ARN"></a>

```typescript
public readonly STACK_ARN: string;
```

- *Type:* string

Condition key: agentaccess-mcp:StackArn (ARN).

---

##### `TripleClickConditionKeys`<sup>Required</sup> <a name="TripleClickConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.TripleClickConditionKeys"></a>

```typescript
public readonly TripleClickConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TripleClick action.

---

##### `TypeTextConditionKeys`<sup>Required</sup> <a name="TypeTextConditionKeys" id="@cdk_utils/iam.agentaccess_mcp.AgentaccessMcpConditions.property.TypeTextConditionKeys"></a>

```typescript
public readonly TypeTextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TypeText action.

---


