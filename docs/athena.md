# `athena` Submodule <a name="`athena` Submodule" id="@cdk_utils/iam.athena"></a>


## Structs <a name="Structs" id="Structs"></a>

### AthenaCapacityReservationArnComponents <a name="AthenaCapacityReservationArnComponents" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents"></a>

Parsed components of a capacity-reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaCapacityReservationArnComponents: athena.AthenaCapacityReservationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.capacityReservationName">capacityReservationName</a></code> | <code>string</code> | The CapacityReservationName component. |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `capacityReservationName`<sup>Required</sup> <a name="capacityReservationName" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.capacityReservationName"></a>

```typescript
public readonly capacityReservationName: string;
```

- *Type:* string

The CapacityReservationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AthenaCapacityReservationArnProps <a name="AthenaCapacityReservationArnProps" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnProps"></a>

Properties for building a capacity-reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaCapacityReservationArnProps: athena.AthenaCapacityReservationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.capacityReservationName">capacityReservationName</a></code> | <code>string</code> | The CapacityReservationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `capacityReservationName`<sup>Required</sup> <a name="capacityReservationName" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.capacityReservationName"></a>

```typescript
public readonly capacityReservationName: string;
```

- *Type:* string

The CapacityReservationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaCapacityReservationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AthenaDatacatalogArnComponents <a name="AthenaDatacatalogArnComponents" id="@cdk_utils/iam.athena.AthenaDatacatalogArnComponents"></a>

Parsed components of a datacatalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaDatacatalogArnComponents: athena.AthenaDatacatalogArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.dataCatalogName">dataCatalogName</a></code> | <code>string</code> | The DataCatalogName component. |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataCatalogName`<sup>Required</sup> <a name="dataCatalogName" id="@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.dataCatalogName"></a>

```typescript
public readonly dataCatalogName: string;
```

- *Type:* string

The DataCatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaDatacatalogArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AthenaDatacatalogArnProps <a name="AthenaDatacatalogArnProps" id="@cdk_utils/iam.athena.AthenaDatacatalogArnProps"></a>

Properties for building a datacatalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaDatacatalogArnProps.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaDatacatalogArnProps: athena.AthenaDatacatalogArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.dataCatalogName">dataCatalogName</a></code> | <code>string</code> | The DataCatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataCatalogName`<sup>Required</sup> <a name="dataCatalogName" id="@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.dataCatalogName"></a>

```typescript
public readonly dataCatalogName: string;
```

- *Type:* string

The DataCatalogName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaDatacatalogArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AthenaSessionArnComponents <a name="AthenaSessionArnComponents" id="@cdk_utils/iam.athena.AthenaSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaSessionArnComponents.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaSessionArnComponents: athena.AthenaSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnComponents.property.workGroupName">workGroupName</a></code> | <code>string</code> | The WorkGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.athena.AthenaSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

##### `workGroupName`<sup>Required</sup> <a name="workGroupName" id="@cdk_utils/iam.athena.AthenaSessionArnComponents.property.workGroupName"></a>

```typescript
public readonly workGroupName: string;
```

- *Type:* string

The WorkGroupName component.

---

### AthenaSessionArnProps <a name="AthenaSessionArnProps" id="@cdk_utils/iam.athena.AthenaSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaSessionArnProps.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaSessionArnProps: athena.AthenaSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnProps.property.workGroupName">workGroupName</a></code> | <code>string</code> | The WorkGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.athena.AthenaSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `workGroupName`<sup>Required</sup> <a name="workGroupName" id="@cdk_utils/iam.athena.AthenaSessionArnProps.property.workGroupName"></a>

```typescript
public readonly workGroupName: string;
```

- *Type:* string

The WorkGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AthenaWorkgroupArnComponents <a name="AthenaWorkgroupArnComponents" id="@cdk_utils/iam.athena.AthenaWorkgroupArnComponents"></a>

Parsed components of a workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaWorkgroupArnComponents: athena.AthenaWorkgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.workGroupName">workGroupName</a></code> | <code>string</code> | The WorkGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workGroupName`<sup>Required</sup> <a name="workGroupName" id="@cdk_utils/iam.athena.AthenaWorkgroupArnComponents.property.workGroupName"></a>

```typescript
public readonly workGroupName: string;
```

- *Type:* string

The WorkGroupName component.

---

### AthenaWorkgroupArnProps <a name="AthenaWorkgroupArnProps" id="@cdk_utils/iam.athena.AthenaWorkgroupArnProps"></a>

Properties for building a workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.athena.AthenaWorkgroupArnProps.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

const athenaWorkgroupArnProps: athena.AthenaWorkgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.workGroupName">workGroupName</a></code> | <code>string</code> | The WorkGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workGroupName`<sup>Required</sup> <a name="workGroupName" id="@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.workGroupName"></a>

```typescript
public readonly workGroupName: string;
```

- *Type:* string

The WorkGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.athena.AthenaWorkgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaActions <a name="AthenaActions" id="@cdk_utils/iam.athena.AthenaActions"></a>

IAM action constants for the athena service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.athena.AthenaActions.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

new athena.AthenaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetCalculationExecution">actionGetCalculationExecution</a></code> | <code>string</code> | [Read] athena:GetCalculationExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetCalculationExecutionCode">actionGetCalculationExecutionCode</a></code> | <code>string</code> | [Read] athena:GetCalculationExecutionCode. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetCalculationExecutionStatus">actionGetCalculationExecutionStatus</a></code> | <code>string</code> | [Read] athena:GetCalculationExecutionStatus. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetCapacityAssignmentConfiguration">actionGetCapacityAssignmentConfiguration</a></code> | <code>string</code> | [Read] athena:GetCapacityAssignmentConfiguration. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetCapacityReservation">actionGetCapacityReservation</a></code> | <code>string</code> | [Read] athena:GetCapacityReservation. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetCatalogs">actionGetCatalogs</a></code> | <code>string</code> | [Read] athena:GetCatalogs. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetDatabase">actionGetDatabase</a></code> | <code>string</code> | [Read] athena:GetDatabase. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetDataCatalog">actionGetDataCatalog</a></code> | <code>string</code> | [Read] athena:GetDataCatalog. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetExecutionEngine">actionGetExecutionEngine</a></code> | <code>string</code> | [Read] athena:GetExecutionEngine. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetExecutionEngines">actionGetExecutionEngines</a></code> | <code>string</code> | [Read] athena:GetExecutionEngines. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetNamedQuery">actionGetNamedQuery</a></code> | <code>string</code> | [Read] athena:GetNamedQuery. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetNamespace">actionGetNamespace</a></code> | <code>string</code> | [Read] athena:GetNamespace. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetNamespaces">actionGetNamespaces</a></code> | <code>string</code> | [Read] athena:GetNamespaces. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetNotebookMetadata">actionGetNotebookMetadata</a></code> | <code>string</code> | [Read] athena:GetNotebookMetadata. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetPreparedStatement">actionGetPreparedStatement</a></code> | <code>string</code> | [Read] athena:GetPreparedStatement. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryExecution">actionGetQueryExecution</a></code> | <code>string</code> | [Read] athena:GetQueryExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryExecutions">actionGetQueryExecutions</a></code> | <code>string</code> | [Read] athena:GetQueryExecutions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryResults">actionGetQueryResults</a></code> | <code>string</code> | [Read] athena:GetQueryResults. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryResultsStream">actionGetQueryResultsStream</a></code> | <code>string</code> | [Read] athena:GetQueryResultsStream. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryRuntimeStatistics">actionGetQueryRuntimeStatistics</a></code> | <code>string</code> | [Read] athena:GetQueryRuntimeStatistics. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetResourceDashboard">actionGetResourceDashboard</a></code> | <code>string</code> | [Read] athena:GetResourceDashboard. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] athena:GetSession. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetSessionEndpoint">actionGetSessionEndpoint</a></code> | <code>string</code> | [Write] athena:GetSessionEndpoint. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetSessionStatus">actionGetSessionStatus</a></code> | <code>string</code> | [Read] athena:GetSessionStatus. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetTable">actionGetTable</a></code> | <code>string</code> | [Read] athena:GetTable. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetTableMetadata">actionGetTableMetadata</a></code> | <code>string</code> | [Read] athena:GetTableMetadata. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetTables">actionGetTables</a></code> | <code>string</code> | [Read] athena:GetTables. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.actionGetWorkGroup">actionGetWorkGroup</a></code> | <code>string</code> | [Read] athena:GetWorkGroup. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.BatchGetNamedQuery">BatchGetNamedQuery</a></code> | <code>string</code> | [Read] athena:BatchGetNamedQuery. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.BatchGetPreparedStatement">BatchGetPreparedStatement</a></code> | <code>string</code> | [Read] athena:BatchGetPreparedStatement. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.BatchGetQueryExecution">BatchGetQueryExecution</a></code> | <code>string</code> | [Read] athena:BatchGetQueryExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CancelCapacityReservation">CancelCapacityReservation</a></code> | <code>string</code> | [Write] athena:CancelCapacityReservation. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CancelQueryExecution">CancelQueryExecution</a></code> | <code>string</code> | [Write] athena:CancelQueryExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreateCapacityReservation">CreateCapacityReservation</a></code> | <code>string</code> | [Write] athena:CreateCapacityReservation. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreateDataCatalog">CreateDataCatalog</a></code> | <code>string</code> | [Write] athena:CreateDataCatalog. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreateNamedQuery">CreateNamedQuery</a></code> | <code>string</code> | [Write] athena:CreateNamedQuery. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreateNotebook">CreateNotebook</a></code> | <code>string</code> | [Write] athena:CreateNotebook. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreatePreparedStatement">CreatePreparedStatement</a></code> | <code>string</code> | [Write] athena:CreatePreparedStatement. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreatePresignedNotebookUrl">CreatePresignedNotebookUrl</a></code> | <code>string</code> | [Write] athena:CreatePresignedNotebookUrl. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.CreateWorkGroup">CreateWorkGroup</a></code> | <code>string</code> | [Write] athena:CreateWorkGroup. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.DeleteCapacityReservation">DeleteCapacityReservation</a></code> | <code>string</code> | [Write] athena:DeleteCapacityReservation. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.DeleteDataCatalog">DeleteDataCatalog</a></code> | <code>string</code> | [Write] athena:DeleteDataCatalog. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.DeleteNamedQuery">DeleteNamedQuery</a></code> | <code>string</code> | [Write] athena:DeleteNamedQuery. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.DeleteNotebook">DeleteNotebook</a></code> | <code>string</code> | [Write] athena:DeleteNotebook. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.DeletePreparedStatement">DeletePreparedStatement</a></code> | <code>string</code> | [Write] athena:DeletePreparedStatement. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.DeleteWorkGroup">DeleteWorkGroup</a></code> | <code>string</code> | [Write] athena:DeleteWorkGroup. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ExportNotebook">ExportNotebook</a></code> | <code>string</code> | [Write] athena:ExportNotebook. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ImportNotebook">ImportNotebook</a></code> | <code>string</code> | [Write] athena:ImportNotebook. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListApplicationDPUSizes">ListApplicationDPUSizes</a></code> | <code>string</code> | [List] athena:ListApplicationDPUSizes. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListCalculationExecutions">ListCalculationExecutions</a></code> | <code>string</code> | [List] athena:ListCalculationExecutions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListCapacityReservations">ListCapacityReservations</a></code> | <code>string</code> | [List] athena:ListCapacityReservations. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListDatabases">ListDatabases</a></code> | <code>string</code> | [List] athena:ListDatabases. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListDataCatalogs">ListDataCatalogs</a></code> | <code>string</code> | [List] athena:ListDataCatalogs. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListEngineVersions">ListEngineVersions</a></code> | <code>string</code> | [Read] athena:ListEngineVersions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListExecutors">ListExecutors</a></code> | <code>string</code> | [List] athena:ListExecutors. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListNamedQueries">ListNamedQueries</a></code> | <code>string</code> | [List] athena:ListNamedQueries. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListNotebookMetadata">ListNotebookMetadata</a></code> | <code>string</code> | [List] athena:ListNotebookMetadata. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListNotebookSessions">ListNotebookSessions</a></code> | <code>string</code> | [List] athena:ListNotebookSessions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListPreparedStatements">ListPreparedStatements</a></code> | <code>string</code> | [List] athena:ListPreparedStatements. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListQueryExecutions">ListQueryExecutions</a></code> | <code>string</code> | [Read] athena:ListQueryExecutions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] athena:ListSessions. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListTableMetadata">ListTableMetadata</a></code> | <code>string</code> | [Read] athena:ListTableMetadata. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] athena:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.ListWorkGroups">ListWorkGroups</a></code> | <code>string</code> | [List] athena:ListWorkGroups. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.PutCapacityAssignmentConfiguration">PutCapacityAssignmentConfiguration</a></code> | <code>string</code> | [Write] athena:PutCapacityAssignmentConfiguration. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.RunQuery">RunQuery</a></code> | <code>string</code> | [Write] athena:RunQuery. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.StartCalculationExecution">StartCalculationExecution</a></code> | <code>string</code> | [Write] athena:StartCalculationExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.StartQueryExecution">StartQueryExecution</a></code> | <code>string</code> | [Write] athena:StartQueryExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.StartSession">StartSession</a></code> | <code>string</code> | [Write] athena:StartSession. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.StopCalculationExecution">StopCalculationExecution</a></code> | <code>string</code> | [Write] athena:StopCalculationExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.StopQueryExecution">StopQueryExecution</a></code> | <code>string</code> | [Write] athena:StopQueryExecution. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] athena:TagResource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.TerminateSession">TerminateSession</a></code> | <code>string</code> | [Write] athena:TerminateSession. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] athena:UntagResource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdateCapacityReservation">UpdateCapacityReservation</a></code> | <code>string</code> | [Write] athena:UpdateCapacityReservation. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdateDataCatalog">UpdateDataCatalog</a></code> | <code>string</code> | [Write] athena:UpdateDataCatalog. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdateNamedQuery">UpdateNamedQuery</a></code> | <code>string</code> | [Write] athena:UpdateNamedQuery. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdateNotebook">UpdateNotebook</a></code> | <code>string</code> | [Write] athena:UpdateNotebook. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdateNotebookMetadata">UpdateNotebookMetadata</a></code> | <code>string</code> | [Write] athena:UpdateNotebookMetadata. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdatePreparedStatement">UpdatePreparedStatement</a></code> | <code>string</code> | [Write] athena:UpdatePreparedStatement. |
| <code><a href="#@cdk_utils/iam.athena.AthenaActions.property.UpdateWorkGroup">UpdateWorkGroup</a></code> | <code>string</code> | [Write] athena:UpdateWorkGroup. |

---

##### `actionGetCalculationExecution`<sup>Required</sup> <a name="actionGetCalculationExecution" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetCalculationExecution"></a>

```typescript
public readonly actionGetCalculationExecution: string;
```

- *Type:* string

[Read] athena:GetCalculationExecution.

---

##### `actionGetCalculationExecutionCode`<sup>Required</sup> <a name="actionGetCalculationExecutionCode" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetCalculationExecutionCode"></a>

```typescript
public readonly actionGetCalculationExecutionCode: string;
```

- *Type:* string

[Read] athena:GetCalculationExecutionCode.

---

##### `actionGetCalculationExecutionStatus`<sup>Required</sup> <a name="actionGetCalculationExecutionStatus" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetCalculationExecutionStatus"></a>

```typescript
public readonly actionGetCalculationExecutionStatus: string;
```

- *Type:* string

[Read] athena:GetCalculationExecutionStatus.

---

##### `actionGetCapacityAssignmentConfiguration`<sup>Required</sup> <a name="actionGetCapacityAssignmentConfiguration" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetCapacityAssignmentConfiguration"></a>

```typescript
public readonly actionGetCapacityAssignmentConfiguration: string;
```

- *Type:* string

[Read] athena:GetCapacityAssignmentConfiguration.

---

##### `actionGetCapacityReservation`<sup>Required</sup> <a name="actionGetCapacityReservation" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetCapacityReservation"></a>

```typescript
public readonly actionGetCapacityReservation: string;
```

- *Type:* string

[Read] athena:GetCapacityReservation.

---

##### `actionGetCatalogs`<sup>Required</sup> <a name="actionGetCatalogs" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetCatalogs"></a>

```typescript
public readonly actionGetCatalogs: string;
```

- *Type:* string

[Read] athena:GetCatalogs.

---

##### `actionGetDatabase`<sup>Required</sup> <a name="actionGetDatabase" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetDatabase"></a>

```typescript
public readonly actionGetDatabase: string;
```

- *Type:* string

[Read] athena:GetDatabase.

---

##### `actionGetDataCatalog`<sup>Required</sup> <a name="actionGetDataCatalog" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetDataCatalog"></a>

```typescript
public readonly actionGetDataCatalog: string;
```

- *Type:* string

[Read] athena:GetDataCatalog.

---

##### `actionGetExecutionEngine`<sup>Required</sup> <a name="actionGetExecutionEngine" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetExecutionEngine"></a>

```typescript
public readonly actionGetExecutionEngine: string;
```

- *Type:* string

[Read] athena:GetExecutionEngine.

---

##### `actionGetExecutionEngines`<sup>Required</sup> <a name="actionGetExecutionEngines" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetExecutionEngines"></a>

```typescript
public readonly actionGetExecutionEngines: string;
```

- *Type:* string

[Read] athena:GetExecutionEngines.

---

##### `actionGetNamedQuery`<sup>Required</sup> <a name="actionGetNamedQuery" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetNamedQuery"></a>

```typescript
public readonly actionGetNamedQuery: string;
```

- *Type:* string

[Read] athena:GetNamedQuery.

---

##### `actionGetNamespace`<sup>Required</sup> <a name="actionGetNamespace" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetNamespace"></a>

```typescript
public readonly actionGetNamespace: string;
```

- *Type:* string

[Read] athena:GetNamespace.

---

##### `actionGetNamespaces`<sup>Required</sup> <a name="actionGetNamespaces" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetNamespaces"></a>

```typescript
public readonly actionGetNamespaces: string;
```

- *Type:* string

[Read] athena:GetNamespaces.

---

##### `actionGetNotebookMetadata`<sup>Required</sup> <a name="actionGetNotebookMetadata" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetNotebookMetadata"></a>

```typescript
public readonly actionGetNotebookMetadata: string;
```

- *Type:* string

[Read] athena:GetNotebookMetadata.

---

##### `actionGetPreparedStatement`<sup>Required</sup> <a name="actionGetPreparedStatement" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetPreparedStatement"></a>

```typescript
public readonly actionGetPreparedStatement: string;
```

- *Type:* string

[Read] athena:GetPreparedStatement.

---

##### `actionGetQueryExecution`<sup>Required</sup> <a name="actionGetQueryExecution" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryExecution"></a>

```typescript
public readonly actionGetQueryExecution: string;
```

- *Type:* string

[Read] athena:GetQueryExecution.

---

##### `actionGetQueryExecutions`<sup>Required</sup> <a name="actionGetQueryExecutions" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryExecutions"></a>

```typescript
public readonly actionGetQueryExecutions: string;
```

- *Type:* string

[Read] athena:GetQueryExecutions.

---

##### `actionGetQueryResults`<sup>Required</sup> <a name="actionGetQueryResults" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryResults"></a>

```typescript
public readonly actionGetQueryResults: string;
```

- *Type:* string

[Read] athena:GetQueryResults.

---

##### `actionGetQueryResultsStream`<sup>Required</sup> <a name="actionGetQueryResultsStream" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryResultsStream"></a>

```typescript
public readonly actionGetQueryResultsStream: string;
```

- *Type:* string

[Read] athena:GetQueryResultsStream.

---

##### `actionGetQueryRuntimeStatistics`<sup>Required</sup> <a name="actionGetQueryRuntimeStatistics" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetQueryRuntimeStatistics"></a>

```typescript
public readonly actionGetQueryRuntimeStatistics: string;
```

- *Type:* string

[Read] athena:GetQueryRuntimeStatistics.

---

##### `actionGetResourceDashboard`<sup>Required</sup> <a name="actionGetResourceDashboard" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetResourceDashboard"></a>

```typescript
public readonly actionGetResourceDashboard: string;
```

- *Type:* string

[Read] athena:GetResourceDashboard.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] athena:GetSession.

---

##### `actionGetSessionEndpoint`<sup>Required</sup> <a name="actionGetSessionEndpoint" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetSessionEndpoint"></a>

```typescript
public readonly actionGetSessionEndpoint: string;
```

- *Type:* string

[Write] athena:GetSessionEndpoint.

---

##### `actionGetSessionStatus`<sup>Required</sup> <a name="actionGetSessionStatus" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetSessionStatus"></a>

```typescript
public readonly actionGetSessionStatus: string;
```

- *Type:* string

[Read] athena:GetSessionStatus.

---

##### `actionGetTable`<sup>Required</sup> <a name="actionGetTable" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetTable"></a>

```typescript
public readonly actionGetTable: string;
```

- *Type:* string

[Read] athena:GetTable.

---

##### `actionGetTableMetadata`<sup>Required</sup> <a name="actionGetTableMetadata" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetTableMetadata"></a>

```typescript
public readonly actionGetTableMetadata: string;
```

- *Type:* string

[Read] athena:GetTableMetadata.

---

##### `actionGetTables`<sup>Required</sup> <a name="actionGetTables" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetTables"></a>

```typescript
public readonly actionGetTables: string;
```

- *Type:* string

[Read] athena:GetTables.

---

##### `actionGetWorkGroup`<sup>Required</sup> <a name="actionGetWorkGroup" id="@cdk_utils/iam.athena.AthenaActions.property.actionGetWorkGroup"></a>

```typescript
public readonly actionGetWorkGroup: string;
```

- *Type:* string

[Read] athena:GetWorkGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.athena.AthenaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.athena.AthenaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.athena.AthenaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.athena.AthenaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.athena.AthenaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetNamedQuery`<sup>Required</sup> <a name="BatchGetNamedQuery" id="@cdk_utils/iam.athena.AthenaActions.property.BatchGetNamedQuery"></a>

```typescript
public readonly BatchGetNamedQuery: string;
```

- *Type:* string

[Read] athena:BatchGetNamedQuery.

---

##### `BatchGetPreparedStatement`<sup>Required</sup> <a name="BatchGetPreparedStatement" id="@cdk_utils/iam.athena.AthenaActions.property.BatchGetPreparedStatement"></a>

```typescript
public readonly BatchGetPreparedStatement: string;
```

- *Type:* string

[Read] athena:BatchGetPreparedStatement.

---

##### `BatchGetQueryExecution`<sup>Required</sup> <a name="BatchGetQueryExecution" id="@cdk_utils/iam.athena.AthenaActions.property.BatchGetQueryExecution"></a>

```typescript
public readonly BatchGetQueryExecution: string;
```

- *Type:* string

[Read] athena:BatchGetQueryExecution.

---

##### `CancelCapacityReservation`<sup>Required</sup> <a name="CancelCapacityReservation" id="@cdk_utils/iam.athena.AthenaActions.property.CancelCapacityReservation"></a>

```typescript
public readonly CancelCapacityReservation: string;
```

- *Type:* string

[Write] athena:CancelCapacityReservation.

---

##### `CancelQueryExecution`<sup>Required</sup> <a name="CancelQueryExecution" id="@cdk_utils/iam.athena.AthenaActions.property.CancelQueryExecution"></a>

```typescript
public readonly CancelQueryExecution: string;
```

- *Type:* string

[Write] athena:CancelQueryExecution.

---

##### `CreateCapacityReservation`<sup>Required</sup> <a name="CreateCapacityReservation" id="@cdk_utils/iam.athena.AthenaActions.property.CreateCapacityReservation"></a>

```typescript
public readonly CreateCapacityReservation: string;
```

- *Type:* string

[Write] athena:CreateCapacityReservation.

---

##### `CreateDataCatalog`<sup>Required</sup> <a name="CreateDataCatalog" id="@cdk_utils/iam.athena.AthenaActions.property.CreateDataCatalog"></a>

```typescript
public readonly CreateDataCatalog: string;
```

- *Type:* string

[Write] athena:CreateDataCatalog.

---

##### `CreateNamedQuery`<sup>Required</sup> <a name="CreateNamedQuery" id="@cdk_utils/iam.athena.AthenaActions.property.CreateNamedQuery"></a>

```typescript
public readonly CreateNamedQuery: string;
```

- *Type:* string

[Write] athena:CreateNamedQuery.

---

##### `CreateNotebook`<sup>Required</sup> <a name="CreateNotebook" id="@cdk_utils/iam.athena.AthenaActions.property.CreateNotebook"></a>

```typescript
public readonly CreateNotebook: string;
```

- *Type:* string

[Write] athena:CreateNotebook.

---

##### `CreatePreparedStatement`<sup>Required</sup> <a name="CreatePreparedStatement" id="@cdk_utils/iam.athena.AthenaActions.property.CreatePreparedStatement"></a>

```typescript
public readonly CreatePreparedStatement: string;
```

- *Type:* string

[Write] athena:CreatePreparedStatement.

---

##### `CreatePresignedNotebookUrl`<sup>Required</sup> <a name="CreatePresignedNotebookUrl" id="@cdk_utils/iam.athena.AthenaActions.property.CreatePresignedNotebookUrl"></a>

```typescript
public readonly CreatePresignedNotebookUrl: string;
```

- *Type:* string

[Write] athena:CreatePresignedNotebookUrl.

---

##### `CreateWorkGroup`<sup>Required</sup> <a name="CreateWorkGroup" id="@cdk_utils/iam.athena.AthenaActions.property.CreateWorkGroup"></a>

```typescript
public readonly CreateWorkGroup: string;
```

- *Type:* string

[Write] athena:CreateWorkGroup.

---

##### `DeleteCapacityReservation`<sup>Required</sup> <a name="DeleteCapacityReservation" id="@cdk_utils/iam.athena.AthenaActions.property.DeleteCapacityReservation"></a>

```typescript
public readonly DeleteCapacityReservation: string;
```

- *Type:* string

[Write] athena:DeleteCapacityReservation.

---

##### `DeleteDataCatalog`<sup>Required</sup> <a name="DeleteDataCatalog" id="@cdk_utils/iam.athena.AthenaActions.property.DeleteDataCatalog"></a>

```typescript
public readonly DeleteDataCatalog: string;
```

- *Type:* string

[Write] athena:DeleteDataCatalog.

---

##### `DeleteNamedQuery`<sup>Required</sup> <a name="DeleteNamedQuery" id="@cdk_utils/iam.athena.AthenaActions.property.DeleteNamedQuery"></a>

```typescript
public readonly DeleteNamedQuery: string;
```

- *Type:* string

[Write] athena:DeleteNamedQuery.

---

##### `DeleteNotebook`<sup>Required</sup> <a name="DeleteNotebook" id="@cdk_utils/iam.athena.AthenaActions.property.DeleteNotebook"></a>

```typescript
public readonly DeleteNotebook: string;
```

- *Type:* string

[Write] athena:DeleteNotebook.

---

##### `DeletePreparedStatement`<sup>Required</sup> <a name="DeletePreparedStatement" id="@cdk_utils/iam.athena.AthenaActions.property.DeletePreparedStatement"></a>

```typescript
public readonly DeletePreparedStatement: string;
```

- *Type:* string

[Write] athena:DeletePreparedStatement.

---

##### `DeleteWorkGroup`<sup>Required</sup> <a name="DeleteWorkGroup" id="@cdk_utils/iam.athena.AthenaActions.property.DeleteWorkGroup"></a>

```typescript
public readonly DeleteWorkGroup: string;
```

- *Type:* string

[Write] athena:DeleteWorkGroup.

---

##### `ExportNotebook`<sup>Required</sup> <a name="ExportNotebook" id="@cdk_utils/iam.athena.AthenaActions.property.ExportNotebook"></a>

```typescript
public readonly ExportNotebook: string;
```

- *Type:* string

[Write] athena:ExportNotebook.

---

##### `ImportNotebook`<sup>Required</sup> <a name="ImportNotebook" id="@cdk_utils/iam.athena.AthenaActions.property.ImportNotebook"></a>

```typescript
public readonly ImportNotebook: string;
```

- *Type:* string

[Write] athena:ImportNotebook.

---

##### `ListApplicationDPUSizes`<sup>Required</sup> <a name="ListApplicationDPUSizes" id="@cdk_utils/iam.athena.AthenaActions.property.ListApplicationDPUSizes"></a>

```typescript
public readonly ListApplicationDPUSizes: string;
```

- *Type:* string

[List] athena:ListApplicationDPUSizes.

---

##### `ListCalculationExecutions`<sup>Required</sup> <a name="ListCalculationExecutions" id="@cdk_utils/iam.athena.AthenaActions.property.ListCalculationExecutions"></a>

```typescript
public readonly ListCalculationExecutions: string;
```

- *Type:* string

[List] athena:ListCalculationExecutions.

---

##### `ListCapacityReservations`<sup>Required</sup> <a name="ListCapacityReservations" id="@cdk_utils/iam.athena.AthenaActions.property.ListCapacityReservations"></a>

```typescript
public readonly ListCapacityReservations: string;
```

- *Type:* string

[List] athena:ListCapacityReservations.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.athena.AthenaActions.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string;
```

- *Type:* string

[List] athena:ListDatabases.

---

##### `ListDataCatalogs`<sup>Required</sup> <a name="ListDataCatalogs" id="@cdk_utils/iam.athena.AthenaActions.property.ListDataCatalogs"></a>

```typescript
public readonly ListDataCatalogs: string;
```

- *Type:* string

[List] athena:ListDataCatalogs.

---

##### `ListEngineVersions`<sup>Required</sup> <a name="ListEngineVersions" id="@cdk_utils/iam.athena.AthenaActions.property.ListEngineVersions"></a>

```typescript
public readonly ListEngineVersions: string;
```

- *Type:* string

[Read] athena:ListEngineVersions.

---

##### `ListExecutors`<sup>Required</sup> <a name="ListExecutors" id="@cdk_utils/iam.athena.AthenaActions.property.ListExecutors"></a>

```typescript
public readonly ListExecutors: string;
```

- *Type:* string

[List] athena:ListExecutors.

---

##### `ListNamedQueries`<sup>Required</sup> <a name="ListNamedQueries" id="@cdk_utils/iam.athena.AthenaActions.property.ListNamedQueries"></a>

```typescript
public readonly ListNamedQueries: string;
```

- *Type:* string

[List] athena:ListNamedQueries.

---

##### `ListNotebookMetadata`<sup>Required</sup> <a name="ListNotebookMetadata" id="@cdk_utils/iam.athena.AthenaActions.property.ListNotebookMetadata"></a>

```typescript
public readonly ListNotebookMetadata: string;
```

- *Type:* string

[List] athena:ListNotebookMetadata.

---

##### `ListNotebookSessions`<sup>Required</sup> <a name="ListNotebookSessions" id="@cdk_utils/iam.athena.AthenaActions.property.ListNotebookSessions"></a>

```typescript
public readonly ListNotebookSessions: string;
```

- *Type:* string

[List] athena:ListNotebookSessions.

---

##### `ListPreparedStatements`<sup>Required</sup> <a name="ListPreparedStatements" id="@cdk_utils/iam.athena.AthenaActions.property.ListPreparedStatements"></a>

```typescript
public readonly ListPreparedStatements: string;
```

- *Type:* string

[List] athena:ListPreparedStatements.

---

##### `ListQueryExecutions`<sup>Required</sup> <a name="ListQueryExecutions" id="@cdk_utils/iam.athena.AthenaActions.property.ListQueryExecutions"></a>

```typescript
public readonly ListQueryExecutions: string;
```

- *Type:* string

[Read] athena:ListQueryExecutions.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.athena.AthenaActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] athena:ListSessions.

---

##### `ListTableMetadata`<sup>Required</sup> <a name="ListTableMetadata" id="@cdk_utils/iam.athena.AthenaActions.property.ListTableMetadata"></a>

```typescript
public readonly ListTableMetadata: string;
```

- *Type:* string

[Read] athena:ListTableMetadata.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.athena.AthenaActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] athena:ListTagsForResource.

---

##### `ListWorkGroups`<sup>Required</sup> <a name="ListWorkGroups" id="@cdk_utils/iam.athena.AthenaActions.property.ListWorkGroups"></a>

```typescript
public readonly ListWorkGroups: string;
```

- *Type:* string

[List] athena:ListWorkGroups.

---

##### `PutCapacityAssignmentConfiguration`<sup>Required</sup> <a name="PutCapacityAssignmentConfiguration" id="@cdk_utils/iam.athena.AthenaActions.property.PutCapacityAssignmentConfiguration"></a>

```typescript
public readonly PutCapacityAssignmentConfiguration: string;
```

- *Type:* string

[Write] athena:PutCapacityAssignmentConfiguration.

---

##### `RunQuery`<sup>Required</sup> <a name="RunQuery" id="@cdk_utils/iam.athena.AthenaActions.property.RunQuery"></a>

```typescript
public readonly RunQuery: string;
```

- *Type:* string

[Write] athena:RunQuery.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.athena.AthenaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCalculationExecution`<sup>Required</sup> <a name="StartCalculationExecution" id="@cdk_utils/iam.athena.AthenaActions.property.StartCalculationExecution"></a>

```typescript
public readonly StartCalculationExecution: string;
```

- *Type:* string

[Write] athena:StartCalculationExecution.

---

##### `StartQueryExecution`<sup>Required</sup> <a name="StartQueryExecution" id="@cdk_utils/iam.athena.AthenaActions.property.StartQueryExecution"></a>

```typescript
public readonly StartQueryExecution: string;
```

- *Type:* string

[Write] athena:StartQueryExecution.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.athena.AthenaActions.property.StartSession"></a>

```typescript
public readonly StartSession: string;
```

- *Type:* string

[Write] athena:StartSession.

---

##### `StopCalculationExecution`<sup>Required</sup> <a name="StopCalculationExecution" id="@cdk_utils/iam.athena.AthenaActions.property.StopCalculationExecution"></a>

```typescript
public readonly StopCalculationExecution: string;
```

- *Type:* string

[Write] athena:StopCalculationExecution.

---

##### `StopQueryExecution`<sup>Required</sup> <a name="StopQueryExecution" id="@cdk_utils/iam.athena.AthenaActions.property.StopQueryExecution"></a>

```typescript
public readonly StopQueryExecution: string;
```

- *Type:* string

[Write] athena:StopQueryExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.athena.AthenaActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] athena:TagResource.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.athena.AthenaActions.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string;
```

- *Type:* string

[Write] athena:TerminateSession.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.athena.AthenaActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] athena:UntagResource.

---

##### `UpdateCapacityReservation`<sup>Required</sup> <a name="UpdateCapacityReservation" id="@cdk_utils/iam.athena.AthenaActions.property.UpdateCapacityReservation"></a>

```typescript
public readonly UpdateCapacityReservation: string;
```

- *Type:* string

[Write] athena:UpdateCapacityReservation.

---

##### `UpdateDataCatalog`<sup>Required</sup> <a name="UpdateDataCatalog" id="@cdk_utils/iam.athena.AthenaActions.property.UpdateDataCatalog"></a>

```typescript
public readonly UpdateDataCatalog: string;
```

- *Type:* string

[Write] athena:UpdateDataCatalog.

---

##### `UpdateNamedQuery`<sup>Required</sup> <a name="UpdateNamedQuery" id="@cdk_utils/iam.athena.AthenaActions.property.UpdateNamedQuery"></a>

```typescript
public readonly UpdateNamedQuery: string;
```

- *Type:* string

[Write] athena:UpdateNamedQuery.

---

##### `UpdateNotebook`<sup>Required</sup> <a name="UpdateNotebook" id="@cdk_utils/iam.athena.AthenaActions.property.UpdateNotebook"></a>

```typescript
public readonly UpdateNotebook: string;
```

- *Type:* string

[Write] athena:UpdateNotebook.

---

##### `UpdateNotebookMetadata`<sup>Required</sup> <a name="UpdateNotebookMetadata" id="@cdk_utils/iam.athena.AthenaActions.property.UpdateNotebookMetadata"></a>

```typescript
public readonly UpdateNotebookMetadata: string;
```

- *Type:* string

[Write] athena:UpdateNotebookMetadata.

---

##### `UpdatePreparedStatement`<sup>Required</sup> <a name="UpdatePreparedStatement" id="@cdk_utils/iam.athena.AthenaActions.property.UpdatePreparedStatement"></a>

```typescript
public readonly UpdatePreparedStatement: string;
```

- *Type:* string

[Write] athena:UpdatePreparedStatement.

---

##### `UpdateWorkGroup`<sup>Required</sup> <a name="UpdateWorkGroup" id="@cdk_utils/iam.athena.AthenaActions.property.UpdateWorkGroup"></a>

```typescript
public readonly UpdateWorkGroup: string;
```

- *Type:* string

[Write] athena:UpdateWorkGroup.

---

### AthenaConditions <a name="AthenaConditions" id="@cdk_utils/iam.athena.AthenaConditions"></a>

Condition key constants and builders for athena.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.athena.AthenaConditions.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

new athena.AthenaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.athena.AthenaConditions.requestTag"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.athena.AthenaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.athena.AthenaConditions.resourceTag"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.athena.AthenaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.athena.AthenaConditions.tagKeys"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.athena.AthenaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.CreateCapacityReservationConditionKeys">CreateCapacityReservationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCapacityReservation action. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.CreateDataCatalogConditionKeys">CreateDataCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataCatalog action. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.CreateWorkGroupConditionKeys">CreateWorkGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkGroup action. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.StartSessionConditionKeys">StartSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSession action. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.athena.AthenaConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.athena.AthenaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.athena.AthenaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.athena.AthenaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCapacityReservationConditionKeys`<sup>Required</sup> <a name="CreateCapacityReservationConditionKeys" id="@cdk_utils/iam.athena.AthenaConditions.property.CreateCapacityReservationConditionKeys"></a>

```typescript
public readonly CreateCapacityReservationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCapacityReservation action.

---

##### `CreateDataCatalogConditionKeys`<sup>Required</sup> <a name="CreateDataCatalogConditionKeys" id="@cdk_utils/iam.athena.AthenaConditions.property.CreateDataCatalogConditionKeys"></a>

```typescript
public readonly CreateDataCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataCatalog action.

---

##### `CreateWorkGroupConditionKeys`<sup>Required</sup> <a name="CreateWorkGroupConditionKeys" id="@cdk_utils/iam.athena.AthenaConditions.property.CreateWorkGroupConditionKeys"></a>

```typescript
public readonly CreateWorkGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkGroup action.

---

##### `StartSessionConditionKeys`<sup>Required</sup> <a name="StartSessionConditionKeys" id="@cdk_utils/iam.athena.AthenaConditions.property.StartSessionConditionKeys"></a>

```typescript
public readonly StartSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSession action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.athena.AthenaConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.athena.AthenaConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AthenaOperations <a name="AthenaOperations" id="@cdk_utils/iam.athena.AthenaOperations"></a>

API operation to required IAM actions mapping for athena.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.athena.AthenaOperations.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

new athena.AthenaOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.BatchGetNamedQuery">BatchGetNamedQuery</a></code> | <code>string[]</code> | IAM actions required for the BatchGetNamedQuery API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.BatchGetPreparedStatement">BatchGetPreparedStatement</a></code> | <code>string[]</code> | IAM actions required for the BatchGetPreparedStatement API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.BatchGetQueryExecution">BatchGetQueryExecution</a></code> | <code>string[]</code> | IAM actions required for the BatchGetQueryExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CancelCapacityReservation">CancelCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the CancelCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreateCapacityReservation">CreateCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the CreateCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreateDataCatalog">CreateDataCatalog</a></code> | <code>string[]</code> | IAM actions required for the CreateDataCatalog API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreateNamedQuery">CreateNamedQuery</a></code> | <code>string[]</code> | IAM actions required for the CreateNamedQuery API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreateNotebook">CreateNotebook</a></code> | <code>string[]</code> | IAM actions required for the CreateNotebook API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreatePreparedStatement">CreatePreparedStatement</a></code> | <code>string[]</code> | IAM actions required for the CreatePreparedStatement API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreatePresignedNotebookUrl">CreatePresignedNotebookUrl</a></code> | <code>string[]</code> | IAM actions required for the CreatePresignedNotebookUrl API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.CreateWorkGroup">CreateWorkGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkGroup API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.DeleteCapacityReservation">DeleteCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.DeleteDataCatalog">DeleteDataCatalog</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataCatalog API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.DeleteNamedQuery">DeleteNamedQuery</a></code> | <code>string[]</code> | IAM actions required for the DeleteNamedQuery API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.DeleteNotebook">DeleteNotebook</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotebook API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.DeletePreparedStatement">DeletePreparedStatement</a></code> | <code>string[]</code> | IAM actions required for the DeletePreparedStatement API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.DeleteWorkGroup">DeleteWorkGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkGroup API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ExportNotebook">ExportNotebook</a></code> | <code>string[]</code> | IAM actions required for the ExportNotebook API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ImportNotebook">ImportNotebook</a></code> | <code>string[]</code> | IAM actions required for the ImportNotebook API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListApplicationDPUSizes">ListApplicationDPUSizes</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationDPUSizes API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListCalculationExecutions">ListCalculationExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListCalculationExecutions API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListCapacityReservations">ListCapacityReservations</a></code> | <code>string[]</code> | IAM actions required for the ListCapacityReservations API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListDatabases">ListDatabases</a></code> | <code>string[]</code> | IAM actions required for the ListDatabases API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListDataCatalogs">ListDataCatalogs</a></code> | <code>string[]</code> | IAM actions required for the ListDataCatalogs API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListEngineVersions">ListEngineVersions</a></code> | <code>string[]</code> | IAM actions required for the ListEngineVersions API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListExecutors">ListExecutors</a></code> | <code>string[]</code> | IAM actions required for the ListExecutors API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListNamedQueries">ListNamedQueries</a></code> | <code>string[]</code> | IAM actions required for the ListNamedQueries API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListNotebookMetadata">ListNotebookMetadata</a></code> | <code>string[]</code> | IAM actions required for the ListNotebookMetadata API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListNotebookSessions">ListNotebookSessions</a></code> | <code>string[]</code> | IAM actions required for the ListNotebookSessions API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListPreparedStatements">ListPreparedStatements</a></code> | <code>string[]</code> | IAM actions required for the ListPreparedStatements API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListQueryExecutions">ListQueryExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListQueryExecutions API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListTableMetadata">ListTableMetadata</a></code> | <code>string[]</code> | IAM actions required for the ListTableMetadata API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.ListWorkGroups">ListWorkGroups</a></code> | <code>string[]</code> | IAM actions required for the ListWorkGroups API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetCalculationExecution">opGetCalculationExecution</a></code> | <code>string[]</code> | IAM actions required for the GetCalculationExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetCalculationExecutionCode">opGetCalculationExecutionCode</a></code> | <code>string[]</code> | IAM actions required for the GetCalculationExecutionCode API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetCalculationExecutionStatus">opGetCalculationExecutionStatus</a></code> | <code>string[]</code> | IAM actions required for the GetCalculationExecutionStatus API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetCapacityAssignmentConfiguration">opGetCapacityAssignmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetCapacityAssignmentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetCapacityReservation">opGetCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the GetCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetDatabase">opGetDatabase</a></code> | <code>string[]</code> | IAM actions required for the GetDatabase API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetDataCatalog">opGetDataCatalog</a></code> | <code>string[]</code> | IAM actions required for the GetDataCatalog API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetNamedQuery">opGetNamedQuery</a></code> | <code>string[]</code> | IAM actions required for the GetNamedQuery API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetNotebookMetadata">opGetNotebookMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetNotebookMetadata API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetPreparedStatement">opGetPreparedStatement</a></code> | <code>string[]</code> | IAM actions required for the GetPreparedStatement API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetQueryExecution">opGetQueryExecution</a></code> | <code>string[]</code> | IAM actions required for the GetQueryExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetQueryResults">opGetQueryResults</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResults API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetQueryRuntimeStatistics">opGetQueryRuntimeStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetQueryRuntimeStatistics API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetResourceDashboard">opGetResourceDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetResourceDashboard API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetSessionEndpoint">opGetSessionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetSessionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetSessionStatus">opGetSessionStatus</a></code> | <code>string[]</code> | IAM actions required for the GetSessionStatus API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetTableMetadata">opGetTableMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetTableMetadata API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.opGetWorkGroup">opGetWorkGroup</a></code> | <code>string[]</code> | IAM actions required for the GetWorkGroup API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.PutCapacityAssignmentConfiguration">PutCapacityAssignmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutCapacityAssignmentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.StartCalculationExecution">StartCalculationExecution</a></code> | <code>string[]</code> | IAM actions required for the StartCalculationExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.StartQueryExecution">StartQueryExecution</a></code> | <code>string[]</code> | IAM actions required for the StartQueryExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.StartSession">StartSession</a></code> | <code>string[]</code> | IAM actions required for the StartSession API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.StopCalculationExecution">StopCalculationExecution</a></code> | <code>string[]</code> | IAM actions required for the StopCalculationExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.StopQueryExecution">StopQueryExecution</a></code> | <code>string[]</code> | IAM actions required for the StopQueryExecution API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.TerminateSession">TerminateSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateSession API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdateCapacityReservation">UpdateCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the UpdateCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdateDataCatalog">UpdateDataCatalog</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataCatalog API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdateNamedQuery">UpdateNamedQuery</a></code> | <code>string[]</code> | IAM actions required for the UpdateNamedQuery API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdateNotebook">UpdateNotebook</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotebook API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdateNotebookMetadata">UpdateNotebookMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotebookMetadata API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdatePreparedStatement">UpdatePreparedStatement</a></code> | <code>string[]</code> | IAM actions required for the UpdatePreparedStatement API call. |
| <code><a href="#@cdk_utils/iam.athena.AthenaOperations.property.UpdateWorkGroup">UpdateWorkGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkGroup API call. |

---

##### `BatchGetNamedQuery`<sup>Required</sup> <a name="BatchGetNamedQuery" id="@cdk_utils/iam.athena.AthenaOperations.property.BatchGetNamedQuery"></a>

```typescript
public readonly BatchGetNamedQuery: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetNamedQuery API call.

---

##### `BatchGetPreparedStatement`<sup>Required</sup> <a name="BatchGetPreparedStatement" id="@cdk_utils/iam.athena.AthenaOperations.property.BatchGetPreparedStatement"></a>

```typescript
public readonly BatchGetPreparedStatement: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetPreparedStatement API call.

---

##### `BatchGetQueryExecution`<sup>Required</sup> <a name="BatchGetQueryExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.BatchGetQueryExecution"></a>

```typescript
public readonly BatchGetQueryExecution: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetQueryExecution API call.

---

##### `CancelCapacityReservation`<sup>Required</sup> <a name="CancelCapacityReservation" id="@cdk_utils/iam.athena.AthenaOperations.property.CancelCapacityReservation"></a>

```typescript
public readonly CancelCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the CancelCapacityReservation API call.

---

##### `CreateCapacityReservation`<sup>Required</sup> <a name="CreateCapacityReservation" id="@cdk_utils/iam.athena.AthenaOperations.property.CreateCapacityReservation"></a>

```typescript
public readonly CreateCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the CreateCapacityReservation API call.

---

##### `CreateDataCatalog`<sup>Required</sup> <a name="CreateDataCatalog" id="@cdk_utils/iam.athena.AthenaOperations.property.CreateDataCatalog"></a>

```typescript
public readonly CreateDataCatalog: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataCatalog API call.

---

##### `CreateNamedQuery`<sup>Required</sup> <a name="CreateNamedQuery" id="@cdk_utils/iam.athena.AthenaOperations.property.CreateNamedQuery"></a>

```typescript
public readonly CreateNamedQuery: string[];
```

- *Type:* string[]

IAM actions required for the CreateNamedQuery API call.

---

##### `CreateNotebook`<sup>Required</sup> <a name="CreateNotebook" id="@cdk_utils/iam.athena.AthenaOperations.property.CreateNotebook"></a>

```typescript
public readonly CreateNotebook: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotebook API call.

---

##### `CreatePreparedStatement`<sup>Required</sup> <a name="CreatePreparedStatement" id="@cdk_utils/iam.athena.AthenaOperations.property.CreatePreparedStatement"></a>

```typescript
public readonly CreatePreparedStatement: string[];
```

- *Type:* string[]

IAM actions required for the CreatePreparedStatement API call.

---

##### `CreatePresignedNotebookUrl`<sup>Required</sup> <a name="CreatePresignedNotebookUrl" id="@cdk_utils/iam.athena.AthenaOperations.property.CreatePresignedNotebookUrl"></a>

```typescript
public readonly CreatePresignedNotebookUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreatePresignedNotebookUrl API call.

---

##### `CreateWorkGroup`<sup>Required</sup> <a name="CreateWorkGroup" id="@cdk_utils/iam.athena.AthenaOperations.property.CreateWorkGroup"></a>

```typescript
public readonly CreateWorkGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkGroup API call.

---

##### `DeleteCapacityReservation`<sup>Required</sup> <a name="DeleteCapacityReservation" id="@cdk_utils/iam.athena.AthenaOperations.property.DeleteCapacityReservation"></a>

```typescript
public readonly DeleteCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapacityReservation API call.

---

##### `DeleteDataCatalog`<sup>Required</sup> <a name="DeleteDataCatalog" id="@cdk_utils/iam.athena.AthenaOperations.property.DeleteDataCatalog"></a>

```typescript
public readonly DeleteDataCatalog: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataCatalog API call.

---

##### `DeleteNamedQuery`<sup>Required</sup> <a name="DeleteNamedQuery" id="@cdk_utils/iam.athena.AthenaOperations.property.DeleteNamedQuery"></a>

```typescript
public readonly DeleteNamedQuery: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNamedQuery API call.

---

##### `DeleteNotebook`<sup>Required</sup> <a name="DeleteNotebook" id="@cdk_utils/iam.athena.AthenaOperations.property.DeleteNotebook"></a>

```typescript
public readonly DeleteNotebook: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotebook API call.

---

##### `DeletePreparedStatement`<sup>Required</sup> <a name="DeletePreparedStatement" id="@cdk_utils/iam.athena.AthenaOperations.property.DeletePreparedStatement"></a>

```typescript
public readonly DeletePreparedStatement: string[];
```

- *Type:* string[]

IAM actions required for the DeletePreparedStatement API call.

---

##### `DeleteWorkGroup`<sup>Required</sup> <a name="DeleteWorkGroup" id="@cdk_utils/iam.athena.AthenaOperations.property.DeleteWorkGroup"></a>

```typescript
public readonly DeleteWorkGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkGroup API call.

---

##### `ExportNotebook`<sup>Required</sup> <a name="ExportNotebook" id="@cdk_utils/iam.athena.AthenaOperations.property.ExportNotebook"></a>

```typescript
public readonly ExportNotebook: string[];
```

- *Type:* string[]

IAM actions required for the ExportNotebook API call.

---

##### `ImportNotebook`<sup>Required</sup> <a name="ImportNotebook" id="@cdk_utils/iam.athena.AthenaOperations.property.ImportNotebook"></a>

```typescript
public readonly ImportNotebook: string[];
```

- *Type:* string[]

IAM actions required for the ImportNotebook API call.

---

##### `ListApplicationDPUSizes`<sup>Required</sup> <a name="ListApplicationDPUSizes" id="@cdk_utils/iam.athena.AthenaOperations.property.ListApplicationDPUSizes"></a>

```typescript
public readonly ListApplicationDPUSizes: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationDPUSizes API call.

---

##### `ListCalculationExecutions`<sup>Required</sup> <a name="ListCalculationExecutions" id="@cdk_utils/iam.athena.AthenaOperations.property.ListCalculationExecutions"></a>

```typescript
public readonly ListCalculationExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListCalculationExecutions API call.

---

##### `ListCapacityReservations`<sup>Required</sup> <a name="ListCapacityReservations" id="@cdk_utils/iam.athena.AthenaOperations.property.ListCapacityReservations"></a>

```typescript
public readonly ListCapacityReservations: string[];
```

- *Type:* string[]

IAM actions required for the ListCapacityReservations API call.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.athena.AthenaOperations.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string[];
```

- *Type:* string[]

IAM actions required for the ListDatabases API call.

---

##### `ListDataCatalogs`<sup>Required</sup> <a name="ListDataCatalogs" id="@cdk_utils/iam.athena.AthenaOperations.property.ListDataCatalogs"></a>

```typescript
public readonly ListDataCatalogs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataCatalogs API call.

---

##### `ListEngineVersions`<sup>Required</sup> <a name="ListEngineVersions" id="@cdk_utils/iam.athena.AthenaOperations.property.ListEngineVersions"></a>

```typescript
public readonly ListEngineVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListEngineVersions API call.

---

##### `ListExecutors`<sup>Required</sup> <a name="ListExecutors" id="@cdk_utils/iam.athena.AthenaOperations.property.ListExecutors"></a>

```typescript
public readonly ListExecutors: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutors API call.

---

##### `ListNamedQueries`<sup>Required</sup> <a name="ListNamedQueries" id="@cdk_utils/iam.athena.AthenaOperations.property.ListNamedQueries"></a>

```typescript
public readonly ListNamedQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListNamedQueries API call.

---

##### `ListNotebookMetadata`<sup>Required</sup> <a name="ListNotebookMetadata" id="@cdk_utils/iam.athena.AthenaOperations.property.ListNotebookMetadata"></a>

```typescript
public readonly ListNotebookMetadata: string[];
```

- *Type:* string[]

IAM actions required for the ListNotebookMetadata API call.

---

##### `ListNotebookSessions`<sup>Required</sup> <a name="ListNotebookSessions" id="@cdk_utils/iam.athena.AthenaOperations.property.ListNotebookSessions"></a>

```typescript
public readonly ListNotebookSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListNotebookSessions API call.

---

##### `ListPreparedStatements`<sup>Required</sup> <a name="ListPreparedStatements" id="@cdk_utils/iam.athena.AthenaOperations.property.ListPreparedStatements"></a>

```typescript
public readonly ListPreparedStatements: string[];
```

- *Type:* string[]

IAM actions required for the ListPreparedStatements API call.

---

##### `ListQueryExecutions`<sup>Required</sup> <a name="ListQueryExecutions" id="@cdk_utils/iam.athena.AthenaOperations.property.ListQueryExecutions"></a>

```typescript
public readonly ListQueryExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListQueryExecutions API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.athena.AthenaOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListTableMetadata`<sup>Required</sup> <a name="ListTableMetadata" id="@cdk_utils/iam.athena.AthenaOperations.property.ListTableMetadata"></a>

```typescript
public readonly ListTableMetadata: string[];
```

- *Type:* string[]

IAM actions required for the ListTableMetadata API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.athena.AthenaOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkGroups`<sup>Required</sup> <a name="ListWorkGroups" id="@cdk_utils/iam.athena.AthenaOperations.property.ListWorkGroups"></a>

```typescript
public readonly ListWorkGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkGroups API call.

---

##### `opGetCalculationExecution`<sup>Required</sup> <a name="opGetCalculationExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetCalculationExecution"></a>

```typescript
public readonly opGetCalculationExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetCalculationExecution API call.

---

##### `opGetCalculationExecutionCode`<sup>Required</sup> <a name="opGetCalculationExecutionCode" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetCalculationExecutionCode"></a>

```typescript
public readonly opGetCalculationExecutionCode: string[];
```

- *Type:* string[]

IAM actions required for the GetCalculationExecutionCode API call.

---

##### `opGetCalculationExecutionStatus`<sup>Required</sup> <a name="opGetCalculationExecutionStatus" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetCalculationExecutionStatus"></a>

```typescript
public readonly opGetCalculationExecutionStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetCalculationExecutionStatus API call.

---

##### `opGetCapacityAssignmentConfiguration`<sup>Required</sup> <a name="opGetCapacityAssignmentConfiguration" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetCapacityAssignmentConfiguration"></a>

```typescript
public readonly opGetCapacityAssignmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetCapacityAssignmentConfiguration API call.

---

##### `opGetCapacityReservation`<sup>Required</sup> <a name="opGetCapacityReservation" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetCapacityReservation"></a>

```typescript
public readonly opGetCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the GetCapacityReservation API call.

---

##### `opGetDatabase`<sup>Required</sup> <a name="opGetDatabase" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetDatabase"></a>

```typescript
public readonly opGetDatabase: string[];
```

- *Type:* string[]

IAM actions required for the GetDatabase API call.

---

##### `opGetDataCatalog`<sup>Required</sup> <a name="opGetDataCatalog" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetDataCatalog"></a>

```typescript
public readonly opGetDataCatalog: string[];
```

- *Type:* string[]

IAM actions required for the GetDataCatalog API call.

---

##### `opGetNamedQuery`<sup>Required</sup> <a name="opGetNamedQuery" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetNamedQuery"></a>

```typescript
public readonly opGetNamedQuery: string[];
```

- *Type:* string[]

IAM actions required for the GetNamedQuery API call.

---

##### `opGetNotebookMetadata`<sup>Required</sup> <a name="opGetNotebookMetadata" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetNotebookMetadata"></a>

```typescript
public readonly opGetNotebookMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetNotebookMetadata API call.

---

##### `opGetPreparedStatement`<sup>Required</sup> <a name="opGetPreparedStatement" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetPreparedStatement"></a>

```typescript
public readonly opGetPreparedStatement: string[];
```

- *Type:* string[]

IAM actions required for the GetPreparedStatement API call.

---

##### `opGetQueryExecution`<sup>Required</sup> <a name="opGetQueryExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetQueryExecution"></a>

```typescript
public readonly opGetQueryExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryExecution API call.

---

##### `opGetQueryResults`<sup>Required</sup> <a name="opGetQueryResults" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetQueryResults"></a>

```typescript
public readonly opGetQueryResults: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResults API call.

---

##### `opGetQueryRuntimeStatistics`<sup>Required</sup> <a name="opGetQueryRuntimeStatistics" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetQueryRuntimeStatistics"></a>

```typescript
public readonly opGetQueryRuntimeStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryRuntimeStatistics API call.

---

##### `opGetResourceDashboard`<sup>Required</sup> <a name="opGetResourceDashboard" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetResourceDashboard"></a>

```typescript
public readonly opGetResourceDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceDashboard API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSessionEndpoint`<sup>Required</sup> <a name="opGetSessionEndpoint" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetSessionEndpoint"></a>

```typescript
public readonly opGetSessionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionEndpoint API call.

---

##### `opGetSessionStatus`<sup>Required</sup> <a name="opGetSessionStatus" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetSessionStatus"></a>

```typescript
public readonly opGetSessionStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionStatus API call.

---

##### `opGetTableMetadata`<sup>Required</sup> <a name="opGetTableMetadata" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetTableMetadata"></a>

```typescript
public readonly opGetTableMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetTableMetadata API call.

---

##### `opGetWorkGroup`<sup>Required</sup> <a name="opGetWorkGroup" id="@cdk_utils/iam.athena.AthenaOperations.property.opGetWorkGroup"></a>

```typescript
public readonly opGetWorkGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkGroup API call.

---

##### `PutCapacityAssignmentConfiguration`<sup>Required</sup> <a name="PutCapacityAssignmentConfiguration" id="@cdk_utils/iam.athena.AthenaOperations.property.PutCapacityAssignmentConfiguration"></a>

```typescript
public readonly PutCapacityAssignmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutCapacityAssignmentConfiguration API call.

---

##### `StartCalculationExecution`<sup>Required</sup> <a name="StartCalculationExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.StartCalculationExecution"></a>

```typescript
public readonly StartCalculationExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartCalculationExecution API call.

---

##### `StartQueryExecution`<sup>Required</sup> <a name="StartQueryExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.StartQueryExecution"></a>

```typescript
public readonly StartQueryExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartQueryExecution API call.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.athena.AthenaOperations.property.StartSession"></a>

```typescript
public readonly StartSession: string[];
```

- *Type:* string[]

IAM actions required for the StartSession API call.

---

##### `StopCalculationExecution`<sup>Required</sup> <a name="StopCalculationExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.StopCalculationExecution"></a>

```typescript
public readonly StopCalculationExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopCalculationExecution API call.

---

##### `StopQueryExecution`<sup>Required</sup> <a name="StopQueryExecution" id="@cdk_utils/iam.athena.AthenaOperations.property.StopQueryExecution"></a>

```typescript
public readonly StopQueryExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopQueryExecution API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.athena.AthenaOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.athena.AthenaOperations.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateSession API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.athena.AthenaOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCapacityReservation`<sup>Required</sup> <a name="UpdateCapacityReservation" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdateCapacityReservation"></a>

```typescript
public readonly UpdateCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCapacityReservation API call.

---

##### `UpdateDataCatalog`<sup>Required</sup> <a name="UpdateDataCatalog" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdateDataCatalog"></a>

```typescript
public readonly UpdateDataCatalog: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataCatalog API call.

---

##### `UpdateNamedQuery`<sup>Required</sup> <a name="UpdateNamedQuery" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdateNamedQuery"></a>

```typescript
public readonly UpdateNamedQuery: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNamedQuery API call.

---

##### `UpdateNotebook`<sup>Required</sup> <a name="UpdateNotebook" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdateNotebook"></a>

```typescript
public readonly UpdateNotebook: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotebook API call.

---

##### `UpdateNotebookMetadata`<sup>Required</sup> <a name="UpdateNotebookMetadata" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdateNotebookMetadata"></a>

```typescript
public readonly UpdateNotebookMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotebookMetadata API call.

---

##### `UpdatePreparedStatement`<sup>Required</sup> <a name="UpdatePreparedStatement" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdatePreparedStatement"></a>

```typescript
public readonly UpdatePreparedStatement: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePreparedStatement API call.

---

##### `UpdateWorkGroup`<sup>Required</sup> <a name="UpdateWorkGroup" id="@cdk_utils/iam.athena.AthenaOperations.property.UpdateWorkGroup"></a>

```typescript
public readonly UpdateWorkGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkGroup API call.

---

### AthenaResources <a name="AthenaResources" id="@cdk_utils/iam.athena.AthenaResources"></a>

ARN builders, validators, and parsers for athena resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.athena.AthenaResources.Initializer"></a>

```typescript
import { athena } from '@cdk_utils/iam'

new athena.AthenaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.capacityReservation">capacityReservation</a></code> | Builds an ARN for the capacity-reservation resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.datacatalog">datacatalog</a></code> | Builds an ARN for the datacatalog resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.isValidCapacityReservationArn">isValidCapacityReservationArn</a></code> | Validates whether a string is a valid ARN for the capacity-reservation resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.isValidDatacatalogArn">isValidDatacatalogArn</a></code> | Validates whether a string is a valid ARN for the datacatalog resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.isValidWorkgroupArn">isValidWorkgroupArn</a></code> | Validates whether a string is a valid ARN for the workgroup resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.parseCapacityReservationArn">parseCapacityReservationArn</a></code> | Parses a capacity-reservation ARN into its components. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.parseDatacatalogArn">parseDatacatalogArn</a></code> | Parses a datacatalog ARN into its components. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.parseWorkgroupArn">parseWorkgroupArn</a></code> | Parses a workgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.session">session</a></code> | Builds an ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.athena.AthenaResources.workgroup">workgroup</a></code> | Builds an ARN for the workgroup resource. |

---

##### `capacityReservation` <a name="capacityReservation" id="@cdk_utils/iam.athena.AthenaResources.capacityReservation"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.capacityReservation(props: AthenaCapacityReservationArnProps)
```

Builds an ARN for the capacity-reservation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.athena.AthenaResources.capacityReservation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.athena.AthenaCapacityReservationArnProps">AthenaCapacityReservationArnProps</a>

---

##### `datacatalog` <a name="datacatalog" id="@cdk_utils/iam.athena.AthenaResources.datacatalog"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.datacatalog(props: AthenaDatacatalogArnProps)
```

Builds an ARN for the datacatalog resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.athena.AthenaResources.datacatalog.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.athena.AthenaDatacatalogArnProps">AthenaDatacatalogArnProps</a>

---

##### `isValidCapacityReservationArn` <a name="isValidCapacityReservationArn" id="@cdk_utils/iam.athena.AthenaResources.isValidCapacityReservationArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.isValidCapacityReservationArn(arn: string)
```

Validates whether a string is a valid ARN for the capacity-reservation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.isValidCapacityReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatacatalogArn` <a name="isValidDatacatalogArn" id="@cdk_utils/iam.athena.AthenaResources.isValidDatacatalogArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.isValidDatacatalogArn(arn: string)
```

Validates whether a string is a valid ARN for the datacatalog resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.isValidDatacatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.athena.AthenaResources.isValidSessionArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkgroupArn` <a name="isValidWorkgroupArn" id="@cdk_utils/iam.athena.AthenaResources.isValidWorkgroupArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.isValidWorkgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the workgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.isValidWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCapacityReservationArn` <a name="parseCapacityReservationArn" id="@cdk_utils/iam.athena.AthenaResources.parseCapacityReservationArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.parseCapacityReservationArn(arn: string)
```

Parses a capacity-reservation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.parseCapacityReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatacatalogArn` <a name="parseDatacatalogArn" id="@cdk_utils/iam.athena.AthenaResources.parseDatacatalogArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.parseDatacatalogArn(arn: string)
```

Parses a datacatalog ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.parseDatacatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.athena.AthenaResources.parseSessionArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkgroupArn` <a name="parseWorkgroupArn" id="@cdk_utils/iam.athena.AthenaResources.parseWorkgroupArn"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.parseWorkgroupArn(arn: string)
```

Parses a workgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.athena.AthenaResources.parseWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `session` <a name="session" id="@cdk_utils/iam.athena.AthenaResources.session"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.session(props: AthenaSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.athena.AthenaResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.athena.AthenaSessionArnProps">AthenaSessionArnProps</a>

---

##### `workgroup` <a name="workgroup" id="@cdk_utils/iam.athena.AthenaResources.workgroup"></a>

```typescript
import { athena } from '@cdk_utils/iam'

athena.AthenaResources.workgroup(props: AthenaWorkgroupArnProps)
```

Builds an ARN for the workgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.athena.AthenaResources.workgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.athena.AthenaWorkgroupArnProps">AthenaWorkgroupArnProps</a>

---




