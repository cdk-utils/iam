# `qapps` Submodule <a name="`qapps` Submodule" id="@cdk_utils/iam.qapps"></a>


## Structs <a name="Structs" id="Structs"></a>

### QappsApplicationArnComponents <a name="QappsApplicationArnComponents" id="@cdk_utils/iam.qapps.QappsApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qapps.QappsApplicationArnComponents.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

const qappsApplicationArnComponents: qapps.QappsApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qapps.QappsApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QappsApplicationArnProps <a name="QappsApplicationArnProps" id="@cdk_utils/iam.qapps.QappsApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qapps.QappsApplicationArnProps.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

const qappsApplicationArnProps: qapps.QappsApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qapps.QappsApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qapps.QappsApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qapps.QappsApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qapps.QappsApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qapps.QappsApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QappsQappArnComponents <a name="QappsQappArnComponents" id="@cdk_utils/iam.qapps.QappsQappArnComponents"></a>

Parsed components of a qapp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qapps.QappsQappArnComponents.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

const qappsQappArnComponents: qapps.QappsQappArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qapps.QappsQappArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.qapps.QappsQappArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qapps.QappsQappArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qapps.QappsQappArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qapps.QappsQappArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QappsQappArnProps <a name="QappsQappArnProps" id="@cdk_utils/iam.qapps.QappsQappArnProps"></a>

Properties for building a qapp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qapps.QappsQappArnProps.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

const qappsQappArnProps: qapps.QappsQappArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.qapps.QappsQappArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qapps.QappsQappArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qapps.QappsQappArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qapps.QappsQappArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qapps.QappsQappArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### QappsQappSessionArnComponents <a name="QappsQappSessionArnComponents" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents"></a>

Parsed components of a qapp-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

const qappsQappSessionArnComponents: qapps.QappsQappSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.qapps.QappsQappSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### QappsQappSessionArnProps <a name="QappsQappSessionArnProps" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps"></a>

Properties for building a qapp-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

const qappsQappSessionArnProps: qapps.QappsQappSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qapps.QappsQappSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### QappsActions <a name="QappsActions" id="@cdk_utils/iam.qapps.QappsActions"></a>

IAM action constants for the qapps service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qapps.QappsActions.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

new qapps.QappsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.actionGetLibraryItem">actionGetLibraryItem</a></code> | <code>string</code> | [Read] qapps:GetLibraryItem. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.actionGetQApp">actionGetQApp</a></code> | <code>string</code> | [Read] qapps:GetQApp. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.actionGetQAppSession">actionGetQAppSession</a></code> | <code>string</code> | [Read] qapps:GetQAppSession. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.actionGetQAppSessionMetadata">actionGetQAppSessionMetadata</a></code> | <code>string</code> | [Read] qapps:GetQAppSessionMetadata. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AssociateLibraryItemReview">AssociateLibraryItemReview</a></code> | <code>string</code> | [Write] qapps:AssociateLibraryItemReview. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.AssociateQAppWithUser">AssociateQAppWithUser</a></code> | <code>string</code> | [Write] qapps:AssociateQAppWithUser. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.BatchCreateCategory">BatchCreateCategory</a></code> | <code>string</code> | [Write] qapps:BatchCreateCategory. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.BatchDeleteCategory">BatchDeleteCategory</a></code> | <code>string</code> | [Write] qapps:BatchDeleteCategory. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.BatchUpdateCategory">BatchUpdateCategory</a></code> | <code>string</code> | [Write] qapps:BatchUpdateCategory. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.CopyQApp">CopyQApp</a></code> | <code>string</code> | [Write] qapps:CopyQApp. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.CreateLibraryItem">CreateLibraryItem</a></code> | <code>string</code> | [Write] qapps:CreateLibraryItem. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.CreateLibraryItemReview">CreateLibraryItemReview</a></code> | <code>string</code> | [Write] qapps:CreateLibraryItemReview. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.CreateQApp">CreateQApp</a></code> | <code>string</code> | [Write] qapps:CreateQApp. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.CreateSubscriptionToken">CreateSubscriptionToken</a></code> | <code>string</code> | [Write] qapps:CreateSubscriptionToken. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.DeleteLibraryItem">DeleteLibraryItem</a></code> | <code>string</code> | [Write] qapps:DeleteLibraryItem. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.DeleteQApp">DeleteQApp</a></code> | <code>string</code> | [Write] qapps:DeleteQApp. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.DescribeQAppPermissions">DescribeQAppPermissions</a></code> | <code>string</code> | [Read] qapps:DescribeQAppPermissions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.DisassociateLibraryItemReview">DisassociateLibraryItemReview</a></code> | <code>string</code> | [Write] qapps:DisassociateLibraryItemReview. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.DisassociateQAppFromUser">DisassociateQAppFromUser</a></code> | <code>string</code> | [Write] qapps:DisassociateQAppFromUser. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ExportQAppSessionData">ExportQAppSessionData</a></code> | <code>string</code> | [Write] qapps:ExportQAppSessionData. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ImportDocument">ImportDocument</a></code> | <code>string</code> | [Write] qapps:ImportDocument. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ListCategories">ListCategories</a></code> | <code>string</code> | [List] qapps:ListCategories. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ListLibraryItems">ListLibraryItems</a></code> | <code>string</code> | [List] qapps:ListLibraryItems. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ListQApps">ListQApps</a></code> | <code>string</code> | [List] qapps:ListQApps. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ListQAppSessionData">ListQAppSessionData</a></code> | <code>string</code> | [Read] qapps:ListQAppSessionData. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] qapps:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.PredictProblemStatementFromConversation">PredictProblemStatementFromConversation</a></code> | <code>string</code> | [Write] qapps:PredictProblemStatementFromConversation. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.PredictQApp">PredictQApp</a></code> | <code>string</code> | [Write] qapps:PredictQApp. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.PredictQAppFromProblemStatement">PredictQAppFromProblemStatement</a></code> | <code>string</code> | [Write] qapps:PredictQAppFromProblemStatement. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.StartQAppSession">StartQAppSession</a></code> | <code>string</code> | [Write] qapps:StartQAppSession. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.StopQAppSession">StopQAppSession</a></code> | <code>string</code> | [Write] qapps:StopQAppSession. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] qapps:TagResource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] qapps:UntagResource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UpdateLibraryItem">UpdateLibraryItem</a></code> | <code>string</code> | [Write] qapps:UpdateLibraryItem. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UpdateLibraryItemMetadata">UpdateLibraryItemMetadata</a></code> | <code>string</code> | [Write] qapps:UpdateLibraryItemMetadata. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UpdateQApp">UpdateQApp</a></code> | <code>string</code> | [Write] qapps:UpdateQApp. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UpdateQAppPermissions">UpdateQAppPermissions</a></code> | <code>string</code> | [Write] qapps:UpdateQAppPermissions. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UpdateQAppSession">UpdateQAppSession</a></code> | <code>string</code> | [Write] qapps:UpdateQAppSession. |
| <code><a href="#@cdk_utils/iam.qapps.QappsActions.property.UpdateQAppSessionMetadata">UpdateQAppSessionMetadata</a></code> | <code>string</code> | [Write] qapps:UpdateQAppSessionMetadata. |

---

##### `actionGetLibraryItem`<sup>Required</sup> <a name="actionGetLibraryItem" id="@cdk_utils/iam.qapps.QappsActions.property.actionGetLibraryItem"></a>

```typescript
public readonly actionGetLibraryItem: string;
```

- *Type:* string

[Read] qapps:GetLibraryItem.

---

##### `actionGetQApp`<sup>Required</sup> <a name="actionGetQApp" id="@cdk_utils/iam.qapps.QappsActions.property.actionGetQApp"></a>

```typescript
public readonly actionGetQApp: string;
```

- *Type:* string

[Read] qapps:GetQApp.

---

##### `actionGetQAppSession`<sup>Required</sup> <a name="actionGetQAppSession" id="@cdk_utils/iam.qapps.QappsActions.property.actionGetQAppSession"></a>

```typescript
public readonly actionGetQAppSession: string;
```

- *Type:* string

[Read] qapps:GetQAppSession.

---

##### `actionGetQAppSessionMetadata`<sup>Required</sup> <a name="actionGetQAppSessionMetadata" id="@cdk_utils/iam.qapps.QappsActions.property.actionGetQAppSessionMetadata"></a>

```typescript
public readonly actionGetQAppSessionMetadata: string;
```

- *Type:* string

[Read] qapps:GetQAppSessionMetadata.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.qapps.QappsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.qapps.QappsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.qapps.QappsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.qapps.QappsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.qapps.QappsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateLibraryItemReview`<sup>Required</sup> <a name="AssociateLibraryItemReview" id="@cdk_utils/iam.qapps.QappsActions.property.AssociateLibraryItemReview"></a>

```typescript
public readonly AssociateLibraryItemReview: string;
```

- *Type:* string

[Write] qapps:AssociateLibraryItemReview.

---

##### `AssociateQAppWithUser`<sup>Required</sup> <a name="AssociateQAppWithUser" id="@cdk_utils/iam.qapps.QappsActions.property.AssociateQAppWithUser"></a>

```typescript
public readonly AssociateQAppWithUser: string;
```

- *Type:* string

[Write] qapps:AssociateQAppWithUser.

---

##### `BatchCreateCategory`<sup>Required</sup> <a name="BatchCreateCategory" id="@cdk_utils/iam.qapps.QappsActions.property.BatchCreateCategory"></a>

```typescript
public readonly BatchCreateCategory: string;
```

- *Type:* string

[Write] qapps:BatchCreateCategory.

---

##### `BatchDeleteCategory`<sup>Required</sup> <a name="BatchDeleteCategory" id="@cdk_utils/iam.qapps.QappsActions.property.BatchDeleteCategory"></a>

```typescript
public readonly BatchDeleteCategory: string;
```

- *Type:* string

[Write] qapps:BatchDeleteCategory.

---

##### `BatchUpdateCategory`<sup>Required</sup> <a name="BatchUpdateCategory" id="@cdk_utils/iam.qapps.QappsActions.property.BatchUpdateCategory"></a>

```typescript
public readonly BatchUpdateCategory: string;
```

- *Type:* string

[Write] qapps:BatchUpdateCategory.

---

##### `CopyQApp`<sup>Required</sup> <a name="CopyQApp" id="@cdk_utils/iam.qapps.QappsActions.property.CopyQApp"></a>

```typescript
public readonly CopyQApp: string;
```

- *Type:* string

[Write] qapps:CopyQApp.

---

##### `CreateLibraryItem`<sup>Required</sup> <a name="CreateLibraryItem" id="@cdk_utils/iam.qapps.QappsActions.property.CreateLibraryItem"></a>

```typescript
public readonly CreateLibraryItem: string;
```

- *Type:* string

[Write] qapps:CreateLibraryItem.

---

##### `CreateLibraryItemReview`<sup>Required</sup> <a name="CreateLibraryItemReview" id="@cdk_utils/iam.qapps.QappsActions.property.CreateLibraryItemReview"></a>

```typescript
public readonly CreateLibraryItemReview: string;
```

- *Type:* string

[Write] qapps:CreateLibraryItemReview.

---

##### `CreateQApp`<sup>Required</sup> <a name="CreateQApp" id="@cdk_utils/iam.qapps.QappsActions.property.CreateQApp"></a>

```typescript
public readonly CreateQApp: string;
```

- *Type:* string

[Write] qapps:CreateQApp.

---

##### `CreateSubscriptionToken`<sup>Required</sup> <a name="CreateSubscriptionToken" id="@cdk_utils/iam.qapps.QappsActions.property.CreateSubscriptionToken"></a>

```typescript
public readonly CreateSubscriptionToken: string;
```

- *Type:* string

[Write] qapps:CreateSubscriptionToken.

---

##### `DeleteLibraryItem`<sup>Required</sup> <a name="DeleteLibraryItem" id="@cdk_utils/iam.qapps.QappsActions.property.DeleteLibraryItem"></a>

```typescript
public readonly DeleteLibraryItem: string;
```

- *Type:* string

[Write] qapps:DeleteLibraryItem.

---

##### `DeleteQApp`<sup>Required</sup> <a name="DeleteQApp" id="@cdk_utils/iam.qapps.QappsActions.property.DeleteQApp"></a>

```typescript
public readonly DeleteQApp: string;
```

- *Type:* string

[Write] qapps:DeleteQApp.

---

##### `DescribeQAppPermissions`<sup>Required</sup> <a name="DescribeQAppPermissions" id="@cdk_utils/iam.qapps.QappsActions.property.DescribeQAppPermissions"></a>

```typescript
public readonly DescribeQAppPermissions: string;
```

- *Type:* string

[Read] qapps:DescribeQAppPermissions.

---

##### `DisassociateLibraryItemReview`<sup>Required</sup> <a name="DisassociateLibraryItemReview" id="@cdk_utils/iam.qapps.QappsActions.property.DisassociateLibraryItemReview"></a>

```typescript
public readonly DisassociateLibraryItemReview: string;
```

- *Type:* string

[Write] qapps:DisassociateLibraryItemReview.

---

##### `DisassociateQAppFromUser`<sup>Required</sup> <a name="DisassociateQAppFromUser" id="@cdk_utils/iam.qapps.QappsActions.property.DisassociateQAppFromUser"></a>

```typescript
public readonly DisassociateQAppFromUser: string;
```

- *Type:* string

[Write] qapps:DisassociateQAppFromUser.

---

##### `ExportQAppSessionData`<sup>Required</sup> <a name="ExportQAppSessionData" id="@cdk_utils/iam.qapps.QappsActions.property.ExportQAppSessionData"></a>

```typescript
public readonly ExportQAppSessionData: string;
```

- *Type:* string

[Write] qapps:ExportQAppSessionData.

---

##### `ImportDocument`<sup>Required</sup> <a name="ImportDocument" id="@cdk_utils/iam.qapps.QappsActions.property.ImportDocument"></a>

```typescript
public readonly ImportDocument: string;
```

- *Type:* string

[Write] qapps:ImportDocument.

---

##### `ListCategories`<sup>Required</sup> <a name="ListCategories" id="@cdk_utils/iam.qapps.QappsActions.property.ListCategories"></a>

```typescript
public readonly ListCategories: string;
```

- *Type:* string

[List] qapps:ListCategories.

---

##### `ListLibraryItems`<sup>Required</sup> <a name="ListLibraryItems" id="@cdk_utils/iam.qapps.QappsActions.property.ListLibraryItems"></a>

```typescript
public readonly ListLibraryItems: string;
```

- *Type:* string

[List] qapps:ListLibraryItems.

---

##### `ListQApps`<sup>Required</sup> <a name="ListQApps" id="@cdk_utils/iam.qapps.QappsActions.property.ListQApps"></a>

```typescript
public readonly ListQApps: string;
```

- *Type:* string

[List] qapps:ListQApps.

---

##### `ListQAppSessionData`<sup>Required</sup> <a name="ListQAppSessionData" id="@cdk_utils/iam.qapps.QappsActions.property.ListQAppSessionData"></a>

```typescript
public readonly ListQAppSessionData: string;
```

- *Type:* string

[Read] qapps:ListQAppSessionData.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.qapps.QappsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] qapps:ListTagsForResource.

---

##### `PredictProblemStatementFromConversation`<sup>Required</sup> <a name="PredictProblemStatementFromConversation" id="@cdk_utils/iam.qapps.QappsActions.property.PredictProblemStatementFromConversation"></a>

```typescript
public readonly PredictProblemStatementFromConversation: string;
```

- *Type:* string

[Write] qapps:PredictProblemStatementFromConversation.

---

##### `PredictQApp`<sup>Required</sup> <a name="PredictQApp" id="@cdk_utils/iam.qapps.QappsActions.property.PredictQApp"></a>

```typescript
public readonly PredictQApp: string;
```

- *Type:* string

[Write] qapps:PredictQApp.

---

##### `PredictQAppFromProblemStatement`<sup>Required</sup> <a name="PredictQAppFromProblemStatement" id="@cdk_utils/iam.qapps.QappsActions.property.PredictQAppFromProblemStatement"></a>

```typescript
public readonly PredictQAppFromProblemStatement: string;
```

- *Type:* string

[Write] qapps:PredictQAppFromProblemStatement.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.qapps.QappsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartQAppSession`<sup>Required</sup> <a name="StartQAppSession" id="@cdk_utils/iam.qapps.QappsActions.property.StartQAppSession"></a>

```typescript
public readonly StartQAppSession: string;
```

- *Type:* string

[Write] qapps:StartQAppSession.

---

##### `StopQAppSession`<sup>Required</sup> <a name="StopQAppSession" id="@cdk_utils/iam.qapps.QappsActions.property.StopQAppSession"></a>

```typescript
public readonly StopQAppSession: string;
```

- *Type:* string

[Write] qapps:StopQAppSession.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.qapps.QappsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] qapps:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.qapps.QappsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] qapps:UntagResource.

---

##### `UpdateLibraryItem`<sup>Required</sup> <a name="UpdateLibraryItem" id="@cdk_utils/iam.qapps.QappsActions.property.UpdateLibraryItem"></a>

```typescript
public readonly UpdateLibraryItem: string;
```

- *Type:* string

[Write] qapps:UpdateLibraryItem.

---

##### `UpdateLibraryItemMetadata`<sup>Required</sup> <a name="UpdateLibraryItemMetadata" id="@cdk_utils/iam.qapps.QappsActions.property.UpdateLibraryItemMetadata"></a>

```typescript
public readonly UpdateLibraryItemMetadata: string;
```

- *Type:* string

[Write] qapps:UpdateLibraryItemMetadata.

---

##### `UpdateQApp`<sup>Required</sup> <a name="UpdateQApp" id="@cdk_utils/iam.qapps.QappsActions.property.UpdateQApp"></a>

```typescript
public readonly UpdateQApp: string;
```

- *Type:* string

[Write] qapps:UpdateQApp.

---

##### `UpdateQAppPermissions`<sup>Required</sup> <a name="UpdateQAppPermissions" id="@cdk_utils/iam.qapps.QappsActions.property.UpdateQAppPermissions"></a>

```typescript
public readonly UpdateQAppPermissions: string;
```

- *Type:* string

[Write] qapps:UpdateQAppPermissions.

---

##### `UpdateQAppSession`<sup>Required</sup> <a name="UpdateQAppSession" id="@cdk_utils/iam.qapps.QappsActions.property.UpdateQAppSession"></a>

```typescript
public readonly UpdateQAppSession: string;
```

- *Type:* string

[Write] qapps:UpdateQAppSession.

---

##### `UpdateQAppSessionMetadata`<sup>Required</sup> <a name="UpdateQAppSessionMetadata" id="@cdk_utils/iam.qapps.QappsActions.property.UpdateQAppSessionMetadata"></a>

```typescript
public readonly UpdateQAppSessionMetadata: string;
```

- *Type:* string

[Write] qapps:UpdateQAppSessionMetadata.

---

### QappsConditions <a name="QappsConditions" id="@cdk_utils/iam.qapps.QappsConditions"></a>

Condition key constants and builders for qapps.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qapps.QappsConditions.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

new qapps.QappsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.appIsPublished">appIsPublished</a></code> | Generates a condition block for `qapps:AppIsPublished`. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.sessionIsShared">sessionIsShared</a></code> | Generates a condition block for `qapps:SessionIsShared`. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.userIsAppOwner">userIsAppOwner</a></code> | Generates a condition block for `qapps:UserIsAppOwner`. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.userIsSessionModerator">userIsSessionModerator</a></code> | Generates a condition block for `qapps:UserIsSessionModerator`. |

---

##### `appIsPublished` <a name="appIsPublished" id="@cdk_utils/iam.qapps.QappsConditions.appIsPublished"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.appIsPublished(value: string)
```

Generates a condition block for `qapps:AppIsPublished`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qapps.QappsConditions.appIsPublished.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.qapps.QappsConditions.requestTag"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qapps.QappsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.qapps.QappsConditions.resourceTag"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qapps.QappsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sessionIsShared` <a name="sessionIsShared" id="@cdk_utils/iam.qapps.QappsConditions.sessionIsShared"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.sessionIsShared(value: string)
```

Generates a condition block for `qapps:SessionIsShared`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qapps.QappsConditions.sessionIsShared.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.qapps.QappsConditions.tagKeys"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.qapps.QappsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userIsAppOwner` <a name="userIsAppOwner" id="@cdk_utils/iam.qapps.QappsConditions.userIsAppOwner"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.userIsAppOwner(value: string)
```

Generates a condition block for `qapps:UserIsAppOwner`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qapps.QappsConditions.userIsAppOwner.parameter.value"></a>

- *Type:* string

---

##### `userIsSessionModerator` <a name="userIsSessionModerator" id="@cdk_utils/iam.qapps.QappsConditions.userIsSessionModerator"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsConditions.userIsSessionModerator(value: string)
```

Generates a condition block for `qapps:UserIsSessionModerator`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qapps.QappsConditions.userIsSessionModerator.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.actionGetLibraryItemConditionKeys">actionGetLibraryItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLibraryItem action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.actionGetQAppConditionKeys">actionGetQAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQApp action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.actionGetQAppSessionConditionKeys">actionGetQAppSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQAppSession action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.APP_IS_PUBLISHED">APP_IS_PUBLISHED</a></code> | <code>string</code> | Condition key: qapps:AppIsPublished (String). |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.AssociateLibraryItemReviewConditionKeys">AssociateLibraryItemReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateLibraryItemReview action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.AssociateQAppWithUserConditionKeys">AssociateQAppWithUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateQAppWithUser action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.CopyQAppConditionKeys">CopyQAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyQApp action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.CreateLibraryItemConditionKeys">CreateLibraryItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLibraryItem action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.CreateLibraryItemReviewConditionKeys">CreateLibraryItemReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLibraryItemReview action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.CreateQAppConditionKeys">CreateQAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQApp action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.DeleteLibraryItemConditionKeys">DeleteLibraryItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLibraryItem action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.DeleteQAppConditionKeys">DeleteQAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteQApp action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.DescribeQAppPermissionsConditionKeys">DescribeQAppPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeQAppPermissions action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.DisassociateLibraryItemReviewConditionKeys">DisassociateLibraryItemReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateLibraryItemReview action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.DisassociateQAppFromUserConditionKeys">DisassociateQAppFromUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateQAppFromUser action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.ImportDocumentConditionKeys">ImportDocumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportDocument action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.SESSION_IS_SHARED">SESSION_IS_SHARED</a></code> | <code>string</code> | Condition key: qapps:SessionIsShared (String). |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.StartQAppSessionConditionKeys">StartQAppSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartQAppSession action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.StopQAppSessionConditionKeys">StopQAppSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopQAppSession action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.UpdateLibraryItemConditionKeys">UpdateLibraryItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLibraryItem action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.UpdateLibraryItemMetadataConditionKeys">UpdateLibraryItemMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLibraryItemMetadata action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.UpdateQAppConditionKeys">UpdateQAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQApp action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.UpdateQAppPermissionsConditionKeys">UpdateQAppPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQAppPermissions action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.UpdateQAppSessionConditionKeys">UpdateQAppSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQAppSession action. |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.USER_IS_APP_OWNER">USER_IS_APP_OWNER</a></code> | <code>string</code> | Condition key: qapps:UserIsAppOwner (String). |
| <code><a href="#@cdk_utils/iam.qapps.QappsConditions.property.USER_IS_SESSION_MODERATOR">USER_IS_SESSION_MODERATOR</a></code> | <code>string</code> | Condition key: qapps:UserIsSessionModerator (String). |

---

##### `actionGetLibraryItemConditionKeys`<sup>Required</sup> <a name="actionGetLibraryItemConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.actionGetLibraryItemConditionKeys"></a>

```typescript
public readonly actionGetLibraryItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLibraryItem action.

---

##### `actionGetQAppConditionKeys`<sup>Required</sup> <a name="actionGetQAppConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.actionGetQAppConditionKeys"></a>

```typescript
public readonly actionGetQAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQApp action.

---

##### `actionGetQAppSessionConditionKeys`<sup>Required</sup> <a name="actionGetQAppSessionConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.actionGetQAppSessionConditionKeys"></a>

```typescript
public readonly actionGetQAppSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQAppSession action.

---

##### `APP_IS_PUBLISHED`<sup>Required</sup> <a name="APP_IS_PUBLISHED" id="@cdk_utils/iam.qapps.QappsConditions.property.APP_IS_PUBLISHED"></a>

```typescript
public readonly APP_IS_PUBLISHED: string;
```

- *Type:* string

Condition key: qapps:AppIsPublished (String).

---

##### `AssociateLibraryItemReviewConditionKeys`<sup>Required</sup> <a name="AssociateLibraryItemReviewConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.AssociateLibraryItemReviewConditionKeys"></a>

```typescript
public readonly AssociateLibraryItemReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateLibraryItemReview action.

---

##### `AssociateQAppWithUserConditionKeys`<sup>Required</sup> <a name="AssociateQAppWithUserConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.AssociateQAppWithUserConditionKeys"></a>

```typescript
public readonly AssociateQAppWithUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateQAppWithUser action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.qapps.QappsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.qapps.QappsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.qapps.QappsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CopyQAppConditionKeys`<sup>Required</sup> <a name="CopyQAppConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.CopyQAppConditionKeys"></a>

```typescript
public readonly CopyQAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyQApp action.

---

##### `CreateLibraryItemConditionKeys`<sup>Required</sup> <a name="CreateLibraryItemConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.CreateLibraryItemConditionKeys"></a>

```typescript
public readonly CreateLibraryItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLibraryItem action.

---

##### `CreateLibraryItemReviewConditionKeys`<sup>Required</sup> <a name="CreateLibraryItemReviewConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.CreateLibraryItemReviewConditionKeys"></a>

```typescript
public readonly CreateLibraryItemReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLibraryItemReview action.

---

##### `CreateQAppConditionKeys`<sup>Required</sup> <a name="CreateQAppConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.CreateQAppConditionKeys"></a>

```typescript
public readonly CreateQAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQApp action.

---

##### `DeleteLibraryItemConditionKeys`<sup>Required</sup> <a name="DeleteLibraryItemConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.DeleteLibraryItemConditionKeys"></a>

```typescript
public readonly DeleteLibraryItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLibraryItem action.

---

##### `DeleteQAppConditionKeys`<sup>Required</sup> <a name="DeleteQAppConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.DeleteQAppConditionKeys"></a>

```typescript
public readonly DeleteQAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteQApp action.

---

##### `DescribeQAppPermissionsConditionKeys`<sup>Required</sup> <a name="DescribeQAppPermissionsConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.DescribeQAppPermissionsConditionKeys"></a>

```typescript
public readonly DescribeQAppPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeQAppPermissions action.

---

##### `DisassociateLibraryItemReviewConditionKeys`<sup>Required</sup> <a name="DisassociateLibraryItemReviewConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.DisassociateLibraryItemReviewConditionKeys"></a>

```typescript
public readonly DisassociateLibraryItemReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateLibraryItemReview action.

---

##### `DisassociateQAppFromUserConditionKeys`<sup>Required</sup> <a name="DisassociateQAppFromUserConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.DisassociateQAppFromUserConditionKeys"></a>

```typescript
public readonly DisassociateQAppFromUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateQAppFromUser action.

---

##### `ImportDocumentConditionKeys`<sup>Required</sup> <a name="ImportDocumentConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.ImportDocumentConditionKeys"></a>

```typescript
public readonly ImportDocumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportDocument action.

---

##### `SESSION_IS_SHARED`<sup>Required</sup> <a name="SESSION_IS_SHARED" id="@cdk_utils/iam.qapps.QappsConditions.property.SESSION_IS_SHARED"></a>

```typescript
public readonly SESSION_IS_SHARED: string;
```

- *Type:* string

Condition key: qapps:SessionIsShared (String).

---

##### `StartQAppSessionConditionKeys`<sup>Required</sup> <a name="StartQAppSessionConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.StartQAppSessionConditionKeys"></a>

```typescript
public readonly StartQAppSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartQAppSession action.

---

##### `StopQAppSessionConditionKeys`<sup>Required</sup> <a name="StopQAppSessionConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.StopQAppSessionConditionKeys"></a>

```typescript
public readonly StopQAppSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopQAppSession action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateLibraryItemConditionKeys`<sup>Required</sup> <a name="UpdateLibraryItemConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.UpdateLibraryItemConditionKeys"></a>

```typescript
public readonly UpdateLibraryItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLibraryItem action.

---

##### `UpdateLibraryItemMetadataConditionKeys`<sup>Required</sup> <a name="UpdateLibraryItemMetadataConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.UpdateLibraryItemMetadataConditionKeys"></a>

```typescript
public readonly UpdateLibraryItemMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLibraryItemMetadata action.

---

##### `UpdateQAppConditionKeys`<sup>Required</sup> <a name="UpdateQAppConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.UpdateQAppConditionKeys"></a>

```typescript
public readonly UpdateQAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQApp action.

---

##### `UpdateQAppPermissionsConditionKeys`<sup>Required</sup> <a name="UpdateQAppPermissionsConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.UpdateQAppPermissionsConditionKeys"></a>

```typescript
public readonly UpdateQAppPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQAppPermissions action.

---

##### `UpdateQAppSessionConditionKeys`<sup>Required</sup> <a name="UpdateQAppSessionConditionKeys" id="@cdk_utils/iam.qapps.QappsConditions.property.UpdateQAppSessionConditionKeys"></a>

```typescript
public readonly UpdateQAppSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQAppSession action.

---

##### `USER_IS_APP_OWNER`<sup>Required</sup> <a name="USER_IS_APP_OWNER" id="@cdk_utils/iam.qapps.QappsConditions.property.USER_IS_APP_OWNER"></a>

```typescript
public readonly USER_IS_APP_OWNER: string;
```

- *Type:* string

Condition key: qapps:UserIsAppOwner (String).

---

##### `USER_IS_SESSION_MODERATOR`<sup>Required</sup> <a name="USER_IS_SESSION_MODERATOR" id="@cdk_utils/iam.qapps.QappsConditions.property.USER_IS_SESSION_MODERATOR"></a>

```typescript
public readonly USER_IS_SESSION_MODERATOR: string;
```

- *Type:* string

Condition key: qapps:UserIsSessionModerator (String).

---

### QappsOperations <a name="QappsOperations" id="@cdk_utils/iam.qapps.QappsOperations"></a>

API operation to required IAM actions mapping for qapps.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qapps.QappsOperations.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

new qapps.QappsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.AssociateLibraryItemReview">AssociateLibraryItemReview</a></code> | <code>string[]</code> | IAM actions required for the AssociateLibraryItemReview API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.AssociateQAppWithUser">AssociateQAppWithUser</a></code> | <code>string[]</code> | IAM actions required for the AssociateQAppWithUser API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.BatchCreateCategory">BatchCreateCategory</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateCategory API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.BatchDeleteCategory">BatchDeleteCategory</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteCategory API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.BatchUpdateCategory">BatchUpdateCategory</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateCategory API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.CreateLibraryItem">CreateLibraryItem</a></code> | <code>string[]</code> | IAM actions required for the CreateLibraryItem API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.CreatePresignedUrl">CreatePresignedUrl</a></code> | <code>string[]</code> | IAM actions required for the CreatePresignedUrl API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.CreateQApp">CreateQApp</a></code> | <code>string[]</code> | IAM actions required for the CreateQApp API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.DeleteLibraryItem">DeleteLibraryItem</a></code> | <code>string[]</code> | IAM actions required for the DeleteLibraryItem API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.DeleteQApp">DeleteQApp</a></code> | <code>string[]</code> | IAM actions required for the DeleteQApp API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.DescribeQAppPermissions">DescribeQAppPermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeQAppPermissions API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.DisassociateLibraryItemReview">DisassociateLibraryItemReview</a></code> | <code>string[]</code> | IAM actions required for the DisassociateLibraryItemReview API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.DisassociateQAppFromUser">DisassociateQAppFromUser</a></code> | <code>string[]</code> | IAM actions required for the DisassociateQAppFromUser API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ExportQAppSessionData">ExportQAppSessionData</a></code> | <code>string[]</code> | IAM actions required for the ExportQAppSessionData API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ImportDocument">ImportDocument</a></code> | <code>string[]</code> | IAM actions required for the ImportDocument API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ListCategories">ListCategories</a></code> | <code>string[]</code> | IAM actions required for the ListCategories API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ListLibraryItems">ListLibraryItems</a></code> | <code>string[]</code> | IAM actions required for the ListLibraryItems API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ListQApps">ListQApps</a></code> | <code>string[]</code> | IAM actions required for the ListQApps API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ListQAppSessionData">ListQAppSessionData</a></code> | <code>string[]</code> | IAM actions required for the ListQAppSessionData API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.opGetLibraryItem">opGetLibraryItem</a></code> | <code>string[]</code> | IAM actions required for the GetLibraryItem API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.opGetQApp">opGetQApp</a></code> | <code>string[]</code> | IAM actions required for the GetQApp API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.opGetQAppSession">opGetQAppSession</a></code> | <code>string[]</code> | IAM actions required for the GetQAppSession API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.opGetQAppSessionMetadata">opGetQAppSessionMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetQAppSessionMetadata API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.PredictQApp">PredictQApp</a></code> | <code>string[]</code> | IAM actions required for the PredictQApp API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.StartQAppSession">StartQAppSession</a></code> | <code>string[]</code> | IAM actions required for the StartQAppSession API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.StopQAppSession">StopQAppSession</a></code> | <code>string[]</code> | IAM actions required for the StopQAppSession API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UpdateLibraryItem">UpdateLibraryItem</a></code> | <code>string[]</code> | IAM actions required for the UpdateLibraryItem API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UpdateLibraryItemMetadata">UpdateLibraryItemMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateLibraryItemMetadata API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UpdateQApp">UpdateQApp</a></code> | <code>string[]</code> | IAM actions required for the UpdateQApp API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UpdateQAppPermissions">UpdateQAppPermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateQAppPermissions API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UpdateQAppSession">UpdateQAppSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateQAppSession API call. |
| <code><a href="#@cdk_utils/iam.qapps.QappsOperations.property.UpdateQAppSessionMetadata">UpdateQAppSessionMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateQAppSessionMetadata API call. |

---

##### `AssociateLibraryItemReview`<sup>Required</sup> <a name="AssociateLibraryItemReview" id="@cdk_utils/iam.qapps.QappsOperations.property.AssociateLibraryItemReview"></a>

```typescript
public readonly AssociateLibraryItemReview: string[];
```

- *Type:* string[]

IAM actions required for the AssociateLibraryItemReview API call.

---

##### `AssociateQAppWithUser`<sup>Required</sup> <a name="AssociateQAppWithUser" id="@cdk_utils/iam.qapps.QappsOperations.property.AssociateQAppWithUser"></a>

```typescript
public readonly AssociateQAppWithUser: string[];
```

- *Type:* string[]

IAM actions required for the AssociateQAppWithUser API call.

---

##### `BatchCreateCategory`<sup>Required</sup> <a name="BatchCreateCategory" id="@cdk_utils/iam.qapps.QappsOperations.property.BatchCreateCategory"></a>

```typescript
public readonly BatchCreateCategory: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateCategory API call.

---

##### `BatchDeleteCategory`<sup>Required</sup> <a name="BatchDeleteCategory" id="@cdk_utils/iam.qapps.QappsOperations.property.BatchDeleteCategory"></a>

```typescript
public readonly BatchDeleteCategory: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteCategory API call.

---

##### `BatchUpdateCategory`<sup>Required</sup> <a name="BatchUpdateCategory" id="@cdk_utils/iam.qapps.QappsOperations.property.BatchUpdateCategory"></a>

```typescript
public readonly BatchUpdateCategory: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateCategory API call.

---

##### `CreateLibraryItem`<sup>Required</sup> <a name="CreateLibraryItem" id="@cdk_utils/iam.qapps.QappsOperations.property.CreateLibraryItem"></a>

```typescript
public readonly CreateLibraryItem: string[];
```

- *Type:* string[]

IAM actions required for the CreateLibraryItem API call.

---

##### `CreatePresignedUrl`<sup>Required</sup> <a name="CreatePresignedUrl" id="@cdk_utils/iam.qapps.QappsOperations.property.CreatePresignedUrl"></a>

```typescript
public readonly CreatePresignedUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreatePresignedUrl API call.

---

##### `CreateQApp`<sup>Required</sup> <a name="CreateQApp" id="@cdk_utils/iam.qapps.QappsOperations.property.CreateQApp"></a>

```typescript
public readonly CreateQApp: string[];
```

- *Type:* string[]

IAM actions required for the CreateQApp API call.

---

##### `DeleteLibraryItem`<sup>Required</sup> <a name="DeleteLibraryItem" id="@cdk_utils/iam.qapps.QappsOperations.property.DeleteLibraryItem"></a>

```typescript
public readonly DeleteLibraryItem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLibraryItem API call.

---

##### `DeleteQApp`<sup>Required</sup> <a name="DeleteQApp" id="@cdk_utils/iam.qapps.QappsOperations.property.DeleteQApp"></a>

```typescript
public readonly DeleteQApp: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQApp API call.

---

##### `DescribeQAppPermissions`<sup>Required</sup> <a name="DescribeQAppPermissions" id="@cdk_utils/iam.qapps.QappsOperations.property.DescribeQAppPermissions"></a>

```typescript
public readonly DescribeQAppPermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQAppPermissions API call.

---

##### `DisassociateLibraryItemReview`<sup>Required</sup> <a name="DisassociateLibraryItemReview" id="@cdk_utils/iam.qapps.QappsOperations.property.DisassociateLibraryItemReview"></a>

```typescript
public readonly DisassociateLibraryItemReview: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateLibraryItemReview API call.

---

##### `DisassociateQAppFromUser`<sup>Required</sup> <a name="DisassociateQAppFromUser" id="@cdk_utils/iam.qapps.QappsOperations.property.DisassociateQAppFromUser"></a>

```typescript
public readonly DisassociateQAppFromUser: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateQAppFromUser API call.

---

##### `ExportQAppSessionData`<sup>Required</sup> <a name="ExportQAppSessionData" id="@cdk_utils/iam.qapps.QappsOperations.property.ExportQAppSessionData"></a>

```typescript
public readonly ExportQAppSessionData: string[];
```

- *Type:* string[]

IAM actions required for the ExportQAppSessionData API call.

---

##### `ImportDocument`<sup>Required</sup> <a name="ImportDocument" id="@cdk_utils/iam.qapps.QappsOperations.property.ImportDocument"></a>

```typescript
public readonly ImportDocument: string[];
```

- *Type:* string[]

IAM actions required for the ImportDocument API call.

---

##### `ListCategories`<sup>Required</sup> <a name="ListCategories" id="@cdk_utils/iam.qapps.QappsOperations.property.ListCategories"></a>

```typescript
public readonly ListCategories: string[];
```

- *Type:* string[]

IAM actions required for the ListCategories API call.

---

##### `ListLibraryItems`<sup>Required</sup> <a name="ListLibraryItems" id="@cdk_utils/iam.qapps.QappsOperations.property.ListLibraryItems"></a>

```typescript
public readonly ListLibraryItems: string[];
```

- *Type:* string[]

IAM actions required for the ListLibraryItems API call.

---

##### `ListQApps`<sup>Required</sup> <a name="ListQApps" id="@cdk_utils/iam.qapps.QappsOperations.property.ListQApps"></a>

```typescript
public readonly ListQApps: string[];
```

- *Type:* string[]

IAM actions required for the ListQApps API call.

---

##### `ListQAppSessionData`<sup>Required</sup> <a name="ListQAppSessionData" id="@cdk_utils/iam.qapps.QappsOperations.property.ListQAppSessionData"></a>

```typescript
public readonly ListQAppSessionData: string[];
```

- *Type:* string[]

IAM actions required for the ListQAppSessionData API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.qapps.QappsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetLibraryItem`<sup>Required</sup> <a name="opGetLibraryItem" id="@cdk_utils/iam.qapps.QappsOperations.property.opGetLibraryItem"></a>

```typescript
public readonly opGetLibraryItem: string[];
```

- *Type:* string[]

IAM actions required for the GetLibraryItem API call.

---

##### `opGetQApp`<sup>Required</sup> <a name="opGetQApp" id="@cdk_utils/iam.qapps.QappsOperations.property.opGetQApp"></a>

```typescript
public readonly opGetQApp: string[];
```

- *Type:* string[]

IAM actions required for the GetQApp API call.

---

##### `opGetQAppSession`<sup>Required</sup> <a name="opGetQAppSession" id="@cdk_utils/iam.qapps.QappsOperations.property.opGetQAppSession"></a>

```typescript
public readonly opGetQAppSession: string[];
```

- *Type:* string[]

IAM actions required for the GetQAppSession API call.

---

##### `opGetQAppSessionMetadata`<sup>Required</sup> <a name="opGetQAppSessionMetadata" id="@cdk_utils/iam.qapps.QappsOperations.property.opGetQAppSessionMetadata"></a>

```typescript
public readonly opGetQAppSessionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetQAppSessionMetadata API call.

---

##### `PredictQApp`<sup>Required</sup> <a name="PredictQApp" id="@cdk_utils/iam.qapps.QappsOperations.property.PredictQApp"></a>

```typescript
public readonly PredictQApp: string[];
```

- *Type:* string[]

IAM actions required for the PredictQApp API call.

---

##### `StartQAppSession`<sup>Required</sup> <a name="StartQAppSession" id="@cdk_utils/iam.qapps.QappsOperations.property.StartQAppSession"></a>

```typescript
public readonly StartQAppSession: string[];
```

- *Type:* string[]

IAM actions required for the StartQAppSession API call.

---

##### `StopQAppSession`<sup>Required</sup> <a name="StopQAppSession" id="@cdk_utils/iam.qapps.QappsOperations.property.StopQAppSession"></a>

```typescript
public readonly StopQAppSession: string[];
```

- *Type:* string[]

IAM actions required for the StopQAppSession API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.qapps.QappsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.qapps.QappsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLibraryItem`<sup>Required</sup> <a name="UpdateLibraryItem" id="@cdk_utils/iam.qapps.QappsOperations.property.UpdateLibraryItem"></a>

```typescript
public readonly UpdateLibraryItem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLibraryItem API call.

---

##### `UpdateLibraryItemMetadata`<sup>Required</sup> <a name="UpdateLibraryItemMetadata" id="@cdk_utils/iam.qapps.QappsOperations.property.UpdateLibraryItemMetadata"></a>

```typescript
public readonly UpdateLibraryItemMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLibraryItemMetadata API call.

---

##### `UpdateQApp`<sup>Required</sup> <a name="UpdateQApp" id="@cdk_utils/iam.qapps.QappsOperations.property.UpdateQApp"></a>

```typescript
public readonly UpdateQApp: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQApp API call.

---

##### `UpdateQAppPermissions`<sup>Required</sup> <a name="UpdateQAppPermissions" id="@cdk_utils/iam.qapps.QappsOperations.property.UpdateQAppPermissions"></a>

```typescript
public readonly UpdateQAppPermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQAppPermissions API call.

---

##### `UpdateQAppSession`<sup>Required</sup> <a name="UpdateQAppSession" id="@cdk_utils/iam.qapps.QappsOperations.property.UpdateQAppSession"></a>

```typescript
public readonly UpdateQAppSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQAppSession API call.

---

##### `UpdateQAppSessionMetadata`<sup>Required</sup> <a name="UpdateQAppSessionMetadata" id="@cdk_utils/iam.qapps.QappsOperations.property.UpdateQAppSessionMetadata"></a>

```typescript
public readonly UpdateQAppSessionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQAppSessionMetadata API call.

---

### QappsResources <a name="QappsResources" id="@cdk_utils/iam.qapps.QappsResources"></a>

ARN builders, validators, and parsers for qapps resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qapps.QappsResources.Initializer"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

new qapps.QappsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.isValidQappArn">isValidQappArn</a></code> | Validates whether a string is a valid ARN for the qapp resource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.isValidQappSessionArn">isValidQappSessionArn</a></code> | Validates whether a string is a valid ARN for the qapp-session resource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.parseQappArn">parseQappArn</a></code> | Parses a qapp ARN into its components. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.parseQappSessionArn">parseQappSessionArn</a></code> | Parses a qapp-session ARN into its components. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.qapp">qapp</a></code> | Builds an ARN for the qapp resource. |
| <code><a href="#@cdk_utils/iam.qapps.QappsResources.qappSession">qappSession</a></code> | Builds an ARN for the qapp-session resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.qapps.QappsResources.application"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.application(props: QappsApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qapps.QappsResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qapps.QappsApplicationArnProps">QappsApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.qapps.QappsResources.isValidApplicationArn"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qapps.QappsResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQappArn` <a name="isValidQappArn" id="@cdk_utils/iam.qapps.QappsResources.isValidQappArn"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.isValidQappArn(arn: string)
```

Validates whether a string is a valid ARN for the qapp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qapps.QappsResources.isValidQappArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQappSessionArn` <a name="isValidQappSessionArn" id="@cdk_utils/iam.qapps.QappsResources.isValidQappSessionArn"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.isValidQappSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the qapp-session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qapps.QappsResources.isValidQappSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.qapps.QappsResources.parseApplicationArn"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qapps.QappsResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQappArn` <a name="parseQappArn" id="@cdk_utils/iam.qapps.QappsResources.parseQappArn"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.parseQappArn(arn: string)
```

Parses a qapp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qapps.QappsResources.parseQappArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQappSessionArn` <a name="parseQappSessionArn" id="@cdk_utils/iam.qapps.QappsResources.parseQappSessionArn"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.parseQappSessionArn(arn: string)
```

Parses a qapp-session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qapps.QappsResources.parseQappSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `qapp` <a name="qapp" id="@cdk_utils/iam.qapps.QappsResources.qapp"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.qapp(props: QappsQappArnProps)
```

Builds an ARN for the qapp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qapps.QappsResources.qapp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qapps.QappsQappArnProps">QappsQappArnProps</a>

---

##### `qappSession` <a name="qappSession" id="@cdk_utils/iam.qapps.QappsResources.qappSession"></a>

```typescript
import { qapps } from '@cdk_utils/iam'

qapps.QappsResources.qappSession(props: QappsQappSessionArnProps)
```

Builds an ARN for the qapp-session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qapps.QappsResources.qappSession.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qapps.QappsQappSessionArnProps">QappsQappSessionArnProps</a>

---




