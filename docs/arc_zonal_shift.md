# `arc_zonal_shift` Submodule <a name="`arc_zonal_shift` Submodule" id="@cdk_utils/iam.arc_zonal_shift"></a>


## Structs <a name="Structs" id="Structs"></a>

### ArcZonalShiftAlbArnComponents <a name="ArcZonalShiftAlbArnComponents" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents"></a>

Parsed components of a ALB ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

const arcZonalShiftAlbArnComponents: arc_zonal_shift.ArcZonalShiftAlbArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ArcZonalShiftAlbArnProps <a name="ArcZonalShiftAlbArnProps" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps"></a>

Properties for building a ALB ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

const arcZonalShiftAlbArnProps: arc_zonal_shift.ArcZonalShiftAlbArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ArcZonalShiftNlbArnComponents <a name="ArcZonalShiftNlbArnComponents" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents"></a>

Parsed components of a NLB ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

const arcZonalShiftNlbArnComponents: arc_zonal_shift.ArcZonalShiftNlbArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ArcZonalShiftNlbArnProps <a name="ArcZonalShiftNlbArnProps" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps"></a>

Properties for building a NLB ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

const arcZonalShiftNlbArnProps: arc_zonal_shift.ArcZonalShiftNlbArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ArcZonalShiftActions <a name="ArcZonalShiftActions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions"></a>

IAM action constants for the arc-zonal-shift service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

new arc_zonal_shift.ArcZonalShiftActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.actionGetAutoshiftObserverNotificationStatus">actionGetAutoshiftObserverNotificationStatus</a></code> | <code>string</code> | [Read] arc-zonal-shift:GetAutoshiftObserverNotificationStatus. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.actionGetManagedResource">actionGetManagedResource</a></code> | <code>string</code> | [Read] arc-zonal-shift:GetManagedResource. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.CancelPracticeRun">CancelPracticeRun</a></code> | <code>string</code> | [Write] arc-zonal-shift:CancelPracticeRun. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.CancelZonalShift">CancelZonalShift</a></code> | <code>string</code> | [Write] arc-zonal-shift:CancelZonalShift. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.CreatePracticeRunConfiguration">CreatePracticeRunConfiguration</a></code> | <code>string</code> | [Write] arc-zonal-shift:CreatePracticeRunConfiguration. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.DeletePracticeRunConfiguration">DeletePracticeRunConfiguration</a></code> | <code>string</code> | [Write] arc-zonal-shift:DeletePracticeRunConfiguration. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.ListAutoshifts">ListAutoshifts</a></code> | <code>string</code> | [List] arc-zonal-shift:ListAutoshifts. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.ListManagedResources">ListManagedResources</a></code> | <code>string</code> | [List] arc-zonal-shift:ListManagedResources. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.ListZonalShifts">ListZonalShifts</a></code> | <code>string</code> | [List] arc-zonal-shift:ListZonalShifts. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.StartPracticeRun">StartPracticeRun</a></code> | <code>string</code> | [Write] arc-zonal-shift:StartPracticeRun. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.StartZonalShift">StartZonalShift</a></code> | <code>string</code> | [Write] arc-zonal-shift:StartZonalShift. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdateAutoshiftObserverNotificationStatus">UpdateAutoshiftObserverNotificationStatus</a></code> | <code>string</code> | [Write] arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdatePracticeRunConfiguration">UpdatePracticeRunConfiguration</a></code> | <code>string</code> | [Write] arc-zonal-shift:UpdatePracticeRunConfiguration. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdateZonalAutoshiftConfiguration">UpdateZonalAutoshiftConfiguration</a></code> | <code>string</code> | [Write] arc-zonal-shift:UpdateZonalAutoshiftConfiguration. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdateZonalShift">UpdateZonalShift</a></code> | <code>string</code> | [Write] arc-zonal-shift:UpdateZonalShift. |

---

##### `actionGetAutoshiftObserverNotificationStatus`<sup>Required</sup> <a name="actionGetAutoshiftObserverNotificationStatus" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.actionGetAutoshiftObserverNotificationStatus"></a>

```typescript
public readonly actionGetAutoshiftObserverNotificationStatus: string;
```

- *Type:* string

[Read] arc-zonal-shift:GetAutoshiftObserverNotificationStatus.

---

##### `actionGetManagedResource`<sup>Required</sup> <a name="actionGetManagedResource" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.actionGetManagedResource"></a>

```typescript
public readonly actionGetManagedResource: string;
```

- *Type:* string

[Read] arc-zonal-shift:GetManagedResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelPracticeRun`<sup>Required</sup> <a name="CancelPracticeRun" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.CancelPracticeRun"></a>

```typescript
public readonly CancelPracticeRun: string;
```

- *Type:* string

[Write] arc-zonal-shift:CancelPracticeRun.

---

##### `CancelZonalShift`<sup>Required</sup> <a name="CancelZonalShift" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.CancelZonalShift"></a>

```typescript
public readonly CancelZonalShift: string;
```

- *Type:* string

[Write] arc-zonal-shift:CancelZonalShift.

---

##### `CreatePracticeRunConfiguration`<sup>Required</sup> <a name="CreatePracticeRunConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.CreatePracticeRunConfiguration"></a>

```typescript
public readonly CreatePracticeRunConfiguration: string;
```

- *Type:* string

[Write] arc-zonal-shift:CreatePracticeRunConfiguration.

---

##### `DeletePracticeRunConfiguration`<sup>Required</sup> <a name="DeletePracticeRunConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.DeletePracticeRunConfiguration"></a>

```typescript
public readonly DeletePracticeRunConfiguration: string;
```

- *Type:* string

[Write] arc-zonal-shift:DeletePracticeRunConfiguration.

---

##### `ListAutoshifts`<sup>Required</sup> <a name="ListAutoshifts" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.ListAutoshifts"></a>

```typescript
public readonly ListAutoshifts: string;
```

- *Type:* string

[List] arc-zonal-shift:ListAutoshifts.

---

##### `ListManagedResources`<sup>Required</sup> <a name="ListManagedResources" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.ListManagedResources"></a>

```typescript
public readonly ListManagedResources: string;
```

- *Type:* string

[List] arc-zonal-shift:ListManagedResources.

---

##### `ListZonalShifts`<sup>Required</sup> <a name="ListZonalShifts" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.ListZonalShifts"></a>

```typescript
public readonly ListZonalShifts: string;
```

- *Type:* string

[List] arc-zonal-shift:ListZonalShifts.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPracticeRun`<sup>Required</sup> <a name="StartPracticeRun" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.StartPracticeRun"></a>

```typescript
public readonly StartPracticeRun: string;
```

- *Type:* string

[Write] arc-zonal-shift:StartPracticeRun.

---

##### `StartZonalShift`<sup>Required</sup> <a name="StartZonalShift" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.StartZonalShift"></a>

```typescript
public readonly StartZonalShift: string;
```

- *Type:* string

[Write] arc-zonal-shift:StartZonalShift.

---

##### `UpdateAutoshiftObserverNotificationStatus`<sup>Required</sup> <a name="UpdateAutoshiftObserverNotificationStatus" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdateAutoshiftObserverNotificationStatus"></a>

```typescript
public readonly UpdateAutoshiftObserverNotificationStatus: string;
```

- *Type:* string

[Write] arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus.

---

##### `UpdatePracticeRunConfiguration`<sup>Required</sup> <a name="UpdatePracticeRunConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdatePracticeRunConfiguration"></a>

```typescript
public readonly UpdatePracticeRunConfiguration: string;
```

- *Type:* string

[Write] arc-zonal-shift:UpdatePracticeRunConfiguration.

---

##### `UpdateZonalAutoshiftConfiguration`<sup>Required</sup> <a name="UpdateZonalAutoshiftConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdateZonalAutoshiftConfiguration"></a>

```typescript
public readonly UpdateZonalAutoshiftConfiguration: string;
```

- *Type:* string

[Write] arc-zonal-shift:UpdateZonalAutoshiftConfiguration.

---

##### `UpdateZonalShift`<sup>Required</sup> <a name="UpdateZonalShift" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftActions.property.UpdateZonalShift"></a>

```typescript
public readonly UpdateZonalShift: string;
```

- *Type:* string

[Write] arc-zonal-shift:UpdateZonalShift.

---

### ArcZonalShiftConditions <a name="ArcZonalShiftConditions" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions"></a>

Condition key constants and builders for arc-zonal-shift.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

new arc_zonal_shift.ArcZonalShiftConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.resourceIdentifier">resourceIdentifier</a></code> | Generates a condition block for `arc-zonal-shift:ResourceIdentifier`. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |

---

##### `resourceIdentifier` <a name="resourceIdentifier" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.resourceIdentifier"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftConditions.resourceIdentifier(value: string)
```

Generates a condition block for `arc-zonal-shift:ResourceIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.resourceIdentifier.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.resourceTag"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.actionGetManagedResourceConditionKeys">actionGetManagedResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetManagedResource action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.CancelPracticeRunConditionKeys">CancelPracticeRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelPracticeRun action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.CancelZonalShiftConditionKeys">CancelZonalShiftConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelZonalShift action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.CreatePracticeRunConfigurationConditionKeys">CreatePracticeRunConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePracticeRunConfiguration action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.DeletePracticeRunConfigurationConditionKeys">DeletePracticeRunConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePracticeRunConfiguration action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.RESOURCE_IDENTIFIER">RESOURCE_IDENTIFIER</a></code> | <code>string</code> | Condition key: arc-zonal-shift:ResourceIdentifier (String). |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: elasticloadbalancing:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.StartPracticeRunConditionKeys">StartPracticeRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartPracticeRun action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.StartZonalShiftConditionKeys">StartZonalShiftConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartZonalShift action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.UpdatePracticeRunConfigurationConditionKeys">UpdatePracticeRunConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePracticeRunConfiguration action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.UpdateZonalAutoshiftConfigurationConditionKeys">UpdateZonalAutoshiftConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateZonalAutoshiftConfiguration action. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.UpdateZonalShiftConditionKeys">UpdateZonalShiftConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateZonalShift action. |

---

##### `actionGetManagedResourceConditionKeys`<sup>Required</sup> <a name="actionGetManagedResourceConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.actionGetManagedResourceConditionKeys"></a>

```typescript
public readonly actionGetManagedResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetManagedResource action.

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `CancelPracticeRunConditionKeys`<sup>Required</sup> <a name="CancelPracticeRunConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.CancelPracticeRunConditionKeys"></a>

```typescript
public readonly CancelPracticeRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelPracticeRun action.

---

##### `CancelZonalShiftConditionKeys`<sup>Required</sup> <a name="CancelZonalShiftConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.CancelZonalShiftConditionKeys"></a>

```typescript
public readonly CancelZonalShiftConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelZonalShift action.

---

##### `CreatePracticeRunConfigurationConditionKeys`<sup>Required</sup> <a name="CreatePracticeRunConfigurationConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.CreatePracticeRunConfigurationConditionKeys"></a>

```typescript
public readonly CreatePracticeRunConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePracticeRunConfiguration action.

---

##### `DeletePracticeRunConfigurationConditionKeys`<sup>Required</sup> <a name="DeletePracticeRunConfigurationConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.DeletePracticeRunConfigurationConditionKeys"></a>

```typescript
public readonly DeletePracticeRunConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePracticeRunConfiguration action.

---

##### `RESOURCE_IDENTIFIER`<sup>Required</sup> <a name="RESOURCE_IDENTIFIER" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.RESOURCE_IDENTIFIER"></a>

```typescript
public readonly RESOURCE_IDENTIFIER: string;
```

- *Type:* string

Condition key: arc-zonal-shift:ResourceIdentifier (String).

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: elasticloadbalancing:ResourceTag/${TagKey} (String).

---

##### `StartPracticeRunConditionKeys`<sup>Required</sup> <a name="StartPracticeRunConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.StartPracticeRunConditionKeys"></a>

```typescript
public readonly StartPracticeRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartPracticeRun action.

---

##### `StartZonalShiftConditionKeys`<sup>Required</sup> <a name="StartZonalShiftConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.StartZonalShiftConditionKeys"></a>

```typescript
public readonly StartZonalShiftConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartZonalShift action.

---

##### `UpdatePracticeRunConfigurationConditionKeys`<sup>Required</sup> <a name="UpdatePracticeRunConfigurationConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.UpdatePracticeRunConfigurationConditionKeys"></a>

```typescript
public readonly UpdatePracticeRunConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePracticeRunConfiguration action.

---

##### `UpdateZonalAutoshiftConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateZonalAutoshiftConfigurationConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.UpdateZonalAutoshiftConfigurationConditionKeys"></a>

```typescript
public readonly UpdateZonalAutoshiftConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateZonalAutoshiftConfiguration action.

---

##### `UpdateZonalShiftConditionKeys`<sup>Required</sup> <a name="UpdateZonalShiftConditionKeys" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftConditions.property.UpdateZonalShiftConditionKeys"></a>

```typescript
public readonly UpdateZonalShiftConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateZonalShift action.

---

### ArcZonalShiftOperations <a name="ArcZonalShiftOperations" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations"></a>

API operation to required IAM actions mapping for arc-zonal-shift.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

new arc_zonal_shift.ArcZonalShiftOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.CancelPracticeRun">CancelPracticeRun</a></code> | <code>string[]</code> | IAM actions required for the CancelPracticeRun API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.CancelZonalShift">CancelZonalShift</a></code> | <code>string[]</code> | IAM actions required for the CancelZonalShift API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.CreatePracticeRunConfiguration">CreatePracticeRunConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreatePracticeRunConfiguration API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.DeletePracticeRunConfiguration">DeletePracticeRunConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeletePracticeRunConfiguration API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.ListAutoshifts">ListAutoshifts</a></code> | <code>string[]</code> | IAM actions required for the ListAutoshifts API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.ListManagedResources">ListManagedResources</a></code> | <code>string[]</code> | IAM actions required for the ListManagedResources API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.ListZonalShifts">ListZonalShifts</a></code> | <code>string[]</code> | IAM actions required for the ListZonalShifts API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.opGetAutoshiftObserverNotificationStatus">opGetAutoshiftObserverNotificationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetAutoshiftObserverNotificationStatus API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.opGetManagedResource">opGetManagedResource</a></code> | <code>string[]</code> | IAM actions required for the GetManagedResource API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.StartPracticeRun">StartPracticeRun</a></code> | <code>string[]</code> | IAM actions required for the StartPracticeRun API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.StartZonalShift">StartZonalShift</a></code> | <code>string[]</code> | IAM actions required for the StartZonalShift API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdateAutoshiftObserverNotificationStatus">UpdateAutoshiftObserverNotificationStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutoshiftObserverNotificationStatus API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdatePracticeRunConfiguration">UpdatePracticeRunConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdatePracticeRunConfiguration API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdateZonalAutoshiftConfiguration">UpdateZonalAutoshiftConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateZonalAutoshiftConfiguration API call. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdateZonalShift">UpdateZonalShift</a></code> | <code>string[]</code> | IAM actions required for the UpdateZonalShift API call. |

---

##### `CancelPracticeRun`<sup>Required</sup> <a name="CancelPracticeRun" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.CancelPracticeRun"></a>

```typescript
public readonly CancelPracticeRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelPracticeRun API call.

---

##### `CancelZonalShift`<sup>Required</sup> <a name="CancelZonalShift" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.CancelZonalShift"></a>

```typescript
public readonly CancelZonalShift: string[];
```

- *Type:* string[]

IAM actions required for the CancelZonalShift API call.

---

##### `CreatePracticeRunConfiguration`<sup>Required</sup> <a name="CreatePracticeRunConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.CreatePracticeRunConfiguration"></a>

```typescript
public readonly CreatePracticeRunConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreatePracticeRunConfiguration API call.

---

##### `DeletePracticeRunConfiguration`<sup>Required</sup> <a name="DeletePracticeRunConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.DeletePracticeRunConfiguration"></a>

```typescript
public readonly DeletePracticeRunConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeletePracticeRunConfiguration API call.

---

##### `ListAutoshifts`<sup>Required</sup> <a name="ListAutoshifts" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.ListAutoshifts"></a>

```typescript
public readonly ListAutoshifts: string[];
```

- *Type:* string[]

IAM actions required for the ListAutoshifts API call.

---

##### `ListManagedResources`<sup>Required</sup> <a name="ListManagedResources" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.ListManagedResources"></a>

```typescript
public readonly ListManagedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedResources API call.

---

##### `ListZonalShifts`<sup>Required</sup> <a name="ListZonalShifts" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.ListZonalShifts"></a>

```typescript
public readonly ListZonalShifts: string[];
```

- *Type:* string[]

IAM actions required for the ListZonalShifts API call.

---

##### `opGetAutoshiftObserverNotificationStatus`<sup>Required</sup> <a name="opGetAutoshiftObserverNotificationStatus" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.opGetAutoshiftObserverNotificationStatus"></a>

```typescript
public readonly opGetAutoshiftObserverNotificationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetAutoshiftObserverNotificationStatus API call.

---

##### `opGetManagedResource`<sup>Required</sup> <a name="opGetManagedResource" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.opGetManagedResource"></a>

```typescript
public readonly opGetManagedResource: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedResource API call.

---

##### `StartPracticeRun`<sup>Required</sup> <a name="StartPracticeRun" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.StartPracticeRun"></a>

```typescript
public readonly StartPracticeRun: string[];
```

- *Type:* string[]

IAM actions required for the StartPracticeRun API call.

---

##### `StartZonalShift`<sup>Required</sup> <a name="StartZonalShift" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.StartZonalShift"></a>

```typescript
public readonly StartZonalShift: string[];
```

- *Type:* string[]

IAM actions required for the StartZonalShift API call.

---

##### `UpdateAutoshiftObserverNotificationStatus`<sup>Required</sup> <a name="UpdateAutoshiftObserverNotificationStatus" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdateAutoshiftObserverNotificationStatus"></a>

```typescript
public readonly UpdateAutoshiftObserverNotificationStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutoshiftObserverNotificationStatus API call.

---

##### `UpdatePracticeRunConfiguration`<sup>Required</sup> <a name="UpdatePracticeRunConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdatePracticeRunConfiguration"></a>

```typescript
public readonly UpdatePracticeRunConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePracticeRunConfiguration API call.

---

##### `UpdateZonalAutoshiftConfiguration`<sup>Required</sup> <a name="UpdateZonalAutoshiftConfiguration" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdateZonalAutoshiftConfiguration"></a>

```typescript
public readonly UpdateZonalAutoshiftConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateZonalAutoshiftConfiguration API call.

---

##### `UpdateZonalShift`<sup>Required</sup> <a name="UpdateZonalShift" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftOperations.property.UpdateZonalShift"></a>

```typescript
public readonly UpdateZonalShift: string[];
```

- *Type:* string[]

IAM actions required for the UpdateZonalShift API call.

---

### ArcZonalShiftResources <a name="ArcZonalShiftResources" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources"></a>

ARN builders, validators, and parsers for arc-zonal-shift resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.Initializer"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

new arc_zonal_shift.ArcZonalShiftResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.alb">alb</a></code> | Builds an ARN for the ALB resource. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.isValidAlbArn">isValidAlbArn</a></code> | Validates whether a string is a valid ARN for the ALB resource. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.isValidNlbArn">isValidNlbArn</a></code> | Validates whether a string is a valid ARN for the NLB resource. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.nlb">nlb</a></code> | Builds an ARN for the NLB resource. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.parseAlbArn">parseAlbArn</a></code> | Parses a ALB ARN into its components. |
| <code><a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.parseNlbArn">parseNlbArn</a></code> | Parses a NLB ARN into its components. |

---

##### `alb` <a name="alb" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.alb"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftResources.alb(props: ArcZonalShiftAlbArnProps)
```

Builds an ARN for the ALB resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.alb.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftAlbArnProps">ArcZonalShiftAlbArnProps</a>

---

##### `isValidAlbArn` <a name="isValidAlbArn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.isValidAlbArn"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftResources.isValidAlbArn(arn: string)
```

Validates whether a string is a valid ARN for the ALB resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.isValidAlbArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNlbArn` <a name="isValidNlbArn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.isValidNlbArn"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftResources.isValidNlbArn(arn: string)
```

Validates whether a string is a valid ARN for the NLB resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.isValidNlbArn.parameter.arn"></a>

- *Type:* string

---

##### `nlb` <a name="nlb" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.nlb"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftResources.nlb(props: ArcZonalShiftNlbArnProps)
```

Builds an ARN for the NLB resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.nlb.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftNlbArnProps">ArcZonalShiftNlbArnProps</a>

---

##### `parseAlbArn` <a name="parseAlbArn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.parseAlbArn"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftResources.parseAlbArn(arn: string)
```

Parses a ALB ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.parseAlbArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNlbArn` <a name="parseNlbArn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.parseNlbArn"></a>

```typescript
import { arc_zonal_shift } from '@cdk_utils/iam'

arc_zonal_shift.ArcZonalShiftResources.parseNlbArn(arn: string)
```

Parses a NLB ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.arc_zonal_shift.ArcZonalShiftResources.parseNlbArn.parameter.arn"></a>

- *Type:* string

---




