# `es` Submodule <a name="`es` Submodule" id="@cdk_utils/iam.es"></a>


## Structs <a name="Structs" id="Structs"></a>

### EsApplicationArnComponents <a name="EsApplicationArnComponents" id="@cdk_utils/iam.es.EsApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsApplicationArnComponents.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esApplicationArnComponents: es.EsApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.es.EsApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.es.EsApplicationArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.es.EsApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.es.EsApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EsApplicationArnProps <a name="EsApplicationArnProps" id="@cdk_utils/iam.es.EsApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsApplicationArnProps.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esApplicationArnProps: es.EsApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.es.EsApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.es.EsApplicationArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.es.EsApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.es.EsApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.es.EsApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EsDatasourceArnComponents <a name="EsDatasourceArnComponents" id="@cdk_utils/iam.es.EsDatasourceArnComponents"></a>

Parsed components of a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsDatasourceArnComponents.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esDatasourceArnComponents: es.EsDatasourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnComponents.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The DataSourceName component. |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.es.EsDatasourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdk_utils/iam.es.EsDatasourceArnComponents.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

The DataSourceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.es.EsDatasourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.es.EsDatasourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EsDatasourceArnProps <a name="EsDatasourceArnProps" id="@cdk_utils/iam.es.EsDatasourceArnProps"></a>

Properties for building a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsDatasourceArnProps.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esDatasourceArnProps: es.EsDatasourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnProps.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The DataSourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.es.EsDatasourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdk_utils/iam.es.EsDatasourceArnProps.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

The DataSourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.es.EsDatasourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.es.EsDatasourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.es.EsDatasourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EsDomainArnComponents <a name="EsDomainArnComponents" id="@cdk_utils/iam.es.EsDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsDomainArnComponents.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esDomainArnComponents: es.EsDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.es.EsDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.es.EsDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.es.EsDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.es.EsDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EsDomainArnProps <a name="EsDomainArnProps" id="@cdk_utils/iam.es.EsDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsDomainArnProps.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esDomainArnProps: es.EsDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.es.EsDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.es.EsDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.es.EsDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.es.EsDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.es.EsDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EsEsRoleArnComponents <a name="EsEsRoleArnComponents" id="@cdk_utils/iam.es.EsEsRoleArnComponents"></a>

Parsed components of a es_role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsEsRoleArnComponents.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esEsRoleArnComponents: es.EsEsRoleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsEsRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsEsRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.es.EsEsRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.es.EsEsRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### EsEsRoleArnProps <a name="EsEsRoleArnProps" id="@cdk_utils/iam.es.EsEsRoleArnProps"></a>

Properties for building a es_role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsEsRoleArnProps.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esEsRoleArnProps: es.EsEsRoleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsEsRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsEsRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.es.EsEsRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.es.EsEsRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### EsOpensearchserviceRoleArnComponents <a name="EsOpensearchserviceRoleArnComponents" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnComponents"></a>

Parsed components of a opensearchservice_role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnComponents.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esOpensearchserviceRoleArnComponents: es.EsOpensearchserviceRoleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsOpensearchserviceRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsOpensearchserviceRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### EsOpensearchserviceRoleArnProps <a name="EsOpensearchserviceRoleArnProps" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps"></a>

Properties for building a opensearchservice_role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

const esOpensearchserviceRoleArnProps: es.EsOpensearchserviceRoleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### EsActions <a name="EsActions" id="@cdk_utils/iam.es.EsActions"></a>

IAM action constants for the es service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.es.EsActions.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

new es.EsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AcceptInboundConnection">AcceptInboundConnection</a></code> | <code>string</code> | [Write] es:AcceptInboundConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AcceptInboundCrossClusterSearchConnection">AcceptInboundCrossClusterSearchConnection</a></code> | <code>string</code> | [Write] es:AcceptInboundCrossClusterSearchConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] es:GetApplication. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetCapability">actionGetCapability</a></code> | <code>string</code> | [Read] es:GetCapability. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetCompatibleElasticsearchVersions">actionGetCompatibleElasticsearchVersions</a></code> | <code>string</code> | [List] es:GetCompatibleElasticsearchVersions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetCompatibleVersions">actionGetCompatibleVersions</a></code> | <code>string</code> | [List] es:GetCompatibleVersions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] es:GetDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetDefaultApplicationSetting">actionGetDefaultApplicationSetting</a></code> | <code>string</code> | [Read] es:GetDefaultApplicationSetting. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetDirectQueryDataSource">actionGetDirectQueryDataSource</a></code> | <code>string</code> | [Read] es:GetDirectQueryDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetDomainMaintenanceStatus">actionGetDomainMaintenanceStatus</a></code> | <code>string</code> | [Read] es:GetDomainMaintenanceStatus. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetIndex">actionGetIndex</a></code> | <code>string</code> | [Read] es:GetIndex. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetMigration">actionGetMigration</a></code> | <code>string</code> | [Read] es:GetMigration. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetPackageVersionHistory">actionGetPackageVersionHistory</a></code> | <code>string</code> | [Read] es:GetPackageVersionHistory. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetUpgradeHistory">actionGetUpgradeHistory</a></code> | <code>string</code> | [Read] es:GetUpgradeHistory. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.actionGetUpgradeStatus">actionGetUpgradeStatus</a></code> | <code>string</code> | [Read] es:GetUpgradeStatus. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AddDataSource">AddDataSource</a></code> | <code>string</code> | [Write] es:AddDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AddDirectQueryDataSource">AddDirectQueryDataSource</a></code> | <code>string</code> | [Write] es:AddDirectQueryDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] es:AddTags. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AssociatePackage">AssociatePackage</a></code> | <code>string</code> | [Write] es:AssociatePackage. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AssociatePackages">AssociatePackages</a></code> | <code>string</code> | [Write] es:AssociatePackages. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AttachDataSource">AttachDataSource</a></code> | <code>string</code> | [Write] es:AttachDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.AuthorizeVpcEndpointAccess">AuthorizeVpcEndpointAccess</a></code> | <code>string</code> | [Write] es:AuthorizeVpcEndpointAccess. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CancelDomainConfigChange">CancelDomainConfigChange</a></code> | <code>string</code> | [Write] es:CancelDomainConfigChange. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CancelElasticsearchServiceSoftwareUpdate">CancelElasticsearchServiceSoftwareUpdate</a></code> | <code>string</code> | [Write] es:CancelElasticsearchServiceSoftwareUpdate. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CancelServiceSoftwareUpdate">CancelServiceSoftwareUpdate</a></code> | <code>string</code> | [Write] es:CancelServiceSoftwareUpdate. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] es:CreateApplication. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] es:CreateDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateElasticsearchDomain">CreateElasticsearchDomain</a></code> | <code>string</code> | [Write] es:CreateElasticsearchDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateElasticsearchServiceRole">CreateElasticsearchServiceRole</a></code> | <code>string</code> | [Write] es:CreateElasticsearchServiceRole. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] es:CreateIndex. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateOutboundConnection">CreateOutboundConnection</a></code> | <code>string</code> | [Write] es:CreateOutboundConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateOutboundCrossClusterSearchConnection">CreateOutboundCrossClusterSearchConnection</a></code> | <code>string</code> | [Write] es:CreateOutboundCrossClusterSearchConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreatePackage">CreatePackage</a></code> | <code>string</code> | [Write] es:CreatePackage. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateServiceRole">CreateServiceRole</a></code> | <code>string</code> | [Write] es:CreateServiceRole. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.CreateVpcEndpoint">CreateVpcEndpoint</a></code> | <code>string</code> | [Write] es:CreateVpcEndpoint. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] es:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] es:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteDirectQueryDataSource">DeleteDirectQueryDataSource</a></code> | <code>string</code> | [Write] es:DeleteDirectQueryDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] es:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteElasticsearchDomain">DeleteElasticsearchDomain</a></code> | <code>string</code> | [Write] es:DeleteElasticsearchDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteElasticsearchServiceRole">DeleteElasticsearchServiceRole</a></code> | <code>string</code> | [Write] es:DeleteElasticsearchServiceRole. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteInboundConnection">DeleteInboundConnection</a></code> | <code>string</code> | [Write] es:DeleteInboundConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteInboundCrossClusterSearchConnection">DeleteInboundCrossClusterSearchConnection</a></code> | <code>string</code> | [Write] es:DeleteInboundCrossClusterSearchConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteIndex">DeleteIndex</a></code> | <code>string</code> | [Write] es:DeleteIndex. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteOutboundConnection">DeleteOutboundConnection</a></code> | <code>string</code> | [Write] es:DeleteOutboundConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteOutboundCrossClusterSearchConnection">DeleteOutboundCrossClusterSearchConnection</a></code> | <code>string</code> | [Write] es:DeleteOutboundCrossClusterSearchConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeletePackage">DeletePackage</a></code> | <code>string</code> | [Write] es:DeletePackage. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeleteVpcEndpoint">DeleteVpcEndpoint</a></code> | <code>string</code> | [Write] es:DeleteVpcEndpoint. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DeregisterCapability">DeregisterCapability</a></code> | <code>string</code> | [Write] es:DeregisterCapability. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDataSourceAttachment">DescribeDataSourceAttachment</a></code> | <code>string</code> | [Read] es:DescribeDataSourceAttachment. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomain">DescribeDomain</a></code> | <code>string</code> | [Read] es:DescribeDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomainAutoTunes">DescribeDomainAutoTunes</a></code> | <code>string</code> | [Read] es:DescribeDomainAutoTunes. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomainChangeProgress">DescribeDomainChangeProgress</a></code> | <code>string</code> | [Read] es:DescribeDomainChangeProgress. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomainConfig">DescribeDomainConfig</a></code> | <code>string</code> | [Read] es:DescribeDomainConfig. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomainHealth">DescribeDomainHealth</a></code> | <code>string</code> | [Read] es:DescribeDomainHealth. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomainNodes">DescribeDomainNodes</a></code> | <code>string</code> | [Read] es:DescribeDomainNodes. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDomains">DescribeDomains</a></code> | <code>string</code> | [List] es:DescribeDomains. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeDryRunProgress">DescribeDryRunProgress</a></code> | <code>string</code> | [Read] es:DescribeDryRunProgress. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchDomain">DescribeElasticsearchDomain</a></code> | <code>string</code> | [Read] es:DescribeElasticsearchDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchDomainConfig">DescribeElasticsearchDomainConfig</a></code> | <code>string</code> | [Read] es:DescribeElasticsearchDomainConfig. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchDomains">DescribeElasticsearchDomains</a></code> | <code>string</code> | [List] es:DescribeElasticsearchDomains. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchInstanceTypeLimits">DescribeElasticsearchInstanceTypeLimits</a></code> | <code>string</code> | [List] es:DescribeElasticsearchInstanceTypeLimits. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeInboundConnections">DescribeInboundConnections</a></code> | <code>string</code> | [List] es:DescribeInboundConnections. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeInboundCrossClusterSearchConnections">DescribeInboundCrossClusterSearchConnections</a></code> | <code>string</code> | [List] es:DescribeInboundCrossClusterSearchConnections. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeInsightDetails">DescribeInsightDetails</a></code> | <code>string</code> | [Read] es:DescribeInsightDetails. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeInstanceTypeLimits">DescribeInstanceTypeLimits</a></code> | <code>string</code> | [List] es:DescribeInstanceTypeLimits. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeOutboundConnections">DescribeOutboundConnections</a></code> | <code>string</code> | [List] es:DescribeOutboundConnections. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeOutboundCrossClusterSearchConnections">DescribeOutboundCrossClusterSearchConnections</a></code> | <code>string</code> | [List] es:DescribeOutboundCrossClusterSearchConnections. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribePackages">DescribePackages</a></code> | <code>string</code> | [Read] es:DescribePackages. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeReservedElasticsearchInstanceOfferings">DescribeReservedElasticsearchInstanceOfferings</a></code> | <code>string</code> | [List] es:DescribeReservedElasticsearchInstanceOfferings. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeReservedElasticsearchInstances">DescribeReservedElasticsearchInstances</a></code> | <code>string</code> | [List] es:DescribeReservedElasticsearchInstances. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeReservedInstanceOfferings">DescribeReservedInstanceOfferings</a></code> | <code>string</code> | [List] es:DescribeReservedInstanceOfferings. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeReservedInstances">DescribeReservedInstances</a></code> | <code>string</code> | [List] es:DescribeReservedInstances. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DescribeVpcEndpoints">DescribeVpcEndpoints</a></code> | <code>string</code> | [List] es:DescribeVpcEndpoints. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DetachDataSource">DetachDataSource</a></code> | <code>string</code> | [Write] es:DetachDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DissociatePackage">DissociatePackage</a></code> | <code>string</code> | [Write] es:DissociatePackage. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.DissociatePackages">DissociatePackages</a></code> | <code>string</code> | [Write] es:DissociatePackages. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESCrossClusterGet">ESCrossClusterGet</a></code> | <code>string</code> | [Read] es:ESCrossClusterGet. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESHttpDelete">ESHttpDelete</a></code> | <code>string</code> | [Write] es:ESHttpDelete. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESHttpGet">ESHttpGet</a></code> | <code>string</code> | [Read] es:ESHttpGet. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESHttpHead">ESHttpHead</a></code> | <code>string</code> | [Read] es:ESHttpHead. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESHttpPatch">ESHttpPatch</a></code> | <code>string</code> | [Write] es:ESHttpPatch. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESHttpPost">ESHttpPost</a></code> | <code>string</code> | [Write] es:ESHttpPost. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ESHttpPut">ESHttpPut</a></code> | <code>string</code> | [Write] es:ESHttpPut. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.InsightFeedback">InsightFeedback</a></code> | <code>string</code> | [Write] es:InsightFeedback. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] es:ListApplications. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListDataSourceAttachments">ListDataSourceAttachments</a></code> | <code>string</code> | [List] es:ListDataSourceAttachments. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] es:ListDataSources. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListDirectQueryDataSources">ListDirectQueryDataSources</a></code> | <code>string</code> | [List] es:ListDirectQueryDataSources. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListDomainMaintenances">ListDomainMaintenances</a></code> | <code>string</code> | [List] es:ListDomainMaintenances. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListDomainNames">ListDomainNames</a></code> | <code>string</code> | [List] es:ListDomainNames. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListDomainsForPackage">ListDomainsForPackage</a></code> | <code>string</code> | [List] es:ListDomainsForPackage. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListElasticsearchInstanceTypeDetails">ListElasticsearchInstanceTypeDetails</a></code> | <code>string</code> | [List] es:ListElasticsearchInstanceTypeDetails. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListElasticsearchInstanceTypes">ListElasticsearchInstanceTypes</a></code> | <code>string</code> | [List] es:ListElasticsearchInstanceTypes. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListElasticsearchVersions">ListElasticsearchVersions</a></code> | <code>string</code> | [List] es:ListElasticsearchVersions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListInsights">ListInsights</a></code> | <code>string</code> | [List] es:ListInsights. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListInstanceTypeDetails">ListInstanceTypeDetails</a></code> | <code>string</code> | [List] es:ListInstanceTypeDetails. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListMigrations">ListMigrations</a></code> | <code>string</code> | [List] es:ListMigrations. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListPackagesForDomain">ListPackagesForDomain</a></code> | <code>string</code> | [List] es:ListPackagesForDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListScheduledActions">ListScheduledActions</a></code> | <code>string</code> | [List] es:ListScheduledActions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] es:ListTags. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListVersions">ListVersions</a></code> | <code>string</code> | [List] es:ListVersions. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListVpcEndpointAccess">ListVpcEndpointAccess</a></code> | <code>string</code> | [List] es:ListVpcEndpointAccess. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListVpcEndpoints">ListVpcEndpoints</a></code> | <code>string</code> | [List] es:ListVpcEndpoints. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.ListVpcEndpointsForDomain">ListVpcEndpointsForDomain</a></code> | <code>string</code> | [List] es:ListVpcEndpointsForDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.PurchaseReservedElasticsearchInstanceOffering">PurchaseReservedElasticsearchInstanceOffering</a></code> | <code>string</code> | [Write] es:PurchaseReservedElasticsearchInstanceOffering. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.PurchaseReservedInstanceOffering">PurchaseReservedInstanceOffering</a></code> | <code>string</code> | [Write] es:PurchaseReservedInstanceOffering. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.PutDefaultApplicationSetting">PutDefaultApplicationSetting</a></code> | <code>string</code> | [Write] es:PutDefaultApplicationSetting. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RegisterCapability">RegisterCapability</a></code> | <code>string</code> | [Write] es:RegisterCapability. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RejectInboundConnection">RejectInboundConnection</a></code> | <code>string</code> | [Write] es:RejectInboundConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RejectInboundCrossClusterSearchConnection">RejectInboundCrossClusterSearchConnection</a></code> | <code>string</code> | [Write] es:RejectInboundCrossClusterSearchConnection. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] es:RemoveTags. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RevokeVpcEndpointAccess">RevokeVpcEndpointAccess</a></code> | <code>string</code> | [Write] es:RevokeVpcEndpointAccess. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RollbackElasticsearchServiceSoftwareUpdate">RollbackElasticsearchServiceSoftwareUpdate</a></code> | <code>string</code> | [Write] es:RollbackElasticsearchServiceSoftwareUpdate. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.RollbackServiceSoftwareUpdate">RollbackServiceSoftwareUpdate</a></code> | <code>string</code> | [Write] es:RollbackServiceSoftwareUpdate. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.StartDomainMaintenance">StartDomainMaintenance</a></code> | <code>string</code> | [Write] es:StartDomainMaintenance. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.StartElasticsearchServiceSoftwareUpdate">StartElasticsearchServiceSoftwareUpdate</a></code> | <code>string</code> | [Write] es:StartElasticsearchServiceSoftwareUpdate. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.StartMigration">StartMigration</a></code> | <code>string</code> | [Write] es:StartMigration. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.StartServiceSoftwareUpdate">StartServiceSoftwareUpdate</a></code> | <code>string</code> | [Write] es:StartServiceSoftwareUpdate. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] es:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] es:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateDirectQueryDataSource">UpdateDirectQueryDataSource</a></code> | <code>string</code> | [Write] es:UpdateDirectQueryDataSource. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateDomainConfig">UpdateDomainConfig</a></code> | <code>string</code> | [Write] es:UpdateDomainConfig. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateElasticsearchDomainConfig">UpdateElasticsearchDomainConfig</a></code> | <code>string</code> | [Write] es:UpdateElasticsearchDomainConfig. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateIndex">UpdateIndex</a></code> | <code>string</code> | [Write] es:UpdateIndex. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdatePackage">UpdatePackage</a></code> | <code>string</code> | [Write] es:UpdatePackage. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdatePackageScope">UpdatePackageScope</a></code> | <code>string</code> | [Write] es:UpdatePackageScope. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateScheduledAction">UpdateScheduledAction</a></code> | <code>string</code> | [Write] es:UpdateScheduledAction. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpdateVpcEndpoint">UpdateVpcEndpoint</a></code> | <code>string</code> | [Write] es:UpdateVpcEndpoint. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpgradeDomain">UpgradeDomain</a></code> | <code>string</code> | [Write] es:UpgradeDomain. |
| <code><a href="#@cdk_utils/iam.es.EsActions.property.UpgradeElasticsearchDomain">UpgradeElasticsearchDomain</a></code> | <code>string</code> | [Write] es:UpgradeElasticsearchDomain. |

---

##### `AcceptInboundConnection`<sup>Required</sup> <a name="AcceptInboundConnection" id="@cdk_utils/iam.es.EsActions.property.AcceptInboundConnection"></a>

```typescript
public readonly AcceptInboundConnection: string;
```

- *Type:* string

[Write] es:AcceptInboundConnection.

---

##### `AcceptInboundCrossClusterSearchConnection`<sup>Required</sup> <a name="AcceptInboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsActions.property.AcceptInboundCrossClusterSearchConnection"></a>

```typescript
public readonly AcceptInboundCrossClusterSearchConnection: string;
```

- *Type:* string

[Write] es:AcceptInboundCrossClusterSearchConnection.

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.es.EsActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] es:GetApplication.

---

##### `actionGetCapability`<sup>Required</sup> <a name="actionGetCapability" id="@cdk_utils/iam.es.EsActions.property.actionGetCapability"></a>

```typescript
public readonly actionGetCapability: string;
```

- *Type:* string

[Read] es:GetCapability.

---

##### `actionGetCompatibleElasticsearchVersions`<sup>Required</sup> <a name="actionGetCompatibleElasticsearchVersions" id="@cdk_utils/iam.es.EsActions.property.actionGetCompatibleElasticsearchVersions"></a>

```typescript
public readonly actionGetCompatibleElasticsearchVersions: string;
```

- *Type:* string

[List] es:GetCompatibleElasticsearchVersions.

---

##### `actionGetCompatibleVersions`<sup>Required</sup> <a name="actionGetCompatibleVersions" id="@cdk_utils/iam.es.EsActions.property.actionGetCompatibleVersions"></a>

```typescript
public readonly actionGetCompatibleVersions: string;
```

- *Type:* string

[List] es:GetCompatibleVersions.

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.es.EsActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] es:GetDataSource.

---

##### `actionGetDefaultApplicationSetting`<sup>Required</sup> <a name="actionGetDefaultApplicationSetting" id="@cdk_utils/iam.es.EsActions.property.actionGetDefaultApplicationSetting"></a>

```typescript
public readonly actionGetDefaultApplicationSetting: string;
```

- *Type:* string

[Read] es:GetDefaultApplicationSetting.

---

##### `actionGetDirectQueryDataSource`<sup>Required</sup> <a name="actionGetDirectQueryDataSource" id="@cdk_utils/iam.es.EsActions.property.actionGetDirectQueryDataSource"></a>

```typescript
public readonly actionGetDirectQueryDataSource: string;
```

- *Type:* string

[Read] es:GetDirectQueryDataSource.

---

##### `actionGetDomainMaintenanceStatus`<sup>Required</sup> <a name="actionGetDomainMaintenanceStatus" id="@cdk_utils/iam.es.EsActions.property.actionGetDomainMaintenanceStatus"></a>

```typescript
public readonly actionGetDomainMaintenanceStatus: string;
```

- *Type:* string

[Read] es:GetDomainMaintenanceStatus.

---

##### `actionGetIndex`<sup>Required</sup> <a name="actionGetIndex" id="@cdk_utils/iam.es.EsActions.property.actionGetIndex"></a>

```typescript
public readonly actionGetIndex: string;
```

- *Type:* string

[Read] es:GetIndex.

---

##### `actionGetMigration`<sup>Required</sup> <a name="actionGetMigration" id="@cdk_utils/iam.es.EsActions.property.actionGetMigration"></a>

```typescript
public readonly actionGetMigration: string;
```

- *Type:* string

[Read] es:GetMigration.

---

##### `actionGetPackageVersionHistory`<sup>Required</sup> <a name="actionGetPackageVersionHistory" id="@cdk_utils/iam.es.EsActions.property.actionGetPackageVersionHistory"></a>

```typescript
public readonly actionGetPackageVersionHistory: string;
```

- *Type:* string

[Read] es:GetPackageVersionHistory.

---

##### `actionGetUpgradeHistory`<sup>Required</sup> <a name="actionGetUpgradeHistory" id="@cdk_utils/iam.es.EsActions.property.actionGetUpgradeHistory"></a>

```typescript
public readonly actionGetUpgradeHistory: string;
```

- *Type:* string

[Read] es:GetUpgradeHistory.

---

##### `actionGetUpgradeStatus`<sup>Required</sup> <a name="actionGetUpgradeStatus" id="@cdk_utils/iam.es.EsActions.property.actionGetUpgradeStatus"></a>

```typescript
public readonly actionGetUpgradeStatus: string;
```

- *Type:* string

[Read] es:GetUpgradeStatus.

---

##### `AddDataSource`<sup>Required</sup> <a name="AddDataSource" id="@cdk_utils/iam.es.EsActions.property.AddDataSource"></a>

```typescript
public readonly AddDataSource: string;
```

- *Type:* string

[Write] es:AddDataSource.

---

##### `AddDirectQueryDataSource`<sup>Required</sup> <a name="AddDirectQueryDataSource" id="@cdk_utils/iam.es.EsActions.property.AddDirectQueryDataSource"></a>

```typescript
public readonly AddDirectQueryDataSource: string;
```

- *Type:* string

[Write] es:AddDirectQueryDataSource.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.es.EsActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] es:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.es.EsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.es.EsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.es.EsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.es.EsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.es.EsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociatePackage`<sup>Required</sup> <a name="AssociatePackage" id="@cdk_utils/iam.es.EsActions.property.AssociatePackage"></a>

```typescript
public readonly AssociatePackage: string;
```

- *Type:* string

[Write] es:AssociatePackage.

---

##### `AssociatePackages`<sup>Required</sup> <a name="AssociatePackages" id="@cdk_utils/iam.es.EsActions.property.AssociatePackages"></a>

```typescript
public readonly AssociatePackages: string;
```

- *Type:* string

[Write] es:AssociatePackages.

---

##### `AttachDataSource`<sup>Required</sup> <a name="AttachDataSource" id="@cdk_utils/iam.es.EsActions.property.AttachDataSource"></a>

```typescript
public readonly AttachDataSource: string;
```

- *Type:* string

[Write] es:AttachDataSource.

---

##### `AuthorizeVpcEndpointAccess`<sup>Required</sup> <a name="AuthorizeVpcEndpointAccess" id="@cdk_utils/iam.es.EsActions.property.AuthorizeVpcEndpointAccess"></a>

```typescript
public readonly AuthorizeVpcEndpointAccess: string;
```

- *Type:* string

[Write] es:AuthorizeVpcEndpointAccess.

---

##### `CancelDomainConfigChange`<sup>Required</sup> <a name="CancelDomainConfigChange" id="@cdk_utils/iam.es.EsActions.property.CancelDomainConfigChange"></a>

```typescript
public readonly CancelDomainConfigChange: string;
```

- *Type:* string

[Write] es:CancelDomainConfigChange.

---

##### `CancelElasticsearchServiceSoftwareUpdate`<sup>Required</sup> <a name="CancelElasticsearchServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsActions.property.CancelElasticsearchServiceSoftwareUpdate"></a>

```typescript
public readonly CancelElasticsearchServiceSoftwareUpdate: string;
```

- *Type:* string

[Write] es:CancelElasticsearchServiceSoftwareUpdate.

---

##### `CancelServiceSoftwareUpdate`<sup>Required</sup> <a name="CancelServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsActions.property.CancelServiceSoftwareUpdate"></a>

```typescript
public readonly CancelServiceSoftwareUpdate: string;
```

- *Type:* string

[Write] es:CancelServiceSoftwareUpdate.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.es.EsActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] es:CreateApplication.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.es.EsActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] es:CreateDomain.

---

##### `CreateElasticsearchDomain`<sup>Required</sup> <a name="CreateElasticsearchDomain" id="@cdk_utils/iam.es.EsActions.property.CreateElasticsearchDomain"></a>

```typescript
public readonly CreateElasticsearchDomain: string;
```

- *Type:* string

[Write] es:CreateElasticsearchDomain.

---

##### `CreateElasticsearchServiceRole`<sup>Required</sup> <a name="CreateElasticsearchServiceRole" id="@cdk_utils/iam.es.EsActions.property.CreateElasticsearchServiceRole"></a>

```typescript
public readonly CreateElasticsearchServiceRole: string;
```

- *Type:* string

[Write] es:CreateElasticsearchServiceRole.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.es.EsActions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] es:CreateIndex.

---

##### `CreateOutboundConnection`<sup>Required</sup> <a name="CreateOutboundConnection" id="@cdk_utils/iam.es.EsActions.property.CreateOutboundConnection"></a>

```typescript
public readonly CreateOutboundConnection: string;
```

- *Type:* string

[Write] es:CreateOutboundConnection.

---

##### `CreateOutboundCrossClusterSearchConnection`<sup>Required</sup> <a name="CreateOutboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsActions.property.CreateOutboundCrossClusterSearchConnection"></a>

```typescript
public readonly CreateOutboundCrossClusterSearchConnection: string;
```

- *Type:* string

[Write] es:CreateOutboundCrossClusterSearchConnection.

---

##### `CreatePackage`<sup>Required</sup> <a name="CreatePackage" id="@cdk_utils/iam.es.EsActions.property.CreatePackage"></a>

```typescript
public readonly CreatePackage: string;
```

- *Type:* string

[Write] es:CreatePackage.

---

##### `CreateServiceRole`<sup>Required</sup> <a name="CreateServiceRole" id="@cdk_utils/iam.es.EsActions.property.CreateServiceRole"></a>

```typescript
public readonly CreateServiceRole: string;
```

- *Type:* string

[Write] es:CreateServiceRole.

---

##### `CreateVpcEndpoint`<sup>Required</sup> <a name="CreateVpcEndpoint" id="@cdk_utils/iam.es.EsActions.property.CreateVpcEndpoint"></a>

```typescript
public readonly CreateVpcEndpoint: string;
```

- *Type:* string

[Write] es:CreateVpcEndpoint.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.es.EsActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] es:DeleteApplication.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.es.EsActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] es:DeleteDataSource.

---

##### `DeleteDirectQueryDataSource`<sup>Required</sup> <a name="DeleteDirectQueryDataSource" id="@cdk_utils/iam.es.EsActions.property.DeleteDirectQueryDataSource"></a>

```typescript
public readonly DeleteDirectQueryDataSource: string;
```

- *Type:* string

[Write] es:DeleteDirectQueryDataSource.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.es.EsActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] es:DeleteDomain.

---

##### `DeleteElasticsearchDomain`<sup>Required</sup> <a name="DeleteElasticsearchDomain" id="@cdk_utils/iam.es.EsActions.property.DeleteElasticsearchDomain"></a>

```typescript
public readonly DeleteElasticsearchDomain: string;
```

- *Type:* string

[Write] es:DeleteElasticsearchDomain.

---

##### `DeleteElasticsearchServiceRole`<sup>Required</sup> <a name="DeleteElasticsearchServiceRole" id="@cdk_utils/iam.es.EsActions.property.DeleteElasticsearchServiceRole"></a>

```typescript
public readonly DeleteElasticsearchServiceRole: string;
```

- *Type:* string

[Write] es:DeleteElasticsearchServiceRole.

---

##### `DeleteInboundConnection`<sup>Required</sup> <a name="DeleteInboundConnection" id="@cdk_utils/iam.es.EsActions.property.DeleteInboundConnection"></a>

```typescript
public readonly DeleteInboundConnection: string;
```

- *Type:* string

[Write] es:DeleteInboundConnection.

---

##### `DeleteInboundCrossClusterSearchConnection`<sup>Required</sup> <a name="DeleteInboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsActions.property.DeleteInboundCrossClusterSearchConnection"></a>

```typescript
public readonly DeleteInboundCrossClusterSearchConnection: string;
```

- *Type:* string

[Write] es:DeleteInboundCrossClusterSearchConnection.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.es.EsActions.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string;
```

- *Type:* string

[Write] es:DeleteIndex.

---

##### `DeleteOutboundConnection`<sup>Required</sup> <a name="DeleteOutboundConnection" id="@cdk_utils/iam.es.EsActions.property.DeleteOutboundConnection"></a>

```typescript
public readonly DeleteOutboundConnection: string;
```

- *Type:* string

[Write] es:DeleteOutboundConnection.

---

##### `DeleteOutboundCrossClusterSearchConnection`<sup>Required</sup> <a name="DeleteOutboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsActions.property.DeleteOutboundCrossClusterSearchConnection"></a>

```typescript
public readonly DeleteOutboundCrossClusterSearchConnection: string;
```

- *Type:* string

[Write] es:DeleteOutboundCrossClusterSearchConnection.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.es.EsActions.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string;
```

- *Type:* string

[Write] es:DeletePackage.

---

##### `DeleteVpcEndpoint`<sup>Required</sup> <a name="DeleteVpcEndpoint" id="@cdk_utils/iam.es.EsActions.property.DeleteVpcEndpoint"></a>

```typescript
public readonly DeleteVpcEndpoint: string;
```

- *Type:* string

[Write] es:DeleteVpcEndpoint.

---

##### `DeregisterCapability`<sup>Required</sup> <a name="DeregisterCapability" id="@cdk_utils/iam.es.EsActions.property.DeregisterCapability"></a>

```typescript
public readonly DeregisterCapability: string;
```

- *Type:* string

[Write] es:DeregisterCapability.

---

##### `DescribeDataSourceAttachment`<sup>Required</sup> <a name="DescribeDataSourceAttachment" id="@cdk_utils/iam.es.EsActions.property.DescribeDataSourceAttachment"></a>

```typescript
public readonly DescribeDataSourceAttachment: string;
```

- *Type:* string

[Read] es:DescribeDataSourceAttachment.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.es.EsActions.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string;
```

- *Type:* string

[Read] es:DescribeDomain.

---

##### `DescribeDomainAutoTunes`<sup>Required</sup> <a name="DescribeDomainAutoTunes" id="@cdk_utils/iam.es.EsActions.property.DescribeDomainAutoTunes"></a>

```typescript
public readonly DescribeDomainAutoTunes: string;
```

- *Type:* string

[Read] es:DescribeDomainAutoTunes.

---

##### `DescribeDomainChangeProgress`<sup>Required</sup> <a name="DescribeDomainChangeProgress" id="@cdk_utils/iam.es.EsActions.property.DescribeDomainChangeProgress"></a>

```typescript
public readonly DescribeDomainChangeProgress: string;
```

- *Type:* string

[Read] es:DescribeDomainChangeProgress.

---

##### `DescribeDomainConfig`<sup>Required</sup> <a name="DescribeDomainConfig" id="@cdk_utils/iam.es.EsActions.property.DescribeDomainConfig"></a>

```typescript
public readonly DescribeDomainConfig: string;
```

- *Type:* string

[Read] es:DescribeDomainConfig.

---

##### `DescribeDomainHealth`<sup>Required</sup> <a name="DescribeDomainHealth" id="@cdk_utils/iam.es.EsActions.property.DescribeDomainHealth"></a>

```typescript
public readonly DescribeDomainHealth: string;
```

- *Type:* string

[Read] es:DescribeDomainHealth.

---

##### `DescribeDomainNodes`<sup>Required</sup> <a name="DescribeDomainNodes" id="@cdk_utils/iam.es.EsActions.property.DescribeDomainNodes"></a>

```typescript
public readonly DescribeDomainNodes: string;
```

- *Type:* string

[Read] es:DescribeDomainNodes.

---

##### `DescribeDomains`<sup>Required</sup> <a name="DescribeDomains" id="@cdk_utils/iam.es.EsActions.property.DescribeDomains"></a>

```typescript
public readonly DescribeDomains: string;
```

- *Type:* string

[List] es:DescribeDomains.

---

##### `DescribeDryRunProgress`<sup>Required</sup> <a name="DescribeDryRunProgress" id="@cdk_utils/iam.es.EsActions.property.DescribeDryRunProgress"></a>

```typescript
public readonly DescribeDryRunProgress: string;
```

- *Type:* string

[Read] es:DescribeDryRunProgress.

---

##### `DescribeElasticsearchDomain`<sup>Required</sup> <a name="DescribeElasticsearchDomain" id="@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchDomain"></a>

```typescript
public readonly DescribeElasticsearchDomain: string;
```

- *Type:* string

[Read] es:DescribeElasticsearchDomain.

---

##### `DescribeElasticsearchDomainConfig`<sup>Required</sup> <a name="DescribeElasticsearchDomainConfig" id="@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchDomainConfig"></a>

```typescript
public readonly DescribeElasticsearchDomainConfig: string;
```

- *Type:* string

[Read] es:DescribeElasticsearchDomainConfig.

---

##### `DescribeElasticsearchDomains`<sup>Required</sup> <a name="DescribeElasticsearchDomains" id="@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchDomains"></a>

```typescript
public readonly DescribeElasticsearchDomains: string;
```

- *Type:* string

[List] es:DescribeElasticsearchDomains.

---

##### `DescribeElasticsearchInstanceTypeLimits`<sup>Required</sup> <a name="DescribeElasticsearchInstanceTypeLimits" id="@cdk_utils/iam.es.EsActions.property.DescribeElasticsearchInstanceTypeLimits"></a>

```typescript
public readonly DescribeElasticsearchInstanceTypeLimits: string;
```

- *Type:* string

[List] es:DescribeElasticsearchInstanceTypeLimits.

---

##### `DescribeInboundConnections`<sup>Required</sup> <a name="DescribeInboundConnections" id="@cdk_utils/iam.es.EsActions.property.DescribeInboundConnections"></a>

```typescript
public readonly DescribeInboundConnections: string;
```

- *Type:* string

[List] es:DescribeInboundConnections.

---

##### `DescribeInboundCrossClusterSearchConnections`<sup>Required</sup> <a name="DescribeInboundCrossClusterSearchConnections" id="@cdk_utils/iam.es.EsActions.property.DescribeInboundCrossClusterSearchConnections"></a>

```typescript
public readonly DescribeInboundCrossClusterSearchConnections: string;
```

- *Type:* string

[List] es:DescribeInboundCrossClusterSearchConnections.

---

##### `DescribeInsightDetails`<sup>Required</sup> <a name="DescribeInsightDetails" id="@cdk_utils/iam.es.EsActions.property.DescribeInsightDetails"></a>

```typescript
public readonly DescribeInsightDetails: string;
```

- *Type:* string

[Read] es:DescribeInsightDetails.

---

##### `DescribeInstanceTypeLimits`<sup>Required</sup> <a name="DescribeInstanceTypeLimits" id="@cdk_utils/iam.es.EsActions.property.DescribeInstanceTypeLimits"></a>

```typescript
public readonly DescribeInstanceTypeLimits: string;
```

- *Type:* string

[List] es:DescribeInstanceTypeLimits.

---

##### `DescribeOutboundConnections`<sup>Required</sup> <a name="DescribeOutboundConnections" id="@cdk_utils/iam.es.EsActions.property.DescribeOutboundConnections"></a>

```typescript
public readonly DescribeOutboundConnections: string;
```

- *Type:* string

[List] es:DescribeOutboundConnections.

---

##### `DescribeOutboundCrossClusterSearchConnections`<sup>Required</sup> <a name="DescribeOutboundCrossClusterSearchConnections" id="@cdk_utils/iam.es.EsActions.property.DescribeOutboundCrossClusterSearchConnections"></a>

```typescript
public readonly DescribeOutboundCrossClusterSearchConnections: string;
```

- *Type:* string

[List] es:DescribeOutboundCrossClusterSearchConnections.

---

##### `DescribePackages`<sup>Required</sup> <a name="DescribePackages" id="@cdk_utils/iam.es.EsActions.property.DescribePackages"></a>

```typescript
public readonly DescribePackages: string;
```

- *Type:* string

[Read] es:DescribePackages.

---

##### `DescribeReservedElasticsearchInstanceOfferings`<sup>Required</sup> <a name="DescribeReservedElasticsearchInstanceOfferings" id="@cdk_utils/iam.es.EsActions.property.DescribeReservedElasticsearchInstanceOfferings"></a>

```typescript
public readonly DescribeReservedElasticsearchInstanceOfferings: string;
```

- *Type:* string

[List] es:DescribeReservedElasticsearchInstanceOfferings.

---

##### `DescribeReservedElasticsearchInstances`<sup>Required</sup> <a name="DescribeReservedElasticsearchInstances" id="@cdk_utils/iam.es.EsActions.property.DescribeReservedElasticsearchInstances"></a>

```typescript
public readonly DescribeReservedElasticsearchInstances: string;
```

- *Type:* string

[List] es:DescribeReservedElasticsearchInstances.

---

##### `DescribeReservedInstanceOfferings`<sup>Required</sup> <a name="DescribeReservedInstanceOfferings" id="@cdk_utils/iam.es.EsActions.property.DescribeReservedInstanceOfferings"></a>

```typescript
public readonly DescribeReservedInstanceOfferings: string;
```

- *Type:* string

[List] es:DescribeReservedInstanceOfferings.

---

##### `DescribeReservedInstances`<sup>Required</sup> <a name="DescribeReservedInstances" id="@cdk_utils/iam.es.EsActions.property.DescribeReservedInstances"></a>

```typescript
public readonly DescribeReservedInstances: string;
```

- *Type:* string

[List] es:DescribeReservedInstances.

---

##### `DescribeVpcEndpoints`<sup>Required</sup> <a name="DescribeVpcEndpoints" id="@cdk_utils/iam.es.EsActions.property.DescribeVpcEndpoints"></a>

```typescript
public readonly DescribeVpcEndpoints: string;
```

- *Type:* string

[List] es:DescribeVpcEndpoints.

---

##### `DetachDataSource`<sup>Required</sup> <a name="DetachDataSource" id="@cdk_utils/iam.es.EsActions.property.DetachDataSource"></a>

```typescript
public readonly DetachDataSource: string;
```

- *Type:* string

[Write] es:DetachDataSource.

---

##### `DissociatePackage`<sup>Required</sup> <a name="DissociatePackage" id="@cdk_utils/iam.es.EsActions.property.DissociatePackage"></a>

```typescript
public readonly DissociatePackage: string;
```

- *Type:* string

[Write] es:DissociatePackage.

---

##### `DissociatePackages`<sup>Required</sup> <a name="DissociatePackages" id="@cdk_utils/iam.es.EsActions.property.DissociatePackages"></a>

```typescript
public readonly DissociatePackages: string;
```

- *Type:* string

[Write] es:DissociatePackages.

---

##### `ESCrossClusterGet`<sup>Required</sup> <a name="ESCrossClusterGet" id="@cdk_utils/iam.es.EsActions.property.ESCrossClusterGet"></a>

```typescript
public readonly ESCrossClusterGet: string;
```

- *Type:* string

[Read] es:ESCrossClusterGet.

---

##### `ESHttpDelete`<sup>Required</sup> <a name="ESHttpDelete" id="@cdk_utils/iam.es.EsActions.property.ESHttpDelete"></a>

```typescript
public readonly ESHttpDelete: string;
```

- *Type:* string

[Write] es:ESHttpDelete.

---

##### `ESHttpGet`<sup>Required</sup> <a name="ESHttpGet" id="@cdk_utils/iam.es.EsActions.property.ESHttpGet"></a>

```typescript
public readonly ESHttpGet: string;
```

- *Type:* string

[Read] es:ESHttpGet.

---

##### `ESHttpHead`<sup>Required</sup> <a name="ESHttpHead" id="@cdk_utils/iam.es.EsActions.property.ESHttpHead"></a>

```typescript
public readonly ESHttpHead: string;
```

- *Type:* string

[Read] es:ESHttpHead.

---

##### `ESHttpPatch`<sup>Required</sup> <a name="ESHttpPatch" id="@cdk_utils/iam.es.EsActions.property.ESHttpPatch"></a>

```typescript
public readonly ESHttpPatch: string;
```

- *Type:* string

[Write] es:ESHttpPatch.

---

##### `ESHttpPost`<sup>Required</sup> <a name="ESHttpPost" id="@cdk_utils/iam.es.EsActions.property.ESHttpPost"></a>

```typescript
public readonly ESHttpPost: string;
```

- *Type:* string

[Write] es:ESHttpPost.

---

##### `ESHttpPut`<sup>Required</sup> <a name="ESHttpPut" id="@cdk_utils/iam.es.EsActions.property.ESHttpPut"></a>

```typescript
public readonly ESHttpPut: string;
```

- *Type:* string

[Write] es:ESHttpPut.

---

##### `InsightFeedback`<sup>Required</sup> <a name="InsightFeedback" id="@cdk_utils/iam.es.EsActions.property.InsightFeedback"></a>

```typescript
public readonly InsightFeedback: string;
```

- *Type:* string

[Write] es:InsightFeedback.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.es.EsActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] es:ListApplications.

---

##### `ListDataSourceAttachments`<sup>Required</sup> <a name="ListDataSourceAttachments" id="@cdk_utils/iam.es.EsActions.property.ListDataSourceAttachments"></a>

```typescript
public readonly ListDataSourceAttachments: string;
```

- *Type:* string

[List] es:ListDataSourceAttachments.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.es.EsActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] es:ListDataSources.

---

##### `ListDirectQueryDataSources`<sup>Required</sup> <a name="ListDirectQueryDataSources" id="@cdk_utils/iam.es.EsActions.property.ListDirectQueryDataSources"></a>

```typescript
public readonly ListDirectQueryDataSources: string;
```

- *Type:* string

[List] es:ListDirectQueryDataSources.

---

##### `ListDomainMaintenances`<sup>Required</sup> <a name="ListDomainMaintenances" id="@cdk_utils/iam.es.EsActions.property.ListDomainMaintenances"></a>

```typescript
public readonly ListDomainMaintenances: string;
```

- *Type:* string

[List] es:ListDomainMaintenances.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.es.EsActions.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string;
```

- *Type:* string

[List] es:ListDomainNames.

---

##### `ListDomainsForPackage`<sup>Required</sup> <a name="ListDomainsForPackage" id="@cdk_utils/iam.es.EsActions.property.ListDomainsForPackage"></a>

```typescript
public readonly ListDomainsForPackage: string;
```

- *Type:* string

[List] es:ListDomainsForPackage.

---

##### `ListElasticsearchInstanceTypeDetails`<sup>Required</sup> <a name="ListElasticsearchInstanceTypeDetails" id="@cdk_utils/iam.es.EsActions.property.ListElasticsearchInstanceTypeDetails"></a>

```typescript
public readonly ListElasticsearchInstanceTypeDetails: string;
```

- *Type:* string

[List] es:ListElasticsearchInstanceTypeDetails.

---

##### `ListElasticsearchInstanceTypes`<sup>Required</sup> <a name="ListElasticsearchInstanceTypes" id="@cdk_utils/iam.es.EsActions.property.ListElasticsearchInstanceTypes"></a>

```typescript
public readonly ListElasticsearchInstanceTypes: string;
```

- *Type:* string

[List] es:ListElasticsearchInstanceTypes.

---

##### `ListElasticsearchVersions`<sup>Required</sup> <a name="ListElasticsearchVersions" id="@cdk_utils/iam.es.EsActions.property.ListElasticsearchVersions"></a>

```typescript
public readonly ListElasticsearchVersions: string;
```

- *Type:* string

[List] es:ListElasticsearchVersions.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.es.EsActions.property.ListInsights"></a>

```typescript
public readonly ListInsights: string;
```

- *Type:* string

[List] es:ListInsights.

---

##### `ListInstanceTypeDetails`<sup>Required</sup> <a name="ListInstanceTypeDetails" id="@cdk_utils/iam.es.EsActions.property.ListInstanceTypeDetails"></a>

```typescript
public readonly ListInstanceTypeDetails: string;
```

- *Type:* string

[List] es:ListInstanceTypeDetails.

---

##### `ListMigrations`<sup>Required</sup> <a name="ListMigrations" id="@cdk_utils/iam.es.EsActions.property.ListMigrations"></a>

```typescript
public readonly ListMigrations: string;
```

- *Type:* string

[List] es:ListMigrations.

---

##### `ListPackagesForDomain`<sup>Required</sup> <a name="ListPackagesForDomain" id="@cdk_utils/iam.es.EsActions.property.ListPackagesForDomain"></a>

```typescript
public readonly ListPackagesForDomain: string;
```

- *Type:* string

[List] es:ListPackagesForDomain.

---

##### `ListScheduledActions`<sup>Required</sup> <a name="ListScheduledActions" id="@cdk_utils/iam.es.EsActions.property.ListScheduledActions"></a>

```typescript
public readonly ListScheduledActions: string;
```

- *Type:* string

[List] es:ListScheduledActions.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.es.EsActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] es:ListTags.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.es.EsActions.property.ListVersions"></a>

```typescript
public readonly ListVersions: string;
```

- *Type:* string

[List] es:ListVersions.

---

##### `ListVpcEndpointAccess`<sup>Required</sup> <a name="ListVpcEndpointAccess" id="@cdk_utils/iam.es.EsActions.property.ListVpcEndpointAccess"></a>

```typescript
public readonly ListVpcEndpointAccess: string;
```

- *Type:* string

[List] es:ListVpcEndpointAccess.

---

##### `ListVpcEndpoints`<sup>Required</sup> <a name="ListVpcEndpoints" id="@cdk_utils/iam.es.EsActions.property.ListVpcEndpoints"></a>

```typescript
public readonly ListVpcEndpoints: string;
```

- *Type:* string

[List] es:ListVpcEndpoints.

---

##### `ListVpcEndpointsForDomain`<sup>Required</sup> <a name="ListVpcEndpointsForDomain" id="@cdk_utils/iam.es.EsActions.property.ListVpcEndpointsForDomain"></a>

```typescript
public readonly ListVpcEndpointsForDomain: string;
```

- *Type:* string

[List] es:ListVpcEndpointsForDomain.

---

##### `PurchaseReservedElasticsearchInstanceOffering`<sup>Required</sup> <a name="PurchaseReservedElasticsearchInstanceOffering" id="@cdk_utils/iam.es.EsActions.property.PurchaseReservedElasticsearchInstanceOffering"></a>

```typescript
public readonly PurchaseReservedElasticsearchInstanceOffering: string;
```

- *Type:* string

[Write] es:PurchaseReservedElasticsearchInstanceOffering.

---

##### `PurchaseReservedInstanceOffering`<sup>Required</sup> <a name="PurchaseReservedInstanceOffering" id="@cdk_utils/iam.es.EsActions.property.PurchaseReservedInstanceOffering"></a>

```typescript
public readonly PurchaseReservedInstanceOffering: string;
```

- *Type:* string

[Write] es:PurchaseReservedInstanceOffering.

---

##### `PutDefaultApplicationSetting`<sup>Required</sup> <a name="PutDefaultApplicationSetting" id="@cdk_utils/iam.es.EsActions.property.PutDefaultApplicationSetting"></a>

```typescript
public readonly PutDefaultApplicationSetting: string;
```

- *Type:* string

[Write] es:PutDefaultApplicationSetting.

---

##### `RegisterCapability`<sup>Required</sup> <a name="RegisterCapability" id="@cdk_utils/iam.es.EsActions.property.RegisterCapability"></a>

```typescript
public readonly RegisterCapability: string;
```

- *Type:* string

[Write] es:RegisterCapability.

---

##### `RejectInboundConnection`<sup>Required</sup> <a name="RejectInboundConnection" id="@cdk_utils/iam.es.EsActions.property.RejectInboundConnection"></a>

```typescript
public readonly RejectInboundConnection: string;
```

- *Type:* string

[Write] es:RejectInboundConnection.

---

##### `RejectInboundCrossClusterSearchConnection`<sup>Required</sup> <a name="RejectInboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsActions.property.RejectInboundCrossClusterSearchConnection"></a>

```typescript
public readonly RejectInboundCrossClusterSearchConnection: string;
```

- *Type:* string

[Write] es:RejectInboundCrossClusterSearchConnection.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.es.EsActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] es:RemoveTags.

---

##### `RevokeVpcEndpointAccess`<sup>Required</sup> <a name="RevokeVpcEndpointAccess" id="@cdk_utils/iam.es.EsActions.property.RevokeVpcEndpointAccess"></a>

```typescript
public readonly RevokeVpcEndpointAccess: string;
```

- *Type:* string

[Write] es:RevokeVpcEndpointAccess.

---

##### `RollbackElasticsearchServiceSoftwareUpdate`<sup>Required</sup> <a name="RollbackElasticsearchServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsActions.property.RollbackElasticsearchServiceSoftwareUpdate"></a>

```typescript
public readonly RollbackElasticsearchServiceSoftwareUpdate: string;
```

- *Type:* string

[Write] es:RollbackElasticsearchServiceSoftwareUpdate.

---

##### `RollbackServiceSoftwareUpdate`<sup>Required</sup> <a name="RollbackServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsActions.property.RollbackServiceSoftwareUpdate"></a>

```typescript
public readonly RollbackServiceSoftwareUpdate: string;
```

- *Type:* string

[Write] es:RollbackServiceSoftwareUpdate.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.es.EsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDomainMaintenance`<sup>Required</sup> <a name="StartDomainMaintenance" id="@cdk_utils/iam.es.EsActions.property.StartDomainMaintenance"></a>

```typescript
public readonly StartDomainMaintenance: string;
```

- *Type:* string

[Write] es:StartDomainMaintenance.

---

##### `StartElasticsearchServiceSoftwareUpdate`<sup>Required</sup> <a name="StartElasticsearchServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsActions.property.StartElasticsearchServiceSoftwareUpdate"></a>

```typescript
public readonly StartElasticsearchServiceSoftwareUpdate: string;
```

- *Type:* string

[Write] es:StartElasticsearchServiceSoftwareUpdate.

---

##### `StartMigration`<sup>Required</sup> <a name="StartMigration" id="@cdk_utils/iam.es.EsActions.property.StartMigration"></a>

```typescript
public readonly StartMigration: string;
```

- *Type:* string

[Write] es:StartMigration.

---

##### `StartServiceSoftwareUpdate`<sup>Required</sup> <a name="StartServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsActions.property.StartServiceSoftwareUpdate"></a>

```typescript
public readonly StartServiceSoftwareUpdate: string;
```

- *Type:* string

[Write] es:StartServiceSoftwareUpdate.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.es.EsActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] es:UpdateApplication.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.es.EsActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] es:UpdateDataSource.

---

##### `UpdateDirectQueryDataSource`<sup>Required</sup> <a name="UpdateDirectQueryDataSource" id="@cdk_utils/iam.es.EsActions.property.UpdateDirectQueryDataSource"></a>

```typescript
public readonly UpdateDirectQueryDataSource: string;
```

- *Type:* string

[Write] es:UpdateDirectQueryDataSource.

---

##### `UpdateDomainConfig`<sup>Required</sup> <a name="UpdateDomainConfig" id="@cdk_utils/iam.es.EsActions.property.UpdateDomainConfig"></a>

```typescript
public readonly UpdateDomainConfig: string;
```

- *Type:* string

[Write] es:UpdateDomainConfig.

---

##### `UpdateElasticsearchDomainConfig`<sup>Required</sup> <a name="UpdateElasticsearchDomainConfig" id="@cdk_utils/iam.es.EsActions.property.UpdateElasticsearchDomainConfig"></a>

```typescript
public readonly UpdateElasticsearchDomainConfig: string;
```

- *Type:* string

[Write] es:UpdateElasticsearchDomainConfig.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.es.EsActions.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string;
```

- *Type:* string

[Write] es:UpdateIndex.

---

##### `UpdatePackage`<sup>Required</sup> <a name="UpdatePackage" id="@cdk_utils/iam.es.EsActions.property.UpdatePackage"></a>

```typescript
public readonly UpdatePackage: string;
```

- *Type:* string

[Write] es:UpdatePackage.

---

##### `UpdatePackageScope`<sup>Required</sup> <a name="UpdatePackageScope" id="@cdk_utils/iam.es.EsActions.property.UpdatePackageScope"></a>

```typescript
public readonly UpdatePackageScope: string;
```

- *Type:* string

[Write] es:UpdatePackageScope.

---

##### `UpdateScheduledAction`<sup>Required</sup> <a name="UpdateScheduledAction" id="@cdk_utils/iam.es.EsActions.property.UpdateScheduledAction"></a>

```typescript
public readonly UpdateScheduledAction: string;
```

- *Type:* string

[Write] es:UpdateScheduledAction.

---

##### `UpdateVpcEndpoint`<sup>Required</sup> <a name="UpdateVpcEndpoint" id="@cdk_utils/iam.es.EsActions.property.UpdateVpcEndpoint"></a>

```typescript
public readonly UpdateVpcEndpoint: string;
```

- *Type:* string

[Write] es:UpdateVpcEndpoint.

---

##### `UpgradeDomain`<sup>Required</sup> <a name="UpgradeDomain" id="@cdk_utils/iam.es.EsActions.property.UpgradeDomain"></a>

```typescript
public readonly UpgradeDomain: string;
```

- *Type:* string

[Write] es:UpgradeDomain.

---

##### `UpgradeElasticsearchDomain`<sup>Required</sup> <a name="UpgradeElasticsearchDomain" id="@cdk_utils/iam.es.EsActions.property.UpgradeElasticsearchDomain"></a>

```typescript
public readonly UpgradeElasticsearchDomain: string;
```

- *Type:* string

[Write] es:UpgradeElasticsearchDomain.

---

### EsConditions <a name="EsConditions" id="@cdk_utils/iam.es.EsConditions"></a>

Condition key constants and builders for es.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.es.EsConditions.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

new es.EsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.es.EsConditions.requestTag"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.es.EsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.es.EsConditions.resourceTag"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.es.EsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.es.EsConditions.tagKeys"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.es.EsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.AddDirectQueryDataSourceConditionKeys">AddDirectQueryDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddDirectQueryDataSource action. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.AddTagsConditionKeys">AddTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTags action. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.CreateDomainConditionKeys">CreateDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomain action. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.CreateElasticsearchDomainConditionKeys">CreateElasticsearchDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateElasticsearchDomain action. |
| <code><a href="#@cdk_utils/iam.es.EsConditions.property.RemoveTagsConditionKeys">RemoveTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTags action. |

---

##### `AddDirectQueryDataSourceConditionKeys`<sup>Required</sup> <a name="AddDirectQueryDataSourceConditionKeys" id="@cdk_utils/iam.es.EsConditions.property.AddDirectQueryDataSourceConditionKeys"></a>

```typescript
public readonly AddDirectQueryDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddDirectQueryDataSource action.

---

##### `AddTagsConditionKeys`<sup>Required</sup> <a name="AddTagsConditionKeys" id="@cdk_utils/iam.es.EsConditions.property.AddTagsConditionKeys"></a>

```typescript
public readonly AddTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTags action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.es.EsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.es.EsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.es.EsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.es.EsConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateDomainConditionKeys`<sup>Required</sup> <a name="CreateDomainConditionKeys" id="@cdk_utils/iam.es.EsConditions.property.CreateDomainConditionKeys"></a>

```typescript
public readonly CreateDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomain action.

---

##### `CreateElasticsearchDomainConditionKeys`<sup>Required</sup> <a name="CreateElasticsearchDomainConditionKeys" id="@cdk_utils/iam.es.EsConditions.property.CreateElasticsearchDomainConditionKeys"></a>

```typescript
public readonly CreateElasticsearchDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateElasticsearchDomain action.

---

##### `RemoveTagsConditionKeys`<sup>Required</sup> <a name="RemoveTagsConditionKeys" id="@cdk_utils/iam.es.EsConditions.property.RemoveTagsConditionKeys"></a>

```typescript
public readonly RemoveTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTags action.

---

### EsOperations <a name="EsOperations" id="@cdk_utils/iam.es.EsOperations"></a>

API operation to required IAM actions mapping for es.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.es.EsOperations.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

new es.EsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.AcceptInboundCrossClusterSearchConnection">AcceptInboundCrossClusterSearchConnection</a></code> | <code>string[]</code> | IAM actions required for the AcceptInboundCrossClusterSearchConnection API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.AssociatePackage">AssociatePackage</a></code> | <code>string[]</code> | IAM actions required for the AssociatePackage API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.AuthorizeVpcEndpointAccess">AuthorizeVpcEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeVpcEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.CancelDomainConfigChange">CancelDomainConfigChange</a></code> | <code>string[]</code> | IAM actions required for the CancelDomainConfigChange API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.CancelElasticsearchServiceSoftwareUpdate">CancelElasticsearchServiceSoftwareUpdate</a></code> | <code>string[]</code> | IAM actions required for the CancelElasticsearchServiceSoftwareUpdate API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.CreateElasticsearchDomain">CreateElasticsearchDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateElasticsearchDomain API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.CreateOutboundCrossClusterSearchConnection">CreateOutboundCrossClusterSearchConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateOutboundCrossClusterSearchConnection API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.CreatePackage">CreatePackage</a></code> | <code>string[]</code> | IAM actions required for the CreatePackage API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.CreateVpcEndpoint">CreateVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DeleteElasticsearchDomain">DeleteElasticsearchDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteElasticsearchDomain API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DeleteElasticsearchServiceRole">DeleteElasticsearchServiceRole</a></code> | <code>string[]</code> | IAM actions required for the DeleteElasticsearchServiceRole API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DeleteInboundCrossClusterSearchConnection">DeleteInboundCrossClusterSearchConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteInboundCrossClusterSearchConnection API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DeleteOutboundCrossClusterSearchConnection">DeleteOutboundCrossClusterSearchConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteOutboundCrossClusterSearchConnection API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DeletePackage">DeletePackage</a></code> | <code>string[]</code> | IAM actions required for the DeletePackage API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DeleteVpcEndpoint">DeleteVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeDomainAutoTunes">DescribeDomainAutoTunes</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainAutoTunes API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeDomainChangeProgress">DescribeDomainChangeProgress</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomainChangeProgress API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchDomain">DescribeElasticsearchDomain</a></code> | <code>string[]</code> | IAM actions required for the DescribeElasticsearchDomain API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchDomainConfig">DescribeElasticsearchDomainConfig</a></code> | <code>string[]</code> | IAM actions required for the DescribeElasticsearchDomainConfig API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchDomains">DescribeElasticsearchDomains</a></code> | <code>string[]</code> | IAM actions required for the DescribeElasticsearchDomains API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchInstanceTypeLimits">DescribeElasticsearchInstanceTypeLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeElasticsearchInstanceTypeLimits API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeInboundCrossClusterSearchConnections">DescribeInboundCrossClusterSearchConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeInboundCrossClusterSearchConnections API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeOutboundCrossClusterSearchConnections">DescribeOutboundCrossClusterSearchConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeOutboundCrossClusterSearchConnections API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribePackages">DescribePackages</a></code> | <code>string[]</code> | IAM actions required for the DescribePackages API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeReservedElasticsearchInstanceOfferings">DescribeReservedElasticsearchInstanceOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedElasticsearchInstanceOfferings API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeReservedElasticsearchInstances">DescribeReservedElasticsearchInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedElasticsearchInstances API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DescribeVpcEndpoints">DescribeVpcEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcEndpoints API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.DissociatePackage">DissociatePackage</a></code> | <code>string[]</code> | IAM actions required for the DissociatePackage API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListDomainNames">ListDomainNames</a></code> | <code>string[]</code> | IAM actions required for the ListDomainNames API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListDomainsForPackage">ListDomainsForPackage</a></code> | <code>string[]</code> | IAM actions required for the ListDomainsForPackage API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListElasticsearchInstanceTypes">ListElasticsearchInstanceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListElasticsearchInstanceTypes API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListElasticsearchVersions">ListElasticsearchVersions</a></code> | <code>string[]</code> | IAM actions required for the ListElasticsearchVersions API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListPackagesForDomain">ListPackagesForDomain</a></code> | <code>string[]</code> | IAM actions required for the ListPackagesForDomain API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListVpcEndpointAccess">ListVpcEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListVpcEndpoints">ListVpcEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpoints API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.ListVpcEndpointsForDomain">ListVpcEndpointsForDomain</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpointsForDomain API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.opGetCompatibleElasticsearchVersions">opGetCompatibleElasticsearchVersions</a></code> | <code>string[]</code> | IAM actions required for the GetCompatibleElasticsearchVersions API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.opGetPackageVersionHistory">opGetPackageVersionHistory</a></code> | <code>string[]</code> | IAM actions required for the GetPackageVersionHistory API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.opGetUpgradeHistory">opGetUpgradeHistory</a></code> | <code>string[]</code> | IAM actions required for the GetUpgradeHistory API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.opGetUpgradeStatus">opGetUpgradeStatus</a></code> | <code>string[]</code> | IAM actions required for the GetUpgradeStatus API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.PurchaseReservedElasticsearchInstanceOffering">PurchaseReservedElasticsearchInstanceOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseReservedElasticsearchInstanceOffering API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.RejectInboundCrossClusterSearchConnection">RejectInboundCrossClusterSearchConnection</a></code> | <code>string[]</code> | IAM actions required for the RejectInboundCrossClusterSearchConnection API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.RemoveTags">RemoveTags</a></code> | <code>string[]</code> | IAM actions required for the RemoveTags API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.RevokeVpcEndpointAccess">RevokeVpcEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the RevokeVpcEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.StartElasticsearchServiceSoftwareUpdate">StartElasticsearchServiceSoftwareUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartElasticsearchServiceSoftwareUpdate API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.UpdateElasticsearchDomainConfig">UpdateElasticsearchDomainConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateElasticsearchDomainConfig API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.UpdatePackage">UpdatePackage</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackage API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.UpdateVpcEndpoint">UpdateVpcEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcEndpoint API call. |
| <code><a href="#@cdk_utils/iam.es.EsOperations.property.UpgradeElasticsearchDomain">UpgradeElasticsearchDomain</a></code> | <code>string[]</code> | IAM actions required for the UpgradeElasticsearchDomain API call. |

---

##### `AcceptInboundCrossClusterSearchConnection`<sup>Required</sup> <a name="AcceptInboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsOperations.property.AcceptInboundCrossClusterSearchConnection"></a>

```typescript
public readonly AcceptInboundCrossClusterSearchConnection: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInboundCrossClusterSearchConnection API call.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.es.EsOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `AssociatePackage`<sup>Required</sup> <a name="AssociatePackage" id="@cdk_utils/iam.es.EsOperations.property.AssociatePackage"></a>

```typescript
public readonly AssociatePackage: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePackage API call.

---

##### `AuthorizeVpcEndpointAccess`<sup>Required</sup> <a name="AuthorizeVpcEndpointAccess" id="@cdk_utils/iam.es.EsOperations.property.AuthorizeVpcEndpointAccess"></a>

```typescript
public readonly AuthorizeVpcEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeVpcEndpointAccess API call.

---

##### `CancelDomainConfigChange`<sup>Required</sup> <a name="CancelDomainConfigChange" id="@cdk_utils/iam.es.EsOperations.property.CancelDomainConfigChange"></a>

```typescript
public readonly CancelDomainConfigChange: string[];
```

- *Type:* string[]

IAM actions required for the CancelDomainConfigChange API call.

---

##### `CancelElasticsearchServiceSoftwareUpdate`<sup>Required</sup> <a name="CancelElasticsearchServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsOperations.property.CancelElasticsearchServiceSoftwareUpdate"></a>

```typescript
public readonly CancelElasticsearchServiceSoftwareUpdate: string[];
```

- *Type:* string[]

IAM actions required for the CancelElasticsearchServiceSoftwareUpdate API call.

---

##### `CreateElasticsearchDomain`<sup>Required</sup> <a name="CreateElasticsearchDomain" id="@cdk_utils/iam.es.EsOperations.property.CreateElasticsearchDomain"></a>

```typescript
public readonly CreateElasticsearchDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateElasticsearchDomain API call.

---

##### `CreateOutboundCrossClusterSearchConnection`<sup>Required</sup> <a name="CreateOutboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsOperations.property.CreateOutboundCrossClusterSearchConnection"></a>

```typescript
public readonly CreateOutboundCrossClusterSearchConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateOutboundCrossClusterSearchConnection API call.

---

##### `CreatePackage`<sup>Required</sup> <a name="CreatePackage" id="@cdk_utils/iam.es.EsOperations.property.CreatePackage"></a>

```typescript
public readonly CreatePackage: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackage API call.

---

##### `CreateVpcEndpoint`<sup>Required</sup> <a name="CreateVpcEndpoint" id="@cdk_utils/iam.es.EsOperations.property.CreateVpcEndpoint"></a>

```typescript
public readonly CreateVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcEndpoint API call.

---

##### `DeleteElasticsearchDomain`<sup>Required</sup> <a name="DeleteElasticsearchDomain" id="@cdk_utils/iam.es.EsOperations.property.DeleteElasticsearchDomain"></a>

```typescript
public readonly DeleteElasticsearchDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteElasticsearchDomain API call.

---

##### `DeleteElasticsearchServiceRole`<sup>Required</sup> <a name="DeleteElasticsearchServiceRole" id="@cdk_utils/iam.es.EsOperations.property.DeleteElasticsearchServiceRole"></a>

```typescript
public readonly DeleteElasticsearchServiceRole: string[];
```

- *Type:* string[]

IAM actions required for the DeleteElasticsearchServiceRole API call.

---

##### `DeleteInboundCrossClusterSearchConnection`<sup>Required</sup> <a name="DeleteInboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsOperations.property.DeleteInboundCrossClusterSearchConnection"></a>

```typescript
public readonly DeleteInboundCrossClusterSearchConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInboundCrossClusterSearchConnection API call.

---

##### `DeleteOutboundCrossClusterSearchConnection`<sup>Required</sup> <a name="DeleteOutboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsOperations.property.DeleteOutboundCrossClusterSearchConnection"></a>

```typescript
public readonly DeleteOutboundCrossClusterSearchConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOutboundCrossClusterSearchConnection API call.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.es.EsOperations.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackage API call.

---

##### `DeleteVpcEndpoint`<sup>Required</sup> <a name="DeleteVpcEndpoint" id="@cdk_utils/iam.es.EsOperations.property.DeleteVpcEndpoint"></a>

```typescript
public readonly DeleteVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcEndpoint API call.

---

##### `DescribeDomainAutoTunes`<sup>Required</sup> <a name="DescribeDomainAutoTunes" id="@cdk_utils/iam.es.EsOperations.property.DescribeDomainAutoTunes"></a>

```typescript
public readonly DescribeDomainAutoTunes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainAutoTunes API call.

---

##### `DescribeDomainChangeProgress`<sup>Required</sup> <a name="DescribeDomainChangeProgress" id="@cdk_utils/iam.es.EsOperations.property.DescribeDomainChangeProgress"></a>

```typescript
public readonly DescribeDomainChangeProgress: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomainChangeProgress API call.

---

##### `DescribeElasticsearchDomain`<sup>Required</sup> <a name="DescribeElasticsearchDomain" id="@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchDomain"></a>

```typescript
public readonly DescribeElasticsearchDomain: string[];
```

- *Type:* string[]

IAM actions required for the DescribeElasticsearchDomain API call.

---

##### `DescribeElasticsearchDomainConfig`<sup>Required</sup> <a name="DescribeElasticsearchDomainConfig" id="@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchDomainConfig"></a>

```typescript
public readonly DescribeElasticsearchDomainConfig: string[];
```

- *Type:* string[]

IAM actions required for the DescribeElasticsearchDomainConfig API call.

---

##### `DescribeElasticsearchDomains`<sup>Required</sup> <a name="DescribeElasticsearchDomains" id="@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchDomains"></a>

```typescript
public readonly DescribeElasticsearchDomains: string[];
```

- *Type:* string[]

IAM actions required for the DescribeElasticsearchDomains API call.

---

##### `DescribeElasticsearchInstanceTypeLimits`<sup>Required</sup> <a name="DescribeElasticsearchInstanceTypeLimits" id="@cdk_utils/iam.es.EsOperations.property.DescribeElasticsearchInstanceTypeLimits"></a>

```typescript
public readonly DescribeElasticsearchInstanceTypeLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeElasticsearchInstanceTypeLimits API call.

---

##### `DescribeInboundCrossClusterSearchConnections`<sup>Required</sup> <a name="DescribeInboundCrossClusterSearchConnections" id="@cdk_utils/iam.es.EsOperations.property.DescribeInboundCrossClusterSearchConnections"></a>

```typescript
public readonly DescribeInboundCrossClusterSearchConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInboundCrossClusterSearchConnections API call.

---

##### `DescribeOutboundCrossClusterSearchConnections`<sup>Required</sup> <a name="DescribeOutboundCrossClusterSearchConnections" id="@cdk_utils/iam.es.EsOperations.property.DescribeOutboundCrossClusterSearchConnections"></a>

```typescript
public readonly DescribeOutboundCrossClusterSearchConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOutboundCrossClusterSearchConnections API call.

---

##### `DescribePackages`<sup>Required</sup> <a name="DescribePackages" id="@cdk_utils/iam.es.EsOperations.property.DescribePackages"></a>

```typescript
public readonly DescribePackages: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackages API call.

---

##### `DescribeReservedElasticsearchInstanceOfferings`<sup>Required</sup> <a name="DescribeReservedElasticsearchInstanceOfferings" id="@cdk_utils/iam.es.EsOperations.property.DescribeReservedElasticsearchInstanceOfferings"></a>

```typescript
public readonly DescribeReservedElasticsearchInstanceOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedElasticsearchInstanceOfferings API call.

---

##### `DescribeReservedElasticsearchInstances`<sup>Required</sup> <a name="DescribeReservedElasticsearchInstances" id="@cdk_utils/iam.es.EsOperations.property.DescribeReservedElasticsearchInstances"></a>

```typescript
public readonly DescribeReservedElasticsearchInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedElasticsearchInstances API call.

---

##### `DescribeVpcEndpoints`<sup>Required</sup> <a name="DescribeVpcEndpoints" id="@cdk_utils/iam.es.EsOperations.property.DescribeVpcEndpoints"></a>

```typescript
public readonly DescribeVpcEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcEndpoints API call.

---

##### `DissociatePackage`<sup>Required</sup> <a name="DissociatePackage" id="@cdk_utils/iam.es.EsOperations.property.DissociatePackage"></a>

```typescript
public readonly DissociatePackage: string[];
```

- *Type:* string[]

IAM actions required for the DissociatePackage API call.

---

##### `ListDomainNames`<sup>Required</sup> <a name="ListDomainNames" id="@cdk_utils/iam.es.EsOperations.property.ListDomainNames"></a>

```typescript
public readonly ListDomainNames: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainNames API call.

---

##### `ListDomainsForPackage`<sup>Required</sup> <a name="ListDomainsForPackage" id="@cdk_utils/iam.es.EsOperations.property.ListDomainsForPackage"></a>

```typescript
public readonly ListDomainsForPackage: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainsForPackage API call.

---

##### `ListElasticsearchInstanceTypes`<sup>Required</sup> <a name="ListElasticsearchInstanceTypes" id="@cdk_utils/iam.es.EsOperations.property.ListElasticsearchInstanceTypes"></a>

```typescript
public readonly ListElasticsearchInstanceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListElasticsearchInstanceTypes API call.

---

##### `ListElasticsearchVersions`<sup>Required</sup> <a name="ListElasticsearchVersions" id="@cdk_utils/iam.es.EsOperations.property.ListElasticsearchVersions"></a>

```typescript
public readonly ListElasticsearchVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListElasticsearchVersions API call.

---

##### `ListPackagesForDomain`<sup>Required</sup> <a name="ListPackagesForDomain" id="@cdk_utils/iam.es.EsOperations.property.ListPackagesForDomain"></a>

```typescript
public readonly ListPackagesForDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListPackagesForDomain API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.es.EsOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListVpcEndpointAccess`<sup>Required</sup> <a name="ListVpcEndpointAccess" id="@cdk_utils/iam.es.EsOperations.property.ListVpcEndpointAccess"></a>

```typescript
public readonly ListVpcEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpointAccess API call.

---

##### `ListVpcEndpoints`<sup>Required</sup> <a name="ListVpcEndpoints" id="@cdk_utils/iam.es.EsOperations.property.ListVpcEndpoints"></a>

```typescript
public readonly ListVpcEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpoints API call.

---

##### `ListVpcEndpointsForDomain`<sup>Required</sup> <a name="ListVpcEndpointsForDomain" id="@cdk_utils/iam.es.EsOperations.property.ListVpcEndpointsForDomain"></a>

```typescript
public readonly ListVpcEndpointsForDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpointsForDomain API call.

---

##### `opGetCompatibleElasticsearchVersions`<sup>Required</sup> <a name="opGetCompatibleElasticsearchVersions" id="@cdk_utils/iam.es.EsOperations.property.opGetCompatibleElasticsearchVersions"></a>

```typescript
public readonly opGetCompatibleElasticsearchVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetCompatibleElasticsearchVersions API call.

---

##### `opGetPackageVersionHistory`<sup>Required</sup> <a name="opGetPackageVersionHistory" id="@cdk_utils/iam.es.EsOperations.property.opGetPackageVersionHistory"></a>

```typescript
public readonly opGetPackageVersionHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetPackageVersionHistory API call.

---

##### `opGetUpgradeHistory`<sup>Required</sup> <a name="opGetUpgradeHistory" id="@cdk_utils/iam.es.EsOperations.property.opGetUpgradeHistory"></a>

```typescript
public readonly opGetUpgradeHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetUpgradeHistory API call.

---

##### `opGetUpgradeStatus`<sup>Required</sup> <a name="opGetUpgradeStatus" id="@cdk_utils/iam.es.EsOperations.property.opGetUpgradeStatus"></a>

```typescript
public readonly opGetUpgradeStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetUpgradeStatus API call.

---

##### `PurchaseReservedElasticsearchInstanceOffering`<sup>Required</sup> <a name="PurchaseReservedElasticsearchInstanceOffering" id="@cdk_utils/iam.es.EsOperations.property.PurchaseReservedElasticsearchInstanceOffering"></a>

```typescript
public readonly PurchaseReservedElasticsearchInstanceOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseReservedElasticsearchInstanceOffering API call.

---

##### `RejectInboundCrossClusterSearchConnection`<sup>Required</sup> <a name="RejectInboundCrossClusterSearchConnection" id="@cdk_utils/iam.es.EsOperations.property.RejectInboundCrossClusterSearchConnection"></a>

```typescript
public readonly RejectInboundCrossClusterSearchConnection: string[];
```

- *Type:* string[]

IAM actions required for the RejectInboundCrossClusterSearchConnection API call.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.es.EsOperations.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTags API call.

---

##### `RevokeVpcEndpointAccess`<sup>Required</sup> <a name="RevokeVpcEndpointAccess" id="@cdk_utils/iam.es.EsOperations.property.RevokeVpcEndpointAccess"></a>

```typescript
public readonly RevokeVpcEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the RevokeVpcEndpointAccess API call.

---

##### `StartElasticsearchServiceSoftwareUpdate`<sup>Required</sup> <a name="StartElasticsearchServiceSoftwareUpdate" id="@cdk_utils/iam.es.EsOperations.property.StartElasticsearchServiceSoftwareUpdate"></a>

```typescript
public readonly StartElasticsearchServiceSoftwareUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartElasticsearchServiceSoftwareUpdate API call.

---

##### `UpdateElasticsearchDomainConfig`<sup>Required</sup> <a name="UpdateElasticsearchDomainConfig" id="@cdk_utils/iam.es.EsOperations.property.UpdateElasticsearchDomainConfig"></a>

```typescript
public readonly UpdateElasticsearchDomainConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateElasticsearchDomainConfig API call.

---

##### `UpdatePackage`<sup>Required</sup> <a name="UpdatePackage" id="@cdk_utils/iam.es.EsOperations.property.UpdatePackage"></a>

```typescript
public readonly UpdatePackage: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackage API call.

---

##### `UpdateVpcEndpoint`<sup>Required</sup> <a name="UpdateVpcEndpoint" id="@cdk_utils/iam.es.EsOperations.property.UpdateVpcEndpoint"></a>

```typescript
public readonly UpdateVpcEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcEndpoint API call.

---

##### `UpgradeElasticsearchDomain`<sup>Required</sup> <a name="UpgradeElasticsearchDomain" id="@cdk_utils/iam.es.EsOperations.property.UpgradeElasticsearchDomain"></a>

```typescript
public readonly UpgradeElasticsearchDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeElasticsearchDomain API call.

---

### EsResources <a name="EsResources" id="@cdk_utils/iam.es.EsResources"></a>

ARN builders, validators, and parsers for es resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.es.EsResources.Initializer"></a>

```typescript
import { es } from '@cdk_utils/iam'

new es.EsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.es.EsResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.datasource">datasource</a></code> | Builds an ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.esRole">esRole</a></code> | Builds an ARN for the es_role resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.isValidDatasourceArn">isValidDatasourceArn</a></code> | Validates whether a string is a valid ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.isValidEsRoleArn">isValidEsRoleArn</a></code> | Validates whether a string is a valid ARN for the es_role resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.isValidOpensearchserviceRoleArn">isValidOpensearchserviceRoleArn</a></code> | Validates whether a string is a valid ARN for the opensearchservice_role resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.opensearchserviceRole">opensearchserviceRole</a></code> | Builds an ARN for the opensearchservice_role resource. |
| <code><a href="#@cdk_utils/iam.es.EsResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.es.EsResources.parseDatasourceArn">parseDatasourceArn</a></code> | Parses a datasource ARN into its components. |
| <code><a href="#@cdk_utils/iam.es.EsResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.es.EsResources.parseEsRoleArn">parseEsRoleArn</a></code> | Parses a es_role ARN into its components. |
| <code><a href="#@cdk_utils/iam.es.EsResources.parseOpensearchserviceRoleArn">parseOpensearchserviceRoleArn</a></code> | Parses a opensearchservice_role ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.es.EsResources.application"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.application(props: EsApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.es.EsResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.es.EsApplicationArnProps">EsApplicationArnProps</a>

---

##### `datasource` <a name="datasource" id="@cdk_utils/iam.es.EsResources.datasource"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.datasource(props: EsDatasourceArnProps)
```

Builds an ARN for the datasource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.es.EsResources.datasource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.es.EsDatasourceArnProps">EsDatasourceArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.es.EsResources.domain"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.domain(props: EsDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.es.EsResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.es.EsDomainArnProps">EsDomainArnProps</a>

---

##### `esRole` <a name="esRole" id="@cdk_utils/iam.es.EsResources.esRole"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.esRole(props: EsEsRoleArnProps)
```

Builds an ARN for the es_role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.es.EsResources.esRole.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.es.EsEsRoleArnProps">EsEsRoleArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.es.EsResources.isValidApplicationArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasourceArn` <a name="isValidDatasourceArn" id="@cdk_utils/iam.es.EsResources.isValidDatasourceArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.isValidDatasourceArn(arn: string)
```

Validates whether a string is a valid ARN for the datasource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.isValidDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.es.EsResources.isValidDomainArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEsRoleArn` <a name="isValidEsRoleArn" id="@cdk_utils/iam.es.EsResources.isValidEsRoleArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.isValidEsRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the es_role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.isValidEsRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOpensearchserviceRoleArn` <a name="isValidOpensearchserviceRoleArn" id="@cdk_utils/iam.es.EsResources.isValidOpensearchserviceRoleArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.isValidOpensearchserviceRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the opensearchservice_role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.isValidOpensearchserviceRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `opensearchserviceRole` <a name="opensearchserviceRole" id="@cdk_utils/iam.es.EsResources.opensearchserviceRole"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.opensearchserviceRole(props: EsOpensearchserviceRoleArnProps)
```

Builds an ARN for the opensearchservice_role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.es.EsResources.opensearchserviceRole.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.es.EsOpensearchserviceRoleArnProps">EsOpensearchserviceRoleArnProps</a>

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.es.EsResources.parseApplicationArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasourceArn` <a name="parseDatasourceArn" id="@cdk_utils/iam.es.EsResources.parseDatasourceArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.parseDatasourceArn(arn: string)
```

Parses a datasource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.parseDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.es.EsResources.parseDomainArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEsRoleArn` <a name="parseEsRoleArn" id="@cdk_utils/iam.es.EsResources.parseEsRoleArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.parseEsRoleArn(arn: string)
```

Parses a es_role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.parseEsRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOpensearchserviceRoleArn` <a name="parseOpensearchserviceRoleArn" id="@cdk_utils/iam.es.EsResources.parseOpensearchserviceRoleArn"></a>

```typescript
import { es } from '@cdk_utils/iam'

es.EsResources.parseOpensearchserviceRoleArn(arn: string)
```

Parses a opensearchservice_role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.es.EsResources.parseOpensearchserviceRoleArn.parameter.arn"></a>

- *Type:* string

---




