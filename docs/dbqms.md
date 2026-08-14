# `dbqms` Submodule <a name="`dbqms` Submodule" id="@cdk_utils/iam.dbqms"></a>



## Classes <a name="Classes" id="Classes"></a>

### DbqmsActions <a name="DbqmsActions" id="@cdk_utils/iam.dbqms.DbqmsActions"></a>

IAM action constants for the dbqms service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dbqms.DbqmsActions.Initializer"></a>

```typescript
import { dbqms } from '@cdk_utils/iam'

new dbqms.DbqmsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.actionGetQueryString">actionGetQueryString</a></code> | <code>string</code> | [Read] dbqms:GetQueryString. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.CreateFavoriteQuery">CreateFavoriteQuery</a></code> | <code>string</code> | [Write] dbqms:CreateFavoriteQuery. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.CreateQueryHistory">CreateQueryHistory</a></code> | <code>string</code> | [Write] dbqms:CreateQueryHistory. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.CreateTab">CreateTab</a></code> | <code>string</code> | [Write] dbqms:CreateTab. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.DeleteFavoriteQueries">DeleteFavoriteQueries</a></code> | <code>string</code> | [Write] dbqms:DeleteFavoriteQueries. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.DeleteQueryHistory">DeleteQueryHistory</a></code> | <code>string</code> | [Write] dbqms:DeleteQueryHistory. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.DeleteTab">DeleteTab</a></code> | <code>string</code> | [Write] dbqms:DeleteTab. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.DescribeFavoriteQueries">DescribeFavoriteQueries</a></code> | <code>string</code> | [List] dbqms:DescribeFavoriteQueries. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.DescribeQueryHistory">DescribeQueryHistory</a></code> | <code>string</code> | [List] dbqms:DescribeQueryHistory. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.DescribeTabs">DescribeTabs</a></code> | <code>string</code> | [List] dbqms:DescribeTabs. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.UpdateFavoriteQuery">UpdateFavoriteQuery</a></code> | <code>string</code> | [Write] dbqms:UpdateFavoriteQuery. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.UpdateQueryHistory">UpdateQueryHistory</a></code> | <code>string</code> | [Write] dbqms:UpdateQueryHistory. |
| <code><a href="#@cdk_utils/iam.dbqms.DbqmsActions.property.UpdateTab">UpdateTab</a></code> | <code>string</code> | [Write] dbqms:UpdateTab. |

---

##### `actionGetQueryString`<sup>Required</sup> <a name="actionGetQueryString" id="@cdk_utils/iam.dbqms.DbqmsActions.property.actionGetQueryString"></a>

```typescript
public readonly actionGetQueryString: string;
```

- *Type:* string

[Read] dbqms:GetQueryString.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dbqms.DbqmsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dbqms.DbqmsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dbqms.DbqmsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dbqms.DbqmsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dbqms.DbqmsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateFavoriteQuery`<sup>Required</sup> <a name="CreateFavoriteQuery" id="@cdk_utils/iam.dbqms.DbqmsActions.property.CreateFavoriteQuery"></a>

```typescript
public readonly CreateFavoriteQuery: string;
```

- *Type:* string

[Write] dbqms:CreateFavoriteQuery.

---

##### `CreateQueryHistory`<sup>Required</sup> <a name="CreateQueryHistory" id="@cdk_utils/iam.dbqms.DbqmsActions.property.CreateQueryHistory"></a>

```typescript
public readonly CreateQueryHistory: string;
```

- *Type:* string

[Write] dbqms:CreateQueryHistory.

---

##### `CreateTab`<sup>Required</sup> <a name="CreateTab" id="@cdk_utils/iam.dbqms.DbqmsActions.property.CreateTab"></a>

```typescript
public readonly CreateTab: string;
```

- *Type:* string

[Write] dbqms:CreateTab.

---

##### `DeleteFavoriteQueries`<sup>Required</sup> <a name="DeleteFavoriteQueries" id="@cdk_utils/iam.dbqms.DbqmsActions.property.DeleteFavoriteQueries"></a>

```typescript
public readonly DeleteFavoriteQueries: string;
```

- *Type:* string

[Write] dbqms:DeleteFavoriteQueries.

---

##### `DeleteQueryHistory`<sup>Required</sup> <a name="DeleteQueryHistory" id="@cdk_utils/iam.dbqms.DbqmsActions.property.DeleteQueryHistory"></a>

```typescript
public readonly DeleteQueryHistory: string;
```

- *Type:* string

[Write] dbqms:DeleteQueryHistory.

---

##### `DeleteTab`<sup>Required</sup> <a name="DeleteTab" id="@cdk_utils/iam.dbqms.DbqmsActions.property.DeleteTab"></a>

```typescript
public readonly DeleteTab: string;
```

- *Type:* string

[Write] dbqms:DeleteTab.

---

##### `DescribeFavoriteQueries`<sup>Required</sup> <a name="DescribeFavoriteQueries" id="@cdk_utils/iam.dbqms.DbqmsActions.property.DescribeFavoriteQueries"></a>

```typescript
public readonly DescribeFavoriteQueries: string;
```

- *Type:* string

[List] dbqms:DescribeFavoriteQueries.

---

##### `DescribeQueryHistory`<sup>Required</sup> <a name="DescribeQueryHistory" id="@cdk_utils/iam.dbqms.DbqmsActions.property.DescribeQueryHistory"></a>

```typescript
public readonly DescribeQueryHistory: string;
```

- *Type:* string

[List] dbqms:DescribeQueryHistory.

---

##### `DescribeTabs`<sup>Required</sup> <a name="DescribeTabs" id="@cdk_utils/iam.dbqms.DbqmsActions.property.DescribeTabs"></a>

```typescript
public readonly DescribeTabs: string;
```

- *Type:* string

[List] dbqms:DescribeTabs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dbqms.DbqmsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateFavoriteQuery`<sup>Required</sup> <a name="UpdateFavoriteQuery" id="@cdk_utils/iam.dbqms.DbqmsActions.property.UpdateFavoriteQuery"></a>

```typescript
public readonly UpdateFavoriteQuery: string;
```

- *Type:* string

[Write] dbqms:UpdateFavoriteQuery.

---

##### `UpdateQueryHistory`<sup>Required</sup> <a name="UpdateQueryHistory" id="@cdk_utils/iam.dbqms.DbqmsActions.property.UpdateQueryHistory"></a>

```typescript
public readonly UpdateQueryHistory: string;
```

- *Type:* string

[Write] dbqms:UpdateQueryHistory.

---

##### `UpdateTab`<sup>Required</sup> <a name="UpdateTab" id="@cdk_utils/iam.dbqms.DbqmsActions.property.UpdateTab"></a>

```typescript
public readonly UpdateTab: string;
```

- *Type:* string

[Write] dbqms:UpdateTab.

---


