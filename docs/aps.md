# `aps` Submodule <a name="`aps` Submodule" id="@cdk_utils/iam.aps"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApsAnomalydetectorArnComponents <a name="ApsAnomalydetectorArnComponents" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents"></a>

Parsed components of a anomalydetector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsAnomalydetectorArnComponents: aps.ApsAnomalydetectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.anomalyDetectorId">anomalyDetectorId</a></code> | <code>string</code> | The AnomalyDetectorId component. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `anomalyDetectorId`<sup>Required</sup> <a name="anomalyDetectorId" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.anomalyDetectorId"></a>

```typescript
public readonly anomalyDetectorId: string;
```

- *Type:* string

The AnomalyDetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### ApsAnomalydetectorArnProps <a name="ApsAnomalydetectorArnProps" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps"></a>

Properties for building a anomalydetector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsAnomalydetectorArnProps: aps.ApsAnomalydetectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.anomalyDetectorId">anomalyDetectorId</a></code> | <code>string</code> | The AnomalyDetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `anomalyDetectorId`<sup>Required</sup> <a name="anomalyDetectorId" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.anomalyDetectorId"></a>

```typescript
public readonly anomalyDetectorId: string;
```

- *Type:* string

The AnomalyDetectorId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aps.ApsAnomalydetectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApsClusterArnComponents <a name="ApsClusterArnComponents" id="@cdk_utils/iam.aps.ApsClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsClusterArnComponents.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsClusterArnComponents: aps.ApsClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aps.ApsClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.aps.ApsClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aps.ApsClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApsClusterArnProps <a name="ApsClusterArnProps" id="@cdk_utils/iam.aps.ApsClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsClusterArnProps.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsClusterArnProps: aps.ApsClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.aps.ApsClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aps.ApsClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aps.ApsClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApsRulegroupsnamespaceArnComponents <a name="ApsRulegroupsnamespaceArnComponents" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents"></a>

Parsed components of a rulegroupsnamespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsRulegroupsnamespaceArnComponents: aps.ApsRulegroupsnamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.namespace">namespace</a></code> | <code>string</code> | The Namespace component. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### ApsRulegroupsnamespaceArnProps <a name="ApsRulegroupsnamespaceArnProps" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps"></a>

Properties for building a rulegroupsnamespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsRulegroupsnamespaceArnProps: aps.ApsRulegroupsnamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.namespace">namespace</a></code> | <code>string</code> | The Namespace component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApsScraperArnComponents <a name="ApsScraperArnComponents" id="@cdk_utils/iam.aps.ApsScraperArnComponents"></a>

Parsed components of a scraper ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsScraperArnComponents.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsScraperArnComponents: aps.ApsScraperArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnComponents.property.scraperId">scraperId</a></code> | <code>string</code> | The ScraperId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aps.ApsScraperArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsScraperArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aps.ApsScraperArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdk_utils/iam.aps.ApsScraperArnComponents.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

The ScraperId component.

---

### ApsScraperArnProps <a name="ApsScraperArnProps" id="@cdk_utils/iam.aps.ApsScraperArnProps"></a>

Properties for building a scraper ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsScraperArnProps.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsScraperArnProps: aps.ApsScraperArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnProps.property.scraperId">scraperId</a></code> | <code>string</code> | The ScraperId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsScraperArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdk_utils/iam.aps.ApsScraperArnProps.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

The ScraperId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aps.ApsScraperArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsScraperArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aps.ApsScraperArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApsWorkspaceArnComponents <a name="ApsWorkspaceArnComponents" id="@cdk_utils/iam.aps.ApsWorkspaceArnComponents"></a>

Parsed components of a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsWorkspaceArnComponents.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsWorkspaceArnComponents: aps.ApsWorkspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.aps.ApsWorkspaceArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### ApsWorkspaceArnProps <a name="ApsWorkspaceArnProps" id="@cdk_utils/iam.aps.ApsWorkspaceArnProps"></a>

Properties for building a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aps.ApsWorkspaceArnProps.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

const apsWorkspaceArnProps: aps.ApsWorkspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aps.ApsWorkspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApsActions <a name="ApsActions" id="@cdk_utils/iam.aps.ApsActions"></a>

IAM action constants for the aps service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aps.ApsActions.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

new aps.ApsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.actionGetAlertManagerSilence">actionGetAlertManagerSilence</a></code> | <code>string</code> | [Read] aps:GetAlertManagerSilence. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.actionGetAlertManagerStatus">actionGetAlertManagerStatus</a></code> | <code>string</code> | [Read] aps:GetAlertManagerStatus. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.actionGetDefaultScraperConfiguration">actionGetDefaultScraperConfiguration</a></code> | <code>string</code> | [Read] aps:GetDefaultScraperConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.actionGetLabels">actionGetLabels</a></code> | <code>string</code> | [Read] aps:GetLabels. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.actionGetMetricMetadata">actionGetMetricMetadata</a></code> | <code>string</code> | [Read] aps:GetMetricMetadata. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.actionGetSeries">actionGetSeries</a></code> | <code>string</code> | [Read] aps:GetSeries. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateAlertManagerAlerts">CreateAlertManagerAlerts</a></code> | <code>string</code> | [Write] aps:CreateAlertManagerAlerts. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateAlertManagerDefinition">CreateAlertManagerDefinition</a></code> | <code>string</code> | [Write] aps:CreateAlertManagerDefinition. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateAnomalyDetector">CreateAnomalyDetector</a></code> | <code>string</code> | [Write] aps:CreateAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateLoggingConfiguration">CreateLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:CreateLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateQueryLoggingConfiguration">CreateQueryLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:CreateQueryLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateRuleGroupsNamespace">CreateRuleGroupsNamespace</a></code> | <code>string</code> | [Write] aps:CreateRuleGroupsNamespace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateScraper">CreateScraper</a></code> | <code>string</code> | [Write] aps:CreateScraper. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string</code> | [Write] aps:CreateWorkspace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteAlertManagerDefinition">DeleteAlertManagerDefinition</a></code> | <code>string</code> | [Write] aps:DeleteAlertManagerDefinition. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteAlertManagerSilence">DeleteAlertManagerSilence</a></code> | <code>string</code> | [Write] aps:DeleteAlertManagerSilence. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string</code> | [Write] aps:DeleteAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:DeleteLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteQueryLoggingConfiguration">DeleteQueryLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:DeleteQueryLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] aps:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteRuleGroupsNamespace">DeleteRuleGroupsNamespace</a></code> | <code>string</code> | [Write] aps:DeleteRuleGroupsNamespace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteScraper">DeleteScraper</a></code> | <code>string</code> | [Write] aps:DeleteScraper. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteScraperLoggingConfiguration">DeleteScraperLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:DeleteScraperLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string</code> | [Write] aps:DeleteWorkspace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeAlertManagerDefinition">DescribeAlertManagerDefinition</a></code> | <code>string</code> | [Read] aps:DescribeAlertManagerDefinition. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeAnomalyDetector">DescribeAnomalyDetector</a></code> | <code>string</code> | [Read] aps:DescribeAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeLoggingConfiguration">DescribeLoggingConfiguration</a></code> | <code>string</code> | [Read] aps:DescribeLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeQueryLoggingConfiguration">DescribeQueryLoggingConfiguration</a></code> | <code>string</code> | [Read] aps:DescribeQueryLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string</code> | [Read] aps:DescribeResourcePolicy. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeRuleGroupsNamespace">DescribeRuleGroupsNamespace</a></code> | <code>string</code> | [Read] aps:DescribeRuleGroupsNamespace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeScraper">DescribeScraper</a></code> | <code>string</code> | [Read] aps:DescribeScraper. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeScraperLoggingConfiguration">DescribeScraperLoggingConfiguration</a></code> | <code>string</code> | [Read] aps:DescribeScraperLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string</code> | [Read] aps:DescribeWorkspace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.DescribeWorkspaceConfiguration">DescribeWorkspaceConfiguration</a></code> | <code>string</code> | [Read] aps:DescribeWorkspaceConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerAlertGroups">ListAlertManagerAlertGroups</a></code> | <code>string</code> | [Read] aps:ListAlertManagerAlertGroups. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerAlerts">ListAlertManagerAlerts</a></code> | <code>string</code> | [Read] aps:ListAlertManagerAlerts. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerReceivers">ListAlertManagerReceivers</a></code> | <code>string</code> | [Read] aps:ListAlertManagerReceivers. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerSilences">ListAlertManagerSilences</a></code> | <code>string</code> | [Read] aps:ListAlertManagerSilences. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListAlerts">ListAlerts</a></code> | <code>string</code> | [Read] aps:ListAlerts. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListAnomalyDetectors">ListAnomalyDetectors</a></code> | <code>string</code> | [List] aps:ListAnomalyDetectors. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListRuleGroupsNamespaces">ListRuleGroupsNamespaces</a></code> | <code>string</code> | [List] aps:ListRuleGroupsNamespaces. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListRules">ListRules</a></code> | <code>string</code> | [Read] aps:ListRules. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListScrapers">ListScrapers</a></code> | <code>string</code> | [List] aps:ListScrapers. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] aps:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string</code> | [List] aps:ListWorkspaces. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.PreviewAnomalyDetector">PreviewAnomalyDetector</a></code> | <code>string</code> | [Read] aps:PreviewAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.PutAlertManagerDefinition">PutAlertManagerDefinition</a></code> | <code>string</code> | [Write] aps:PutAlertManagerDefinition. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.PutAlertManagerSilences">PutAlertManagerSilences</a></code> | <code>string</code> | [Write] aps:PutAlertManagerSilences. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.PutAnomalyDetector">PutAnomalyDetector</a></code> | <code>string</code> | [Write] aps:PutAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] aps:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.PutRuleGroupsNamespace">PutRuleGroupsNamespace</a></code> | <code>string</code> | [Write] aps:PutRuleGroupsNamespace. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.QueryMetrics">QueryMetrics</a></code> | <code>string</code> | [Read] aps:QueryMetrics. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.RemoteWrite">RemoteWrite</a></code> | <code>string</code> | [Write] aps:RemoteWrite. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] aps:TagResource. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] aps:UntagResource. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UpdateLoggingConfiguration">UpdateLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:UpdateLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UpdateQueryLoggingConfiguration">UpdateQueryLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:UpdateQueryLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UpdateScraper">UpdateScraper</a></code> | <code>string</code> | [Write] aps:UpdateScraper. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UpdateScraperLoggingConfiguration">UpdateScraperLoggingConfiguration</a></code> | <code>string</code> | [Write] aps:UpdateScraperLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UpdateWorkspaceAlias">UpdateWorkspaceAlias</a></code> | <code>string</code> | [Write] aps:UpdateWorkspaceAlias. |
| <code><a href="#@cdk_utils/iam.aps.ApsActions.property.UpdateWorkspaceConfiguration">UpdateWorkspaceConfiguration</a></code> | <code>string</code> | [Write] aps:UpdateWorkspaceConfiguration. |

---

##### `actionGetAlertManagerSilence`<sup>Required</sup> <a name="actionGetAlertManagerSilence" id="@cdk_utils/iam.aps.ApsActions.property.actionGetAlertManagerSilence"></a>

```typescript
public readonly actionGetAlertManagerSilence: string;
```

- *Type:* string

[Read] aps:GetAlertManagerSilence.

---

##### `actionGetAlertManagerStatus`<sup>Required</sup> <a name="actionGetAlertManagerStatus" id="@cdk_utils/iam.aps.ApsActions.property.actionGetAlertManagerStatus"></a>

```typescript
public readonly actionGetAlertManagerStatus: string;
```

- *Type:* string

[Read] aps:GetAlertManagerStatus.

---

##### `actionGetDefaultScraperConfiguration`<sup>Required</sup> <a name="actionGetDefaultScraperConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.actionGetDefaultScraperConfiguration"></a>

```typescript
public readonly actionGetDefaultScraperConfiguration: string;
```

- *Type:* string

[Read] aps:GetDefaultScraperConfiguration.

---

##### `actionGetLabels`<sup>Required</sup> <a name="actionGetLabels" id="@cdk_utils/iam.aps.ApsActions.property.actionGetLabels"></a>

```typescript
public readonly actionGetLabels: string;
```

- *Type:* string

[Read] aps:GetLabels.

---

##### `actionGetMetricMetadata`<sup>Required</sup> <a name="actionGetMetricMetadata" id="@cdk_utils/iam.aps.ApsActions.property.actionGetMetricMetadata"></a>

```typescript
public readonly actionGetMetricMetadata: string;
```

- *Type:* string

[Read] aps:GetMetricMetadata.

---

##### `actionGetSeries`<sup>Required</sup> <a name="actionGetSeries" id="@cdk_utils/iam.aps.ApsActions.property.actionGetSeries"></a>

```typescript
public readonly actionGetSeries: string;
```

- *Type:* string

[Read] aps:GetSeries.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aps.ApsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aps.ApsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aps.ApsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aps.ApsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aps.ApsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAlertManagerAlerts`<sup>Required</sup> <a name="CreateAlertManagerAlerts" id="@cdk_utils/iam.aps.ApsActions.property.CreateAlertManagerAlerts"></a>

```typescript
public readonly CreateAlertManagerAlerts: string;
```

- *Type:* string

[Write] aps:CreateAlertManagerAlerts.

---

##### `CreateAlertManagerDefinition`<sup>Required</sup> <a name="CreateAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsActions.property.CreateAlertManagerDefinition"></a>

```typescript
public readonly CreateAlertManagerDefinition: string;
```

- *Type:* string

[Write] aps:CreateAlertManagerDefinition.

---

##### `CreateAnomalyDetector`<sup>Required</sup> <a name="CreateAnomalyDetector" id="@cdk_utils/iam.aps.ApsActions.property.CreateAnomalyDetector"></a>

```typescript
public readonly CreateAnomalyDetector: string;
```

- *Type:* string

[Write] aps:CreateAnomalyDetector.

---

##### `CreateLoggingConfiguration`<sup>Required</sup> <a name="CreateLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.CreateLoggingConfiguration"></a>

```typescript
public readonly CreateLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:CreateLoggingConfiguration.

---

##### `CreateQueryLoggingConfiguration`<sup>Required</sup> <a name="CreateQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.CreateQueryLoggingConfiguration"></a>

```typescript
public readonly CreateQueryLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:CreateQueryLoggingConfiguration.

---

##### `CreateRuleGroupsNamespace`<sup>Required</sup> <a name="CreateRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsActions.property.CreateRuleGroupsNamespace"></a>

```typescript
public readonly CreateRuleGroupsNamespace: string;
```

- *Type:* string

[Write] aps:CreateRuleGroupsNamespace.

---

##### `CreateScraper`<sup>Required</sup> <a name="CreateScraper" id="@cdk_utils/iam.aps.ApsActions.property.CreateScraper"></a>

```typescript
public readonly CreateScraper: string;
```

- *Type:* string

[Write] aps:CreateScraper.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.aps.ApsActions.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string;
```

- *Type:* string

[Write] aps:CreateWorkspace.

---

##### `DeleteAlertManagerDefinition`<sup>Required</sup> <a name="DeleteAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsActions.property.DeleteAlertManagerDefinition"></a>

```typescript
public readonly DeleteAlertManagerDefinition: string;
```

- *Type:* string

[Write] aps:DeleteAlertManagerDefinition.

---

##### `DeleteAlertManagerSilence`<sup>Required</sup> <a name="DeleteAlertManagerSilence" id="@cdk_utils/iam.aps.ApsActions.property.DeleteAlertManagerSilence"></a>

```typescript
public readonly DeleteAlertManagerSilence: string;
```

- *Type:* string

[Write] aps:DeleteAlertManagerSilence.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.aps.ApsActions.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string;
```

- *Type:* string

[Write] aps:DeleteAnomalyDetector.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:DeleteLoggingConfiguration.

---

##### `DeleteQueryLoggingConfiguration`<sup>Required</sup> <a name="DeleteQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DeleteQueryLoggingConfiguration"></a>

```typescript
public readonly DeleteQueryLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:DeleteQueryLoggingConfiguration.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.aps.ApsActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] aps:DeleteResourcePolicy.

---

##### `DeleteRuleGroupsNamespace`<sup>Required</sup> <a name="DeleteRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsActions.property.DeleteRuleGroupsNamespace"></a>

```typescript
public readonly DeleteRuleGroupsNamespace: string;
```

- *Type:* string

[Write] aps:DeleteRuleGroupsNamespace.

---

##### `DeleteScraper`<sup>Required</sup> <a name="DeleteScraper" id="@cdk_utils/iam.aps.ApsActions.property.DeleteScraper"></a>

```typescript
public readonly DeleteScraper: string;
```

- *Type:* string

[Write] aps:DeleteScraper.

---

##### `DeleteScraperLoggingConfiguration`<sup>Required</sup> <a name="DeleteScraperLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DeleteScraperLoggingConfiguration"></a>

```typescript
public readonly DeleteScraperLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:DeleteScraperLoggingConfiguration.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.aps.ApsActions.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string;
```

- *Type:* string

[Write] aps:DeleteWorkspace.

---

##### `DescribeAlertManagerDefinition`<sup>Required</sup> <a name="DescribeAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsActions.property.DescribeAlertManagerDefinition"></a>

```typescript
public readonly DescribeAlertManagerDefinition: string;
```

- *Type:* string

[Read] aps:DescribeAlertManagerDefinition.

---

##### `DescribeAnomalyDetector`<sup>Required</sup> <a name="DescribeAnomalyDetector" id="@cdk_utils/iam.aps.ApsActions.property.DescribeAnomalyDetector"></a>

```typescript
public readonly DescribeAnomalyDetector: string;
```

- *Type:* string

[Read] aps:DescribeAnomalyDetector.

---

##### `DescribeLoggingConfiguration`<sup>Required</sup> <a name="DescribeLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DescribeLoggingConfiguration"></a>

```typescript
public readonly DescribeLoggingConfiguration: string;
```

- *Type:* string

[Read] aps:DescribeLoggingConfiguration.

---

##### `DescribeQueryLoggingConfiguration`<sup>Required</sup> <a name="DescribeQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DescribeQueryLoggingConfiguration"></a>

```typescript
public readonly DescribeQueryLoggingConfiguration: string;
```

- *Type:* string

[Read] aps:DescribeQueryLoggingConfiguration.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.aps.ApsActions.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string;
```

- *Type:* string

[Read] aps:DescribeResourcePolicy.

---

##### `DescribeRuleGroupsNamespace`<sup>Required</sup> <a name="DescribeRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsActions.property.DescribeRuleGroupsNamespace"></a>

```typescript
public readonly DescribeRuleGroupsNamespace: string;
```

- *Type:* string

[Read] aps:DescribeRuleGroupsNamespace.

---

##### `DescribeScraper`<sup>Required</sup> <a name="DescribeScraper" id="@cdk_utils/iam.aps.ApsActions.property.DescribeScraper"></a>

```typescript
public readonly DescribeScraper: string;
```

- *Type:* string

[Read] aps:DescribeScraper.

---

##### `DescribeScraperLoggingConfiguration`<sup>Required</sup> <a name="DescribeScraperLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DescribeScraperLoggingConfiguration"></a>

```typescript
public readonly DescribeScraperLoggingConfiguration: string;
```

- *Type:* string

[Read] aps:DescribeScraperLoggingConfiguration.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.aps.ApsActions.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string;
```

- *Type:* string

[Read] aps:DescribeWorkspace.

---

##### `DescribeWorkspaceConfiguration`<sup>Required</sup> <a name="DescribeWorkspaceConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.DescribeWorkspaceConfiguration"></a>

```typescript
public readonly DescribeWorkspaceConfiguration: string;
```

- *Type:* string

[Read] aps:DescribeWorkspaceConfiguration.

---

##### `ListAlertManagerAlertGroups`<sup>Required</sup> <a name="ListAlertManagerAlertGroups" id="@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerAlertGroups"></a>

```typescript
public readonly ListAlertManagerAlertGroups: string;
```

- *Type:* string

[Read] aps:ListAlertManagerAlertGroups.

---

##### `ListAlertManagerAlerts`<sup>Required</sup> <a name="ListAlertManagerAlerts" id="@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerAlerts"></a>

```typescript
public readonly ListAlertManagerAlerts: string;
```

- *Type:* string

[Read] aps:ListAlertManagerAlerts.

---

##### `ListAlertManagerReceivers`<sup>Required</sup> <a name="ListAlertManagerReceivers" id="@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerReceivers"></a>

```typescript
public readonly ListAlertManagerReceivers: string;
```

- *Type:* string

[Read] aps:ListAlertManagerReceivers.

---

##### `ListAlertManagerSilences`<sup>Required</sup> <a name="ListAlertManagerSilences" id="@cdk_utils/iam.aps.ApsActions.property.ListAlertManagerSilences"></a>

```typescript
public readonly ListAlertManagerSilences: string;
```

- *Type:* string

[Read] aps:ListAlertManagerSilences.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.aps.ApsActions.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string;
```

- *Type:* string

[Read] aps:ListAlerts.

---

##### `ListAnomalyDetectors`<sup>Required</sup> <a name="ListAnomalyDetectors" id="@cdk_utils/iam.aps.ApsActions.property.ListAnomalyDetectors"></a>

```typescript
public readonly ListAnomalyDetectors: string;
```

- *Type:* string

[List] aps:ListAnomalyDetectors.

---

##### `ListRuleGroupsNamespaces`<sup>Required</sup> <a name="ListRuleGroupsNamespaces" id="@cdk_utils/iam.aps.ApsActions.property.ListRuleGroupsNamespaces"></a>

```typescript
public readonly ListRuleGroupsNamespaces: string;
```

- *Type:* string

[List] aps:ListRuleGroupsNamespaces.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.aps.ApsActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[Read] aps:ListRules.

---

##### `ListScrapers`<sup>Required</sup> <a name="ListScrapers" id="@cdk_utils/iam.aps.ApsActions.property.ListScrapers"></a>

```typescript
public readonly ListScrapers: string;
```

- *Type:* string

[List] aps:ListScrapers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aps.ApsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] aps:ListTagsForResource.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.aps.ApsActions.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string;
```

- *Type:* string

[List] aps:ListWorkspaces.

---

##### `PreviewAnomalyDetector`<sup>Required</sup> <a name="PreviewAnomalyDetector" id="@cdk_utils/iam.aps.ApsActions.property.PreviewAnomalyDetector"></a>

```typescript
public readonly PreviewAnomalyDetector: string;
```

- *Type:* string

[Read] aps:PreviewAnomalyDetector.

---

##### `PutAlertManagerDefinition`<sup>Required</sup> <a name="PutAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsActions.property.PutAlertManagerDefinition"></a>

```typescript
public readonly PutAlertManagerDefinition: string;
```

- *Type:* string

[Write] aps:PutAlertManagerDefinition.

---

##### `PutAlertManagerSilences`<sup>Required</sup> <a name="PutAlertManagerSilences" id="@cdk_utils/iam.aps.ApsActions.property.PutAlertManagerSilences"></a>

```typescript
public readonly PutAlertManagerSilences: string;
```

- *Type:* string

[Write] aps:PutAlertManagerSilences.

---

##### `PutAnomalyDetector`<sup>Required</sup> <a name="PutAnomalyDetector" id="@cdk_utils/iam.aps.ApsActions.property.PutAnomalyDetector"></a>

```typescript
public readonly PutAnomalyDetector: string;
```

- *Type:* string

[Write] aps:PutAnomalyDetector.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.aps.ApsActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] aps:PutResourcePolicy.

---

##### `PutRuleGroupsNamespace`<sup>Required</sup> <a name="PutRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsActions.property.PutRuleGroupsNamespace"></a>

```typescript
public readonly PutRuleGroupsNamespace: string;
```

- *Type:* string

[Write] aps:PutRuleGroupsNamespace.

---

##### `QueryMetrics`<sup>Required</sup> <a name="QueryMetrics" id="@cdk_utils/iam.aps.ApsActions.property.QueryMetrics"></a>

```typescript
public readonly QueryMetrics: string;
```

- *Type:* string

[Read] aps:QueryMetrics.

---

##### `RemoteWrite`<sup>Required</sup> <a name="RemoteWrite" id="@cdk_utils/iam.aps.ApsActions.property.RemoteWrite"></a>

```typescript
public readonly RemoteWrite: string;
```

- *Type:* string

[Write] aps:RemoteWrite.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aps.ApsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aps.ApsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] aps:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aps.ApsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] aps:UntagResource.

---

##### `UpdateLoggingConfiguration`<sup>Required</sup> <a name="UpdateLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.UpdateLoggingConfiguration"></a>

```typescript
public readonly UpdateLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:UpdateLoggingConfiguration.

---

##### `UpdateQueryLoggingConfiguration`<sup>Required</sup> <a name="UpdateQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.UpdateQueryLoggingConfiguration"></a>

```typescript
public readonly UpdateQueryLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:UpdateQueryLoggingConfiguration.

---

##### `UpdateScraper`<sup>Required</sup> <a name="UpdateScraper" id="@cdk_utils/iam.aps.ApsActions.property.UpdateScraper"></a>

```typescript
public readonly UpdateScraper: string;
```

- *Type:* string

[Write] aps:UpdateScraper.

---

##### `UpdateScraperLoggingConfiguration`<sup>Required</sup> <a name="UpdateScraperLoggingConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.UpdateScraperLoggingConfiguration"></a>

```typescript
public readonly UpdateScraperLoggingConfiguration: string;
```

- *Type:* string

[Write] aps:UpdateScraperLoggingConfiguration.

---

##### `UpdateWorkspaceAlias`<sup>Required</sup> <a name="UpdateWorkspaceAlias" id="@cdk_utils/iam.aps.ApsActions.property.UpdateWorkspaceAlias"></a>

```typescript
public readonly UpdateWorkspaceAlias: string;
```

- *Type:* string

[Write] aps:UpdateWorkspaceAlias.

---

##### `UpdateWorkspaceConfiguration`<sup>Required</sup> <a name="UpdateWorkspaceConfiguration" id="@cdk_utils/iam.aps.ApsActions.property.UpdateWorkspaceConfiguration"></a>

```typescript
public readonly UpdateWorkspaceConfiguration: string;
```

- *Type:* string

[Write] aps:UpdateWorkspaceConfiguration.

---

### ApsConditions <a name="ApsConditions" id="@cdk_utils/iam.aps.ApsConditions"></a>

Condition key constants and builders for aps.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aps.ApsConditions.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

new aps.ApsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aps.ApsConditions.requestTag"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aps.ApsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aps.ApsConditions.resourceTag"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aps.ApsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aps.ApsConditions.tagKeys"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aps.ApsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.actionGetAlertManagerSilenceConditionKeys">actionGetAlertManagerSilenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAlertManagerSilence action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.actionGetAlertManagerStatusConditionKeys">actionGetAlertManagerStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAlertManagerStatus action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.actionGetLabelsConditionKeys">actionGetLabelsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLabels action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.actionGetMetricMetadataConditionKeys">actionGetMetricMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMetricMetadata action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.actionGetSeriesConditionKeys">actionGetSeriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSeries action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateAlertManagerAlertsConditionKeys">CreateAlertManagerAlertsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlertManagerAlerts action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateAlertManagerDefinitionConditionKeys">CreateAlertManagerDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlertManagerDefinition action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateAnomalyDetectorConditionKeys">CreateAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateLoggingConfigurationConditionKeys">CreateLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateQueryLoggingConfigurationConditionKeys">CreateQueryLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQueryLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateRuleGroupsNamespaceConditionKeys">CreateRuleGroupsNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleGroupsNamespace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateScraperConditionKeys">CreateScraperConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScraper action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.CreateWorkspaceConditionKeys">CreateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteAlertManagerDefinitionConditionKeys">DeleteAlertManagerDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAlertManagerDefinition action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteAlertManagerSilenceConditionKeys">DeleteAlertManagerSilenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAlertManagerSilence action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteAnomalyDetectorConditionKeys">DeleteAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteLoggingConfigurationConditionKeys">DeleteLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteQueryLoggingConfigurationConditionKeys">DeleteQueryLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteQueryLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteResourcePolicyConditionKeys">DeleteResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteRuleGroupsNamespaceConditionKeys">DeleteRuleGroupsNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRuleGroupsNamespace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteScraperConditionKeys">DeleteScraperConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteScraper action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteScraperLoggingConfigurationConditionKeys">DeleteScraperLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteScraperLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DeleteWorkspaceConditionKeys">DeleteWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkspace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeAlertManagerDefinitionConditionKeys">DescribeAlertManagerDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAlertManagerDefinition action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeAnomalyDetectorConditionKeys">DescribeAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeLoggingConfigurationConditionKeys">DescribeLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeQueryLoggingConfigurationConditionKeys">DescribeQueryLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeQueryLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeResourcePolicyConditionKeys">DescribeResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeRuleGroupsNamespaceConditionKeys">DescribeRuleGroupsNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRuleGroupsNamespace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeScraperConditionKeys">DescribeScraperConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeScraper action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeScraperLoggingConfigurationConditionKeys">DescribeScraperLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeScraperLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeWorkspaceConditionKeys">DescribeWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeWorkspace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.DescribeWorkspaceConfigurationConditionKeys">DescribeWorkspaceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeWorkspaceConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerAlertGroupsConditionKeys">ListAlertManagerAlertGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlertManagerAlertGroups action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerAlertsConditionKeys">ListAlertManagerAlertsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlertManagerAlerts action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerReceiversConditionKeys">ListAlertManagerReceiversConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlertManagerReceivers action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerSilencesConditionKeys">ListAlertManagerSilencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlertManagerSilences action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListAlertsConditionKeys">ListAlertsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAlerts action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListAnomalyDetectorsConditionKeys">ListAnomalyDetectorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAnomalyDetectors action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListRuleGroupsNamespacesConditionKeys">ListRuleGroupsNamespacesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRuleGroupsNamespaces action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListRulesConditionKeys">ListRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRules action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.PreviewAnomalyDetectorConditionKeys">PreviewAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PreviewAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.PutAlertManagerDefinitionConditionKeys">PutAlertManagerDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAlertManagerDefinition action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.PutAlertManagerSilencesConditionKeys">PutAlertManagerSilencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAlertManagerSilences action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.PutAnomalyDetectorConditionKeys">PutAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.PutResourcePolicyConditionKeys">PutResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.PutRuleGroupsNamespaceConditionKeys">PutRuleGroupsNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutRuleGroupsNamespace action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.QueryMetricsConditionKeys">QueryMetricsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the QueryMetrics action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.RemoteWriteConditionKeys">RemoteWriteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoteWrite action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UpdateLoggingConfigurationConditionKeys">UpdateLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UpdateQueryLoggingConfigurationConditionKeys">UpdateQueryLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueryLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UpdateScraperConditionKeys">UpdateScraperConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateScraper action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UpdateScraperLoggingConfigurationConditionKeys">UpdateScraperLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateScraperLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UpdateWorkspaceAliasConditionKeys">UpdateWorkspaceAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkspaceAlias action. |
| <code><a href="#@cdk_utils/iam.aps.ApsConditions.property.UpdateWorkspaceConfigurationConditionKeys">UpdateWorkspaceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkspaceConfiguration action. |

---

##### `actionGetAlertManagerSilenceConditionKeys`<sup>Required</sup> <a name="actionGetAlertManagerSilenceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.actionGetAlertManagerSilenceConditionKeys"></a>

```typescript
public readonly actionGetAlertManagerSilenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAlertManagerSilence action.

---

##### `actionGetAlertManagerStatusConditionKeys`<sup>Required</sup> <a name="actionGetAlertManagerStatusConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.actionGetAlertManagerStatusConditionKeys"></a>

```typescript
public readonly actionGetAlertManagerStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAlertManagerStatus action.

---

##### `actionGetLabelsConditionKeys`<sup>Required</sup> <a name="actionGetLabelsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.actionGetLabelsConditionKeys"></a>

```typescript
public readonly actionGetLabelsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLabels action.

---

##### `actionGetMetricMetadataConditionKeys`<sup>Required</sup> <a name="actionGetMetricMetadataConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.actionGetMetricMetadataConditionKeys"></a>

```typescript
public readonly actionGetMetricMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMetricMetadata action.

---

##### `actionGetSeriesConditionKeys`<sup>Required</sup> <a name="actionGetSeriesConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.actionGetSeriesConditionKeys"></a>

```typescript
public readonly actionGetSeriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSeries action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aps.ApsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aps.ApsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aps.ApsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAlertManagerAlertsConditionKeys`<sup>Required</sup> <a name="CreateAlertManagerAlertsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateAlertManagerAlertsConditionKeys"></a>

```typescript
public readonly CreateAlertManagerAlertsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlertManagerAlerts action.

---

##### `CreateAlertManagerDefinitionConditionKeys`<sup>Required</sup> <a name="CreateAlertManagerDefinitionConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateAlertManagerDefinitionConditionKeys"></a>

```typescript
public readonly CreateAlertManagerDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlertManagerDefinition action.

---

##### `CreateAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="CreateAnomalyDetectorConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateAnomalyDetectorConditionKeys"></a>

```typescript
public readonly CreateAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnomalyDetector action.

---

##### `CreateLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="CreateLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateLoggingConfigurationConditionKeys"></a>

```typescript
public readonly CreateLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoggingConfiguration action.

---

##### `CreateQueryLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="CreateQueryLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateQueryLoggingConfigurationConditionKeys"></a>

```typescript
public readonly CreateQueryLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQueryLoggingConfiguration action.

---

##### `CreateRuleGroupsNamespaceConditionKeys`<sup>Required</sup> <a name="CreateRuleGroupsNamespaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateRuleGroupsNamespaceConditionKeys"></a>

```typescript
public readonly CreateRuleGroupsNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleGroupsNamespace action.

---

##### `CreateScraperConditionKeys`<sup>Required</sup> <a name="CreateScraperConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateScraperConditionKeys"></a>

```typescript
public readonly CreateScraperConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScraper action.

---

##### `CreateWorkspaceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.CreateWorkspaceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspace action.

---

##### `DeleteAlertManagerDefinitionConditionKeys`<sup>Required</sup> <a name="DeleteAlertManagerDefinitionConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteAlertManagerDefinitionConditionKeys"></a>

```typescript
public readonly DeleteAlertManagerDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAlertManagerDefinition action.

---

##### `DeleteAlertManagerSilenceConditionKeys`<sup>Required</sup> <a name="DeleteAlertManagerSilenceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteAlertManagerSilenceConditionKeys"></a>

```typescript
public readonly DeleteAlertManagerSilenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAlertManagerSilence action.

---

##### `DeleteAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="DeleteAnomalyDetectorConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteAnomalyDetectorConditionKeys"></a>

```typescript
public readonly DeleteAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAnomalyDetector action.

---

##### `DeleteLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DeleteLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLoggingConfiguration action.

---

##### `DeleteQueryLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteQueryLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteQueryLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DeleteQueryLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteQueryLoggingConfiguration action.

---

##### `DeleteResourcePolicyConditionKeys`<sup>Required</sup> <a name="DeleteResourcePolicyConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteResourcePolicyConditionKeys"></a>

```typescript
public readonly DeleteResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourcePolicy action.

---

##### `DeleteRuleGroupsNamespaceConditionKeys`<sup>Required</sup> <a name="DeleteRuleGroupsNamespaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteRuleGroupsNamespaceConditionKeys"></a>

```typescript
public readonly DeleteRuleGroupsNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRuleGroupsNamespace action.

---

##### `DeleteScraperConditionKeys`<sup>Required</sup> <a name="DeleteScraperConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteScraperConditionKeys"></a>

```typescript
public readonly DeleteScraperConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteScraper action.

---

##### `DeleteScraperLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteScraperLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteScraperLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DeleteScraperLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteScraperLoggingConfiguration action.

---

##### `DeleteWorkspaceConditionKeys`<sup>Required</sup> <a name="DeleteWorkspaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DeleteWorkspaceConditionKeys"></a>

```typescript
public readonly DeleteWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkspace action.

---

##### `DescribeAlertManagerDefinitionConditionKeys`<sup>Required</sup> <a name="DescribeAlertManagerDefinitionConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeAlertManagerDefinitionConditionKeys"></a>

```typescript
public readonly DescribeAlertManagerDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAlertManagerDefinition action.

---

##### `DescribeAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="DescribeAnomalyDetectorConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeAnomalyDetectorConditionKeys"></a>

```typescript
public readonly DescribeAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAnomalyDetector action.

---

##### `DescribeLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DescribeLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DescribeLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeLoggingConfiguration action.

---

##### `DescribeQueryLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DescribeQueryLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeQueryLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DescribeQueryLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeQueryLoggingConfiguration action.

---

##### `DescribeResourcePolicyConditionKeys`<sup>Required</sup> <a name="DescribeResourcePolicyConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeResourcePolicyConditionKeys"></a>

```typescript
public readonly DescribeResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeResourcePolicy action.

---

##### `DescribeRuleGroupsNamespaceConditionKeys`<sup>Required</sup> <a name="DescribeRuleGroupsNamespaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeRuleGroupsNamespaceConditionKeys"></a>

```typescript
public readonly DescribeRuleGroupsNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRuleGroupsNamespace action.

---

##### `DescribeScraperConditionKeys`<sup>Required</sup> <a name="DescribeScraperConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeScraperConditionKeys"></a>

```typescript
public readonly DescribeScraperConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeScraper action.

---

##### `DescribeScraperLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DescribeScraperLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeScraperLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DescribeScraperLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeScraperLoggingConfiguration action.

---

##### `DescribeWorkspaceConditionKeys`<sup>Required</sup> <a name="DescribeWorkspaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeWorkspaceConditionKeys"></a>

```typescript
public readonly DescribeWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeWorkspace action.

---

##### `DescribeWorkspaceConfigurationConditionKeys`<sup>Required</sup> <a name="DescribeWorkspaceConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.DescribeWorkspaceConfigurationConditionKeys"></a>

```typescript
public readonly DescribeWorkspaceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeWorkspaceConfiguration action.

---

##### `ListAlertManagerAlertGroupsConditionKeys`<sup>Required</sup> <a name="ListAlertManagerAlertGroupsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerAlertGroupsConditionKeys"></a>

```typescript
public readonly ListAlertManagerAlertGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlertManagerAlertGroups action.

---

##### `ListAlertManagerAlertsConditionKeys`<sup>Required</sup> <a name="ListAlertManagerAlertsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerAlertsConditionKeys"></a>

```typescript
public readonly ListAlertManagerAlertsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlertManagerAlerts action.

---

##### `ListAlertManagerReceiversConditionKeys`<sup>Required</sup> <a name="ListAlertManagerReceiversConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerReceiversConditionKeys"></a>

```typescript
public readonly ListAlertManagerReceiversConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlertManagerReceivers action.

---

##### `ListAlertManagerSilencesConditionKeys`<sup>Required</sup> <a name="ListAlertManagerSilencesConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListAlertManagerSilencesConditionKeys"></a>

```typescript
public readonly ListAlertManagerSilencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlertManagerSilences action.

---

##### `ListAlertsConditionKeys`<sup>Required</sup> <a name="ListAlertsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListAlertsConditionKeys"></a>

```typescript
public readonly ListAlertsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAlerts action.

---

##### `ListAnomalyDetectorsConditionKeys`<sup>Required</sup> <a name="ListAnomalyDetectorsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListAnomalyDetectorsConditionKeys"></a>

```typescript
public readonly ListAnomalyDetectorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAnomalyDetectors action.

---

##### `ListRuleGroupsNamespacesConditionKeys`<sup>Required</sup> <a name="ListRuleGroupsNamespacesConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListRuleGroupsNamespacesConditionKeys"></a>

```typescript
public readonly ListRuleGroupsNamespacesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRuleGroupsNamespaces action.

---

##### `ListRulesConditionKeys`<sup>Required</sup> <a name="ListRulesConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListRulesConditionKeys"></a>

```typescript
public readonly ListRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRules action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PreviewAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="PreviewAnomalyDetectorConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.PreviewAnomalyDetectorConditionKeys"></a>

```typescript
public readonly PreviewAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PreviewAnomalyDetector action.

---

##### `PutAlertManagerDefinitionConditionKeys`<sup>Required</sup> <a name="PutAlertManagerDefinitionConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.PutAlertManagerDefinitionConditionKeys"></a>

```typescript
public readonly PutAlertManagerDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAlertManagerDefinition action.

---

##### `PutAlertManagerSilencesConditionKeys`<sup>Required</sup> <a name="PutAlertManagerSilencesConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.PutAlertManagerSilencesConditionKeys"></a>

```typescript
public readonly PutAlertManagerSilencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAlertManagerSilences action.

---

##### `PutAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="PutAnomalyDetectorConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.PutAnomalyDetectorConditionKeys"></a>

```typescript
public readonly PutAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAnomalyDetector action.

---

##### `PutResourcePolicyConditionKeys`<sup>Required</sup> <a name="PutResourcePolicyConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.PutResourcePolicyConditionKeys"></a>

```typescript
public readonly PutResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourcePolicy action.

---

##### `PutRuleGroupsNamespaceConditionKeys`<sup>Required</sup> <a name="PutRuleGroupsNamespaceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.PutRuleGroupsNamespaceConditionKeys"></a>

```typescript
public readonly PutRuleGroupsNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutRuleGroupsNamespace action.

---

##### `QueryMetricsConditionKeys`<sup>Required</sup> <a name="QueryMetricsConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.QueryMetricsConditionKeys"></a>

```typescript
public readonly QueryMetricsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the QueryMetrics action.

---

##### `RemoteWriteConditionKeys`<sup>Required</sup> <a name="RemoteWriteConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.RemoteWriteConditionKeys"></a>

```typescript
public readonly RemoteWriteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoteWrite action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UpdateLoggingConfigurationConditionKeys"></a>

```typescript
public readonly UpdateLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLoggingConfiguration action.

---

##### `UpdateQueryLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateQueryLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UpdateQueryLoggingConfigurationConditionKeys"></a>

```typescript
public readonly UpdateQueryLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueryLoggingConfiguration action.

---

##### `UpdateScraperConditionKeys`<sup>Required</sup> <a name="UpdateScraperConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UpdateScraperConditionKeys"></a>

```typescript
public readonly UpdateScraperConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateScraper action.

---

##### `UpdateScraperLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateScraperLoggingConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UpdateScraperLoggingConfigurationConditionKeys"></a>

```typescript
public readonly UpdateScraperLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateScraperLoggingConfiguration action.

---

##### `UpdateWorkspaceAliasConditionKeys`<sup>Required</sup> <a name="UpdateWorkspaceAliasConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UpdateWorkspaceAliasConditionKeys"></a>

```typescript
public readonly UpdateWorkspaceAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkspaceAlias action.

---

##### `UpdateWorkspaceConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateWorkspaceConfigurationConditionKeys" id="@cdk_utils/iam.aps.ApsConditions.property.UpdateWorkspaceConfigurationConditionKeys"></a>

```typescript
public readonly UpdateWorkspaceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkspaceConfiguration action.

---

### ApsOperations <a name="ApsOperations" id="@cdk_utils/iam.aps.ApsOperations"></a>

API operation to required IAM actions mapping for aps.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aps.ApsOperations.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

new aps.ApsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateAlertManagerDefinition">CreateAlertManagerDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateAlertManagerDefinition API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateAnomalyDetector">CreateAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the CreateAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateLoggingConfiguration">CreateLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateQueryLoggingConfiguration">CreateQueryLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateQueryLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateRuleGroupsNamespace">CreateRuleGroupsNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleGroupsNamespace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateScraper">CreateScraper</a></code> | <code>string[]</code> | IAM actions required for the CreateScraper API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteAlertManagerDefinition">DeleteAlertManagerDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlertManagerDefinition API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteQueryLoggingConfiguration">DeleteQueryLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueryLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteRuleGroupsNamespace">DeleteRuleGroupsNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleGroupsNamespace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteScraper">DeleteScraper</a></code> | <code>string[]</code> | IAM actions required for the DeleteScraper API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteScraperLoggingConfiguration">DeleteScraperLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteScraperLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeAlertManagerDefinition">DescribeAlertManagerDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlertManagerDefinition API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeAnomalyDetector">DescribeAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeLoggingConfiguration">DescribeLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeQueryLoggingConfiguration">DescribeQueryLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeQueryLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeRuleGroupsNamespace">DescribeRuleGroupsNamespace</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuleGroupsNamespace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeScraper">DescribeScraper</a></code> | <code>string[]</code> | IAM actions required for the DescribeScraper API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeScraperLoggingConfiguration">DescribeScraperLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeScraperLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.DescribeWorkspaceConfiguration">DescribeWorkspaceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.ListAnomalyDetectors">ListAnomalyDetectors</a></code> | <code>string[]</code> | IAM actions required for the ListAnomalyDetectors API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.ListRuleGroupsNamespaces">ListRuleGroupsNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListRuleGroupsNamespaces API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.ListScrapers">ListScrapers</a></code> | <code>string[]</code> | IAM actions required for the ListScrapers API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.opGetDefaultScraperConfiguration">opGetDefaultScraperConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultScraperConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.PutAlertManagerDefinition">PutAlertManagerDefinition</a></code> | <code>string[]</code> | IAM actions required for the PutAlertManagerDefinition API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.PutAnomalyDetector">PutAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the PutAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.PutRuleGroupsNamespace">PutRuleGroupsNamespace</a></code> | <code>string[]</code> | IAM actions required for the PutRuleGroupsNamespace API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UpdateLoggingConfiguration">UpdateLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UpdateQueryLoggingConfiguration">UpdateQueryLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueryLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UpdateScraper">UpdateScraper</a></code> | <code>string[]</code> | IAM actions required for the UpdateScraper API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UpdateScraperLoggingConfiguration">UpdateScraperLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateScraperLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UpdateWorkspaceAlias">UpdateWorkspaceAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceAlias API call. |
| <code><a href="#@cdk_utils/iam.aps.ApsOperations.property.UpdateWorkspaceConfiguration">UpdateWorkspaceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceConfiguration API call. |

---

##### `CreateAlertManagerDefinition`<sup>Required</sup> <a name="CreateAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsOperations.property.CreateAlertManagerDefinition"></a>

```typescript
public readonly CreateAlertManagerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlertManagerDefinition API call.

---

##### `CreateAnomalyDetector`<sup>Required</sup> <a name="CreateAnomalyDetector" id="@cdk_utils/iam.aps.ApsOperations.property.CreateAnomalyDetector"></a>

```typescript
public readonly CreateAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnomalyDetector API call.

---

##### `CreateLoggingConfiguration`<sup>Required</sup> <a name="CreateLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.CreateLoggingConfiguration"></a>

```typescript
public readonly CreateLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoggingConfiguration API call.

---

##### `CreateQueryLoggingConfiguration`<sup>Required</sup> <a name="CreateQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.CreateQueryLoggingConfiguration"></a>

```typescript
public readonly CreateQueryLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueryLoggingConfiguration API call.

---

##### `CreateRuleGroupsNamespace`<sup>Required</sup> <a name="CreateRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsOperations.property.CreateRuleGroupsNamespace"></a>

```typescript
public readonly CreateRuleGroupsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleGroupsNamespace API call.

---

##### `CreateScraper`<sup>Required</sup> <a name="CreateScraper" id="@cdk_utils/iam.aps.ApsOperations.property.CreateScraper"></a>

```typescript
public readonly CreateScraper: string[];
```

- *Type:* string[]

IAM actions required for the CreateScraper API call.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.aps.ApsOperations.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspace API call.

---

##### `DeleteAlertManagerDefinition`<sup>Required</sup> <a name="DeleteAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteAlertManagerDefinition"></a>

```typescript
public readonly DeleteAlertManagerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlertManagerDefinition API call.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnomalyDetector API call.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoggingConfiguration API call.

---

##### `DeleteQueryLoggingConfiguration`<sup>Required</sup> <a name="DeleteQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteQueryLoggingConfiguration"></a>

```typescript
public readonly DeleteQueryLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueryLoggingConfiguration API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRuleGroupsNamespace`<sup>Required</sup> <a name="DeleteRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteRuleGroupsNamespace"></a>

```typescript
public readonly DeleteRuleGroupsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleGroupsNamespace API call.

---

##### `DeleteScraper`<sup>Required</sup> <a name="DeleteScraper" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteScraper"></a>

```typescript
public readonly DeleteScraper: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScraper API call.

---

##### `DeleteScraperLoggingConfiguration`<sup>Required</sup> <a name="DeleteScraperLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteScraperLoggingConfiguration"></a>

```typescript
public readonly DeleteScraperLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScraperLoggingConfiguration API call.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.aps.ApsOperations.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspace API call.

---

##### `DescribeAlertManagerDefinition`<sup>Required</sup> <a name="DescribeAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeAlertManagerDefinition"></a>

```typescript
public readonly DescribeAlertManagerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlertManagerDefinition API call.

---

##### `DescribeAnomalyDetector`<sup>Required</sup> <a name="DescribeAnomalyDetector" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeAnomalyDetector"></a>

```typescript
public readonly DescribeAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnomalyDetector API call.

---

##### `DescribeLoggingConfiguration`<sup>Required</sup> <a name="DescribeLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeLoggingConfiguration"></a>

```typescript
public readonly DescribeLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoggingConfiguration API call.

---

##### `DescribeQueryLoggingConfiguration`<sup>Required</sup> <a name="DescribeQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeQueryLoggingConfiguration"></a>

```typescript
public readonly DescribeQueryLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQueryLoggingConfiguration API call.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicy API call.

---

##### `DescribeRuleGroupsNamespace`<sup>Required</sup> <a name="DescribeRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeRuleGroupsNamespace"></a>

```typescript
public readonly DescribeRuleGroupsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuleGroupsNamespace API call.

---

##### `DescribeScraper`<sup>Required</sup> <a name="DescribeScraper" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeScraper"></a>

```typescript
public readonly DescribeScraper: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScraper API call.

---

##### `DescribeScraperLoggingConfiguration`<sup>Required</sup> <a name="DescribeScraperLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeScraperLoggingConfiguration"></a>

```typescript
public readonly DescribeScraperLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScraperLoggingConfiguration API call.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspace API call.

---

##### `DescribeWorkspaceConfiguration`<sup>Required</sup> <a name="DescribeWorkspaceConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.DescribeWorkspaceConfiguration"></a>

```typescript
public readonly DescribeWorkspaceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceConfiguration API call.

---

##### `ListAnomalyDetectors`<sup>Required</sup> <a name="ListAnomalyDetectors" id="@cdk_utils/iam.aps.ApsOperations.property.ListAnomalyDetectors"></a>

```typescript
public readonly ListAnomalyDetectors: string[];
```

- *Type:* string[]

IAM actions required for the ListAnomalyDetectors API call.

---

##### `ListRuleGroupsNamespaces`<sup>Required</sup> <a name="ListRuleGroupsNamespaces" id="@cdk_utils/iam.aps.ApsOperations.property.ListRuleGroupsNamespaces"></a>

```typescript
public readonly ListRuleGroupsNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleGroupsNamespaces API call.

---

##### `ListScrapers`<sup>Required</sup> <a name="ListScrapers" id="@cdk_utils/iam.aps.ApsOperations.property.ListScrapers"></a>

```typescript
public readonly ListScrapers: string[];
```

- *Type:* string[]

IAM actions required for the ListScrapers API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aps.ApsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.aps.ApsOperations.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaces API call.

---

##### `opGetDefaultScraperConfiguration`<sup>Required</sup> <a name="opGetDefaultScraperConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.opGetDefaultScraperConfiguration"></a>

```typescript
public readonly opGetDefaultScraperConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultScraperConfiguration API call.

---

##### `PutAlertManagerDefinition`<sup>Required</sup> <a name="PutAlertManagerDefinition" id="@cdk_utils/iam.aps.ApsOperations.property.PutAlertManagerDefinition"></a>

```typescript
public readonly PutAlertManagerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the PutAlertManagerDefinition API call.

---

##### `PutAnomalyDetector`<sup>Required</sup> <a name="PutAnomalyDetector" id="@cdk_utils/iam.aps.ApsOperations.property.PutAnomalyDetector"></a>

```typescript
public readonly PutAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the PutAnomalyDetector API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.aps.ApsOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutRuleGroupsNamespace`<sup>Required</sup> <a name="PutRuleGroupsNamespace" id="@cdk_utils/iam.aps.ApsOperations.property.PutRuleGroupsNamespace"></a>

```typescript
public readonly PutRuleGroupsNamespace: string[];
```

- *Type:* string[]

IAM actions required for the PutRuleGroupsNamespace API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aps.ApsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aps.ApsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLoggingConfiguration`<sup>Required</sup> <a name="UpdateLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.UpdateLoggingConfiguration"></a>

```typescript
public readonly UpdateLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLoggingConfiguration API call.

---

##### `UpdateQueryLoggingConfiguration`<sup>Required</sup> <a name="UpdateQueryLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.UpdateQueryLoggingConfiguration"></a>

```typescript
public readonly UpdateQueryLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueryLoggingConfiguration API call.

---

##### `UpdateScraper`<sup>Required</sup> <a name="UpdateScraper" id="@cdk_utils/iam.aps.ApsOperations.property.UpdateScraper"></a>

```typescript
public readonly UpdateScraper: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScraper API call.

---

##### `UpdateScraperLoggingConfiguration`<sup>Required</sup> <a name="UpdateScraperLoggingConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.UpdateScraperLoggingConfiguration"></a>

```typescript
public readonly UpdateScraperLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScraperLoggingConfiguration API call.

---

##### `UpdateWorkspaceAlias`<sup>Required</sup> <a name="UpdateWorkspaceAlias" id="@cdk_utils/iam.aps.ApsOperations.property.UpdateWorkspaceAlias"></a>

```typescript
public readonly UpdateWorkspaceAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceAlias API call.

---

##### `UpdateWorkspaceConfiguration`<sup>Required</sup> <a name="UpdateWorkspaceConfiguration" id="@cdk_utils/iam.aps.ApsOperations.property.UpdateWorkspaceConfiguration"></a>

```typescript
public readonly UpdateWorkspaceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceConfiguration API call.

---

### ApsResources <a name="ApsResources" id="@cdk_utils/iam.aps.ApsResources"></a>

ARN builders, validators, and parsers for aps resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aps.ApsResources.Initializer"></a>

```typescript
import { aps } from '@cdk_utils/iam'

new aps.ApsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.anomalydetector">anomalydetector</a></code> | Builds an ARN for the anomalydetector resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.isValidAnomalydetectorArn">isValidAnomalydetectorArn</a></code> | Validates whether a string is a valid ARN for the anomalydetector resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.isValidRulegroupsnamespaceArn">isValidRulegroupsnamespaceArn</a></code> | Validates whether a string is a valid ARN for the rulegroupsnamespace resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.isValidScraperArn">isValidScraperArn</a></code> | Validates whether a string is a valid ARN for the scraper resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.isValidWorkspaceArn">isValidWorkspaceArn</a></code> | Validates whether a string is a valid ARN for the workspace resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.parseAnomalydetectorArn">parseAnomalydetectorArn</a></code> | Parses a anomalydetector ARN into its components. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.parseRulegroupsnamespaceArn">parseRulegroupsnamespaceArn</a></code> | Parses a rulegroupsnamespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.parseScraperArn">parseScraperArn</a></code> | Parses a scraper ARN into its components. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.parseWorkspaceArn">parseWorkspaceArn</a></code> | Parses a workspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.rulegroupsnamespace">rulegroupsnamespace</a></code> | Builds an ARN for the rulegroupsnamespace resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.scraper">scraper</a></code> | Builds an ARN for the scraper resource. |
| <code><a href="#@cdk_utils/iam.aps.ApsResources.workspace">workspace</a></code> | Builds an ARN for the workspace resource. |

---

##### `anomalydetector` <a name="anomalydetector" id="@cdk_utils/iam.aps.ApsResources.anomalydetector"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.anomalydetector(props: ApsAnomalydetectorArnProps)
```

Builds an ARN for the anomalydetector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aps.ApsResources.anomalydetector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aps.ApsAnomalydetectorArnProps">ApsAnomalydetectorArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.aps.ApsResources.cluster"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.cluster(props: ApsClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aps.ApsResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aps.ApsClusterArnProps">ApsClusterArnProps</a>

---

##### `isValidAnomalydetectorArn` <a name="isValidAnomalydetectorArn" id="@cdk_utils/iam.aps.ApsResources.isValidAnomalydetectorArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.isValidAnomalydetectorArn(arn: string)
```

Validates whether a string is a valid ARN for the anomalydetector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.isValidAnomalydetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.aps.ApsResources.isValidClusterArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRulegroupsnamespaceArn` <a name="isValidRulegroupsnamespaceArn" id="@cdk_utils/iam.aps.ApsResources.isValidRulegroupsnamespaceArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.isValidRulegroupsnamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the rulegroupsnamespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.isValidRulegroupsnamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScraperArn` <a name="isValidScraperArn" id="@cdk_utils/iam.aps.ApsResources.isValidScraperArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.isValidScraperArn(arn: string)
```

Validates whether a string is a valid ARN for the scraper resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.isValidScraperArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceArn` <a name="isValidWorkspaceArn" id="@cdk_utils/iam.aps.ApsResources.isValidWorkspaceArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.isValidWorkspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the workspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.isValidWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnomalydetectorArn` <a name="parseAnomalydetectorArn" id="@cdk_utils/iam.aps.ApsResources.parseAnomalydetectorArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.parseAnomalydetectorArn(arn: string)
```

Parses a anomalydetector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.parseAnomalydetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.aps.ApsResources.parseClusterArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRulegroupsnamespaceArn` <a name="parseRulegroupsnamespaceArn" id="@cdk_utils/iam.aps.ApsResources.parseRulegroupsnamespaceArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.parseRulegroupsnamespaceArn(arn: string)
```

Parses a rulegroupsnamespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.parseRulegroupsnamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScraperArn` <a name="parseScraperArn" id="@cdk_utils/iam.aps.ApsResources.parseScraperArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.parseScraperArn(arn: string)
```

Parses a scraper ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.parseScraperArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceArn` <a name="parseWorkspaceArn" id="@cdk_utils/iam.aps.ApsResources.parseWorkspaceArn"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.parseWorkspaceArn(arn: string)
```

Parses a workspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aps.ApsResources.parseWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `rulegroupsnamespace` <a name="rulegroupsnamespace" id="@cdk_utils/iam.aps.ApsResources.rulegroupsnamespace"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.rulegroupsnamespace(props: ApsRulegroupsnamespaceArnProps)
```

Builds an ARN for the rulegroupsnamespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aps.ApsResources.rulegroupsnamespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aps.ApsRulegroupsnamespaceArnProps">ApsRulegroupsnamespaceArnProps</a>

---

##### `scraper` <a name="scraper" id="@cdk_utils/iam.aps.ApsResources.scraper"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.scraper(props: ApsScraperArnProps)
```

Builds an ARN for the scraper resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aps.ApsResources.scraper.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aps.ApsScraperArnProps">ApsScraperArnProps</a>

---

##### `workspace` <a name="workspace" id="@cdk_utils/iam.aps.ApsResources.workspace"></a>

```typescript
import { aps } from '@cdk_utils/iam'

aps.ApsResources.workspace(props: ApsWorkspaceArnProps)
```

Builds an ARN for the workspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aps.ApsResources.workspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aps.ApsWorkspaceArnProps">ApsWorkspaceArnProps</a>

---




