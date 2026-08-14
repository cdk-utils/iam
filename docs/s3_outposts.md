# `s3_outposts` Submodule <a name="`s3_outposts` Submodule" id="@cdk_utils/iam.s3_outposts"></a>


## Structs <a name="Structs" id="Structs"></a>

### S3OutpostsAccesspointArnComponents <a name="S3OutpostsAccesspointArnComponents" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents"></a>

Parsed components of a accesspoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsAccesspointArnComponents: s3_outposts.S3OutpostsAccesspointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3OutpostsAccesspointArnProps <a name="S3OutpostsAccesspointArnProps" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps"></a>

Properties for building a accesspoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsAccesspointArnProps: s3_outposts.S3OutpostsAccesspointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component of the ARN.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3OutpostsBucketArnComponents <a name="S3OutpostsBucketArnComponents" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents"></a>

Parsed components of a bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsBucketArnComponents: s3_outposts.S3OutpostsBucketArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3OutpostsBucketArnProps <a name="S3OutpostsBucketArnProps" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps"></a>

Properties for building a bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsBucketArnProps: s3_outposts.S3OutpostsBucketArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component of the ARN.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3OutpostsEndpointArnComponents <a name="S3OutpostsEndpointArnComponents" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents"></a>

Parsed components of a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsEndpointArnComponents: s3_outposts.S3OutpostsEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3OutpostsEndpointArnProps <a name="S3OutpostsEndpointArnProps" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps"></a>

Properties for building a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsEndpointArnProps: s3_outposts.S3OutpostsEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component of the ARN.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### S3OutpostsObjectArnComponents <a name="S3OutpostsObjectArnComponents" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents"></a>

Parsed components of a object ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsObjectArnComponents: s3_outposts.S3OutpostsObjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.objectName">objectName</a></code> | <code>string</code> | The ObjectName component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component.

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

The ObjectName component.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### S3OutpostsObjectArnProps <a name="S3OutpostsObjectArnProps" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps"></a>

Properties for building a object ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

const s3OutpostsObjectArnProps: s3_outposts.S3OutpostsObjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.objectName">objectName</a></code> | <code>string</code> | The ObjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component of the ARN.

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

The ObjectName component of the ARN.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### S3OutpostsActions <a name="S3OutpostsActions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions"></a>

IAM action constants for the s3-outposts service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

new s3_outposts.S3OutpostsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AbortMultipartUpload">AbortMultipartUpload</a></code> | <code>string</code> | [Write] s3-outposts:AbortMultipartUpload. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetAccessPoint">actionGetAccessPoint</a></code> | <code>string</code> | [Read] s3-outposts:GetAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetAccessPointPolicy">actionGetAccessPointPolicy</a></code> | <code>string</code> | [Read] s3-outposts:GetAccessPointPolicy. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucket">actionGetBucket</a></code> | <code>string</code> | [Read] s3-outposts:GetBucket. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucketPolicy">actionGetBucketPolicy</a></code> | <code>string</code> | [Read] s3-outposts:GetBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucketTagging">actionGetBucketTagging</a></code> | <code>string</code> | [Read] s3-outposts:GetBucketTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucketVersioning">actionGetBucketVersioning</a></code> | <code>string</code> | [Read] s3-outposts:GetBucketVersioning. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetLifecycleConfiguration">actionGetLifecycleConfiguration</a></code> | <code>string</code> | [Read] s3-outposts:GetLifecycleConfiguration. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObject">actionGetObject</a></code> | <code>string</code> | [Read] s3-outposts:GetObject. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectTagging">actionGetObjectTagging</a></code> | <code>string</code> | [Read] s3-outposts:GetObjectTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectVersion">actionGetObjectVersion</a></code> | <code>string</code> | [Read] s3-outposts:GetObjectVersion. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectVersionForReplication">actionGetObjectVersionForReplication</a></code> | <code>string</code> | [Read] s3-outposts:GetObjectVersionForReplication. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectVersionTagging">actionGetObjectVersionTagging</a></code> | <code>string</code> | [Read] s3-outposts:GetObjectVersionTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetReplicationConfiguration">actionGetReplicationConfiguration</a></code> | <code>string</code> | [Read] s3-outposts:GetReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.CreateAccessPoint">CreateAccessPoint</a></code> | <code>string</code> | [Write] s3-outposts:CreateAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.CreateBucket">CreateBucket</a></code> | <code>string</code> | [Write] s3-outposts:CreateBucket. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string</code> | [Write] s3-outposts:CreateEndpoint. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteAccessPoint">DeleteAccessPoint</a></code> | <code>string</code> | [Write] s3-outposts:DeleteAccessPoint. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteAccessPointPolicy">DeleteAccessPointPolicy</a></code> | <code>string</code> | [PermissionManagement] s3-outposts:DeleteAccessPointPolicy. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteBucket">DeleteBucket</a></code> | <code>string</code> | [Write] s3-outposts:DeleteBucket. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteBucketPolicy">DeleteBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3-outposts:DeleteBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string</code> | [Write] s3-outposts:DeleteEndpoint. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObject">DeleteObject</a></code> | <code>string</code> | [Write] s3-outposts:DeleteObject. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObjectTagging">DeleteObjectTagging</a></code> | <code>string</code> | [Tagging] s3-outposts:DeleteObjectTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObjectVersion">DeleteObjectVersion</a></code> | <code>string</code> | [Write] s3-outposts:DeleteObjectVersion. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObjectVersionTagging">DeleteObjectVersionTagging</a></code> | <code>string</code> | [Tagging] s3-outposts:DeleteObjectVersionTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListAccessPoints">ListAccessPoints</a></code> | <code>string</code> | [List] s3-outposts:ListAccessPoints. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListBucket">ListBucket</a></code> | <code>string</code> | [List] s3-outposts:ListBucket. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListBucketMultipartUploads">ListBucketMultipartUploads</a></code> | <code>string</code> | [List] s3-outposts:ListBucketMultipartUploads. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListBucketVersions">ListBucketVersions</a></code> | <code>string</code> | [List] s3-outposts:ListBucketVersions. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListEndpoints">ListEndpoints</a></code> | <code>string</code> | [List] s3-outposts:ListEndpoints. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListMultipartUploadParts">ListMultipartUploadParts</a></code> | <code>string</code> | [List] s3-outposts:ListMultipartUploadParts. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListOutpostsWithS3">ListOutpostsWithS3</a></code> | <code>string</code> | [List] s3-outposts:ListOutpostsWithS3. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListRegionalBuckets">ListRegionalBuckets</a></code> | <code>string</code> | [List] s3-outposts:ListRegionalBuckets. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListSharedEndpoints">ListSharedEndpoints</a></code> | <code>string</code> | [List] s3-outposts:ListSharedEndpoints. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutAccessPointPolicy">PutAccessPointPolicy</a></code> | <code>string</code> | [PermissionManagement] s3-outposts:PutAccessPointPolicy. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutBucketPolicy">PutBucketPolicy</a></code> | <code>string</code> | [PermissionManagement] s3-outposts:PutBucketPolicy. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutBucketTagging">PutBucketTagging</a></code> | <code>string</code> | [Tagging] s3-outposts:PutBucketTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutBucketVersioning">PutBucketVersioning</a></code> | <code>string</code> | [Write] s3-outposts:PutBucketVersioning. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutLifecycleConfiguration">PutLifecycleConfiguration</a></code> | <code>string</code> | [Write] s3-outposts:PutLifecycleConfiguration. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObject">PutObject</a></code> | <code>string</code> | [Write] s3-outposts:PutObject. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObjectAcl">PutObjectAcl</a></code> | <code>string</code> | [PermissionManagement] s3-outposts:PutObjectAcl. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObjectTagging">PutObjectTagging</a></code> | <code>string</code> | [Tagging] s3-outposts:PutObjectTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObjectVersionTagging">PutObjectVersionTagging</a></code> | <code>string</code> | [Tagging] s3-outposts:PutObjectVersionTagging. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutReplicationConfiguration">PutReplicationConfiguration</a></code> | <code>string</code> | [Write] s3-outposts:PutReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ReplicateDelete">ReplicateDelete</a></code> | <code>string</code> | [Write] s3-outposts:ReplicateDelete. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ReplicateObject">ReplicateObject</a></code> | <code>string</code> | [Write] s3-outposts:ReplicateObject. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ReplicateTags">ReplicateTags</a></code> | <code>string</code> | [Tagging] s3-outposts:ReplicateTags. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AbortMultipartUpload`<sup>Required</sup> <a name="AbortMultipartUpload" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AbortMultipartUpload"></a>

```typescript
public readonly AbortMultipartUpload: string;
```

- *Type:* string

[Write] s3-outposts:AbortMultipartUpload.

---

##### `actionGetAccessPoint`<sup>Required</sup> <a name="actionGetAccessPoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetAccessPoint"></a>

```typescript
public readonly actionGetAccessPoint: string;
```

- *Type:* string

[Read] s3-outposts:GetAccessPoint.

---

##### `actionGetAccessPointPolicy`<sup>Required</sup> <a name="actionGetAccessPointPolicy" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetAccessPointPolicy"></a>

```typescript
public readonly actionGetAccessPointPolicy: string;
```

- *Type:* string

[Read] s3-outposts:GetAccessPointPolicy.

---

##### `actionGetBucket`<sup>Required</sup> <a name="actionGetBucket" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucket"></a>

```typescript
public readonly actionGetBucket: string;
```

- *Type:* string

[Read] s3-outposts:GetBucket.

---

##### `actionGetBucketPolicy`<sup>Required</sup> <a name="actionGetBucketPolicy" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucketPolicy"></a>

```typescript
public readonly actionGetBucketPolicy: string;
```

- *Type:* string

[Read] s3-outposts:GetBucketPolicy.

---

##### `actionGetBucketTagging`<sup>Required</sup> <a name="actionGetBucketTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucketTagging"></a>

```typescript
public readonly actionGetBucketTagging: string;
```

- *Type:* string

[Read] s3-outposts:GetBucketTagging.

---

##### `actionGetBucketVersioning`<sup>Required</sup> <a name="actionGetBucketVersioning" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetBucketVersioning"></a>

```typescript
public readonly actionGetBucketVersioning: string;
```

- *Type:* string

[Read] s3-outposts:GetBucketVersioning.

---

##### `actionGetLifecycleConfiguration`<sup>Required</sup> <a name="actionGetLifecycleConfiguration" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetLifecycleConfiguration"></a>

```typescript
public readonly actionGetLifecycleConfiguration: string;
```

- *Type:* string

[Read] s3-outposts:GetLifecycleConfiguration.

---

##### `actionGetObject`<sup>Required</sup> <a name="actionGetObject" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObject"></a>

```typescript
public readonly actionGetObject: string;
```

- *Type:* string

[Read] s3-outposts:GetObject.

---

##### `actionGetObjectTagging`<sup>Required</sup> <a name="actionGetObjectTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectTagging"></a>

```typescript
public readonly actionGetObjectTagging: string;
```

- *Type:* string

[Read] s3-outposts:GetObjectTagging.

---

##### `actionGetObjectVersion`<sup>Required</sup> <a name="actionGetObjectVersion" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectVersion"></a>

```typescript
public readonly actionGetObjectVersion: string;
```

- *Type:* string

[Read] s3-outposts:GetObjectVersion.

---

##### `actionGetObjectVersionForReplication`<sup>Required</sup> <a name="actionGetObjectVersionForReplication" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectVersionForReplication"></a>

```typescript
public readonly actionGetObjectVersionForReplication: string;
```

- *Type:* string

[Read] s3-outposts:GetObjectVersionForReplication.

---

##### `actionGetObjectVersionTagging`<sup>Required</sup> <a name="actionGetObjectVersionTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetObjectVersionTagging"></a>

```typescript
public readonly actionGetObjectVersionTagging: string;
```

- *Type:* string

[Read] s3-outposts:GetObjectVersionTagging.

---

##### `actionGetReplicationConfiguration`<sup>Required</sup> <a name="actionGetReplicationConfiguration" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.actionGetReplicationConfiguration"></a>

```typescript
public readonly actionGetReplicationConfiguration: string;
```

- *Type:* string

[Read] s3-outposts:GetReplicationConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccessPoint`<sup>Required</sup> <a name="CreateAccessPoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.CreateAccessPoint"></a>

```typescript
public readonly CreateAccessPoint: string;
```

- *Type:* string

[Write] s3-outposts:CreateAccessPoint.

---

##### `CreateBucket`<sup>Required</sup> <a name="CreateBucket" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.CreateBucket"></a>

```typescript
public readonly CreateBucket: string;
```

- *Type:* string

[Write] s3-outposts:CreateBucket.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string;
```

- *Type:* string

[Write] s3-outposts:CreateEndpoint.

---

##### `DeleteAccessPoint`<sup>Required</sup> <a name="DeleteAccessPoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteAccessPoint"></a>

```typescript
public readonly DeleteAccessPoint: string;
```

- *Type:* string

[Write] s3-outposts:DeleteAccessPoint.

---

##### `DeleteAccessPointPolicy`<sup>Required</sup> <a name="DeleteAccessPointPolicy" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteAccessPointPolicy"></a>

```typescript
public readonly DeleteAccessPointPolicy: string;
```

- *Type:* string

[PermissionManagement] s3-outposts:DeleteAccessPointPolicy.

---

##### `DeleteBucket`<sup>Required</sup> <a name="DeleteBucket" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteBucket"></a>

```typescript
public readonly DeleteBucket: string;
```

- *Type:* string

[Write] s3-outposts:DeleteBucket.

---

##### `DeleteBucketPolicy`<sup>Required</sup> <a name="DeleteBucketPolicy" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteBucketPolicy"></a>

```typescript
public readonly DeleteBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3-outposts:DeleteBucketPolicy.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string;
```

- *Type:* string

[Write] s3-outposts:DeleteEndpoint.

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObject"></a>

```typescript
public readonly DeleteObject: string;
```

- *Type:* string

[Write] s3-outposts:DeleteObject.

---

##### `DeleteObjectTagging`<sup>Required</sup> <a name="DeleteObjectTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObjectTagging"></a>

```typescript
public readonly DeleteObjectTagging: string;
```

- *Type:* string

[Tagging] s3-outposts:DeleteObjectTagging.

---

##### `DeleteObjectVersion`<sup>Required</sup> <a name="DeleteObjectVersion" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObjectVersion"></a>

```typescript
public readonly DeleteObjectVersion: string;
```

- *Type:* string

[Write] s3-outposts:DeleteObjectVersion.

---

##### `DeleteObjectVersionTagging`<sup>Required</sup> <a name="DeleteObjectVersionTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.DeleteObjectVersionTagging"></a>

```typescript
public readonly DeleteObjectVersionTagging: string;
```

- *Type:* string

[Tagging] s3-outposts:DeleteObjectVersionTagging.

---

##### `ListAccessPoints`<sup>Required</sup> <a name="ListAccessPoints" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListAccessPoints"></a>

```typescript
public readonly ListAccessPoints: string;
```

- *Type:* string

[List] s3-outposts:ListAccessPoints.

---

##### `ListBucket`<sup>Required</sup> <a name="ListBucket" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListBucket"></a>

```typescript
public readonly ListBucket: string;
```

- *Type:* string

[List] s3-outposts:ListBucket.

---

##### `ListBucketMultipartUploads`<sup>Required</sup> <a name="ListBucketMultipartUploads" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListBucketMultipartUploads"></a>

```typescript
public readonly ListBucketMultipartUploads: string;
```

- *Type:* string

[List] s3-outposts:ListBucketMultipartUploads.

---

##### `ListBucketVersions`<sup>Required</sup> <a name="ListBucketVersions" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListBucketVersions"></a>

```typescript
public readonly ListBucketVersions: string;
```

- *Type:* string

[List] s3-outposts:ListBucketVersions.

---

##### `ListEndpoints`<sup>Required</sup> <a name="ListEndpoints" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListEndpoints"></a>

```typescript
public readonly ListEndpoints: string;
```

- *Type:* string

[List] s3-outposts:ListEndpoints.

---

##### `ListMultipartUploadParts`<sup>Required</sup> <a name="ListMultipartUploadParts" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListMultipartUploadParts"></a>

```typescript
public readonly ListMultipartUploadParts: string;
```

- *Type:* string

[List] s3-outposts:ListMultipartUploadParts.

---

##### `ListOutpostsWithS3`<sup>Required</sup> <a name="ListOutpostsWithS3" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListOutpostsWithS3"></a>

```typescript
public readonly ListOutpostsWithS3: string;
```

- *Type:* string

[List] s3-outposts:ListOutpostsWithS3.

---

##### `ListRegionalBuckets`<sup>Required</sup> <a name="ListRegionalBuckets" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListRegionalBuckets"></a>

```typescript
public readonly ListRegionalBuckets: string;
```

- *Type:* string

[List] s3-outposts:ListRegionalBuckets.

---

##### `ListSharedEndpoints`<sup>Required</sup> <a name="ListSharedEndpoints" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ListSharedEndpoints"></a>

```typescript
public readonly ListSharedEndpoints: string;
```

- *Type:* string

[List] s3-outposts:ListSharedEndpoints.

---

##### `PutAccessPointPolicy`<sup>Required</sup> <a name="PutAccessPointPolicy" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutAccessPointPolicy"></a>

```typescript
public readonly PutAccessPointPolicy: string;
```

- *Type:* string

[PermissionManagement] s3-outposts:PutAccessPointPolicy.

---

##### `PutBucketPolicy`<sup>Required</sup> <a name="PutBucketPolicy" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutBucketPolicy"></a>

```typescript
public readonly PutBucketPolicy: string;
```

- *Type:* string

[PermissionManagement] s3-outposts:PutBucketPolicy.

---

##### `PutBucketTagging`<sup>Required</sup> <a name="PutBucketTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutBucketTagging"></a>

```typescript
public readonly PutBucketTagging: string;
```

- *Type:* string

[Tagging] s3-outposts:PutBucketTagging.

---

##### `PutBucketVersioning`<sup>Required</sup> <a name="PutBucketVersioning" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutBucketVersioning"></a>

```typescript
public readonly PutBucketVersioning: string;
```

- *Type:* string

[Write] s3-outposts:PutBucketVersioning.

---

##### `PutLifecycleConfiguration`<sup>Required</sup> <a name="PutLifecycleConfiguration" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutLifecycleConfiguration"></a>

```typescript
public readonly PutLifecycleConfiguration: string;
```

- *Type:* string

[Write] s3-outposts:PutLifecycleConfiguration.

---

##### `PutObject`<sup>Required</sup> <a name="PutObject" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObject"></a>

```typescript
public readonly PutObject: string;
```

- *Type:* string

[Write] s3-outposts:PutObject.

---

##### `PutObjectAcl`<sup>Required</sup> <a name="PutObjectAcl" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObjectAcl"></a>

```typescript
public readonly PutObjectAcl: string;
```

- *Type:* string

[PermissionManagement] s3-outposts:PutObjectAcl.

---

##### `PutObjectTagging`<sup>Required</sup> <a name="PutObjectTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObjectTagging"></a>

```typescript
public readonly PutObjectTagging: string;
```

- *Type:* string

[Tagging] s3-outposts:PutObjectTagging.

---

##### `PutObjectVersionTagging`<sup>Required</sup> <a name="PutObjectVersionTagging" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutObjectVersionTagging"></a>

```typescript
public readonly PutObjectVersionTagging: string;
```

- *Type:* string

[Tagging] s3-outposts:PutObjectVersionTagging.

---

##### `PutReplicationConfiguration`<sup>Required</sup> <a name="PutReplicationConfiguration" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.PutReplicationConfiguration"></a>

```typescript
public readonly PutReplicationConfiguration: string;
```

- *Type:* string

[Write] s3-outposts:PutReplicationConfiguration.

---

##### `ReplicateDelete`<sup>Required</sup> <a name="ReplicateDelete" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ReplicateDelete"></a>

```typescript
public readonly ReplicateDelete: string;
```

- *Type:* string

[Write] s3-outposts:ReplicateDelete.

---

##### `ReplicateObject`<sup>Required</sup> <a name="ReplicateObject" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ReplicateObject"></a>

```typescript
public readonly ReplicateObject: string;
```

- *Type:* string

[Write] s3-outposts:ReplicateObject.

---

##### `ReplicateTags`<sup>Required</sup> <a name="ReplicateTags" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.ReplicateTags"></a>

```typescript
public readonly ReplicateTags: string;
```

- *Type:* string

[Tagging] s3-outposts:ReplicateTags.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.s3_outposts.S3OutpostsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### S3OutpostsConditions <a name="S3OutpostsConditions" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions"></a>

Condition key constants and builders for s3-outposts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

new s3_outposts.S3OutpostsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.accessPointNetworkOrigin">accessPointNetworkOrigin</a></code> | Generates a condition block for `s3-outposts:AccessPointNetworkOrigin`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.authType">authType</a></code> | Generates a condition block for `s3-outposts:authType`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.dataAccessPointAccount">dataAccessPointAccount</a></code> | Generates a condition block for `s3-outposts:DataAccessPointAccount`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.dataAccessPointARN">dataAccessPointARN</a></code> | Generates a condition block for `s3-outposts:DataAccessPointArn`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.delimiter">delimiter</a></code> | Generates a condition block for `s3-outposts:delimiter`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.existingObjectTag">existingObjectTag</a></code> | Generates a condition block for `s3-outposts:ExistingObjectTag/<key>`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.maxKeys">maxKeys</a></code> | Generates a condition block for `s3-outposts:max-keys`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.prefix">prefix</a></code> | Generates a condition block for `s3-outposts:prefix`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.requestObjectTag">requestObjectTag</a></code> | Generates a condition block for `s3-outposts:RequestObjectTag/<key>`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.requestObjectTagKeys">requestObjectTagKeys</a></code> | Generates a condition block for `s3-outposts:RequestObjectTagKeys`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.signatureAge">signatureAge</a></code> | Generates a condition block for `s3-outposts:signatureAge`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.signatureversion">signatureversion</a></code> | Generates a condition block for `s3-outposts:signatureversion`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.versionid">versionid</a></code> | Generates a condition block for `s3-outposts:versionid`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzAcl">xAmzAcl</a></code> | Generates a condition block for `s3-outposts:x-amz-acl`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzContentSha256">xAmzContentSha256</a></code> | Generates a condition block for `s3-outposts:x-amz-content-sha256`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzCopySource">xAmzCopySource</a></code> | Generates a condition block for `s3-outposts:x-amz-copy-source`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzMetadataDirective">xAmzMetadataDirective</a></code> | Generates a condition block for `s3-outposts:x-amz-metadata-directive`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzServerSideEncryption">xAmzServerSideEncryption</a></code> | Generates a condition block for `s3-outposts:x-amz-server-side-encryption`. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzStorageClass">xAmzStorageClass</a></code> | Generates a condition block for `s3-outposts:x-amz-storage-class`. |

---

##### `accessPointNetworkOrigin` <a name="accessPointNetworkOrigin" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.accessPointNetworkOrigin"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.accessPointNetworkOrigin(value: string)
```

Generates a condition block for `s3-outposts:AccessPointNetworkOrigin`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.accessPointNetworkOrigin.parameter.value"></a>

- *Type:* string

---

##### `authType` <a name="authType" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.authType"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.authType(value: string)
```

Generates a condition block for `s3-outposts:authType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.authType.parameter.value"></a>

- *Type:* string

---

##### `dataAccessPointAccount` <a name="dataAccessPointAccount" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.dataAccessPointAccount"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.dataAccessPointAccount(value: string)
```

Generates a condition block for `s3-outposts:DataAccessPointAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.dataAccessPointAccount.parameter.value"></a>

- *Type:* string

---

##### `dataAccessPointARN` <a name="dataAccessPointARN" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.dataAccessPointARN"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.dataAccessPointARN(value: string)
```

Generates a condition block for `s3-outposts:DataAccessPointArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.dataAccessPointARN.parameter.value"></a>

- *Type:* string

---

##### `delimiter` <a name="delimiter" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.delimiter"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.delimiter(value: string)
```

Generates a condition block for `s3-outposts:delimiter`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.delimiter.parameter.value"></a>

- *Type:* string

---

##### `existingObjectTag` <a name="existingObjectTag" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.existingObjectTag"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.existingObjectTag(value: string)
```

Generates a condition block for `s3-outposts:ExistingObjectTag/<key>`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.existingObjectTag.parameter.value"></a>

- *Type:* string

---

##### `maxKeys` <a name="maxKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.maxKeys"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.maxKeys(value: number)
```

Generates a condition block for `s3-outposts:max-keys`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.maxKeys.parameter.value"></a>

- *Type:* number

---

##### `prefix` <a name="prefix" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.prefix"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.prefix(value: string)
```

Generates a condition block for `s3-outposts:prefix`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.prefix.parameter.value"></a>

- *Type:* string

---

##### `requestObjectTag` <a name="requestObjectTag" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.requestObjectTag"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.requestObjectTag(value: string)
```

Generates a condition block for `s3-outposts:RequestObjectTag/<key>`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.requestObjectTag.parameter.value"></a>

- *Type:* string

---

##### `requestObjectTagKeys` <a name="requestObjectTagKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.requestObjectTagKeys"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.requestObjectTagKeys(value: string)
```

Generates a condition block for `s3-outposts:RequestObjectTagKeys`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.requestObjectTagKeys.parameter.value"></a>

- *Type:* string

---

##### `signatureAge` <a name="signatureAge" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.signatureAge"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.signatureAge(value: number)
```

Generates a condition block for `s3-outposts:signatureAge`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.signatureAge.parameter.value"></a>

- *Type:* number

---

##### `signatureversion` <a name="signatureversion" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.signatureversion"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.signatureversion(value: string)
```

Generates a condition block for `s3-outposts:signatureversion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.signatureversion.parameter.value"></a>

- *Type:* string

---

##### `versionid` <a name="versionid" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.versionid"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.versionid(value: string)
```

Generates a condition block for `s3-outposts:versionid`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.versionid.parameter.value"></a>

- *Type:* string

---

##### `xAmzAcl` <a name="xAmzAcl" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzAcl"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.xAmzAcl(value: string)
```

Generates a condition block for `s3-outposts:x-amz-acl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzAcl.parameter.value"></a>

- *Type:* string

---

##### `xAmzContentSha256` <a name="xAmzContentSha256" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzContentSha256"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.xAmzContentSha256(value: string)
```

Generates a condition block for `s3-outposts:x-amz-content-sha256`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzContentSha256.parameter.value"></a>

- *Type:* string

---

##### `xAmzCopySource` <a name="xAmzCopySource" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzCopySource"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.xAmzCopySource(value: string)
```

Generates a condition block for `s3-outposts:x-amz-copy-source`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzCopySource.parameter.value"></a>

- *Type:* string

---

##### `xAmzMetadataDirective` <a name="xAmzMetadataDirective" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzMetadataDirective"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.xAmzMetadataDirective(value: string)
```

Generates a condition block for `s3-outposts:x-amz-metadata-directive`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzMetadataDirective.parameter.value"></a>

- *Type:* string

---

##### `xAmzServerSideEncryption` <a name="xAmzServerSideEncryption" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzServerSideEncryption"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.xAmzServerSideEncryption(value: string)
```

Generates a condition block for `s3-outposts:x-amz-server-side-encryption`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzServerSideEncryption.parameter.value"></a>

- *Type:* string

---

##### `xAmzStorageClass` <a name="xAmzStorageClass" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzStorageClass"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsConditions.xAmzStorageClass(value: string)
```

Generates a condition block for `s3-outposts:x-amz-storage-class`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.xAmzStorageClass.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.AbortMultipartUploadConditionKeys">AbortMultipartUploadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AbortMultipartUpload action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ACCESS_POINT_NETWORK_ORIGIN">ACCESS_POINT_NETWORK_ORIGIN</a></code> | <code>string</code> | Condition key: s3-outposts:AccessPointNetworkOrigin (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetAccessPointConditionKeys">actionGetAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetAccessPointPolicyConditionKeys">actionGetAccessPointPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessPointPolicy action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketConditionKeys">actionGetBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBucket action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketPolicyConditionKeys">actionGetBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketTaggingConditionKeys">actionGetBucketTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBucketTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketVersioningConditionKeys">actionGetBucketVersioningConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBucketVersioning action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetLifecycleConfigurationConditionKeys">actionGetLifecycleConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLifecycleConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectConditionKeys">actionGetObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObject action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectTaggingConditionKeys">actionGetObjectTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectVersionConditionKeys">actionGetObjectVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectVersion action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectVersionForReplicationConditionKeys">actionGetObjectVersionForReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectVersionForReplication action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectVersionTaggingConditionKeys">actionGetObjectVersionTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetObjectVersionTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetReplicationConfigurationConditionKeys">actionGetReplicationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetReplicationConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.AUTH_TYPE">AUTH_TYPE</a></code> | <code>string</code> | Condition key: s3-outposts:authType (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.CreateAccessPointConditionKeys">CreateAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.CreateBucketConditionKeys">CreateBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBucket action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DATA_ACCESS_POINT_ACCOUNT">DATA_ACCESS_POINT_ACCOUNT</a></code> | <code>string</code> | Condition key: s3-outposts:DataAccessPointAccount (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DATA_ACCESS_POINT_ARN">DATA_ACCESS_POINT_ARN</a></code> | <code>string</code> | Condition key: s3-outposts:DataAccessPointArn (ARN). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteAccessPointConditionKeys">DeleteAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessPoint action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteAccessPointPolicyConditionKeys">DeleteAccessPointPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessPointPolicy action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteBucketConditionKeys">DeleteBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBucket action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteBucketPolicyConditionKeys">DeleteBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectConditionKeys">DeleteObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObject action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectTaggingConditionKeys">DeleteObjectTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObjectTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectVersionConditionKeys">DeleteObjectVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObjectVersion action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectVersionTaggingConditionKeys">DeleteObjectVersionTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteObjectVersionTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DELIMITER">DELIMITER</a></code> | <code>string</code> | Condition key: s3-outposts:delimiter (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.EXISTING_OBJECT_TAG">EXISTING_OBJECT_TAG</a></code> | <code>string</code> | Condition key: s3-outposts:ExistingObjectTag/<key> (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListAccessPointsConditionKeys">ListAccessPointsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAccessPoints action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListBucketConditionKeys">ListBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBucket action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListBucketMultipartUploadsConditionKeys">ListBucketMultipartUploadsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBucketMultipartUploads action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListBucketVersionsConditionKeys">ListBucketVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBucketVersions action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListMultipartUploadPartsConditionKeys">ListMultipartUploadPartsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMultipartUploadParts action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListRegionalBucketsConditionKeys">ListRegionalBucketsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRegionalBuckets action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.MAX_KEYS">MAX_KEYS</a></code> | <code>string</code> | Condition key: s3-outposts:max-keys (Numeric). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PREFIX">PREFIX</a></code> | <code>string</code> | Condition key: s3-outposts:prefix (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutAccessPointPolicyConditionKeys">PutAccessPointPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccessPointPolicy action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutBucketPolicyConditionKeys">PutBucketPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBucketPolicy action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutBucketTaggingConditionKeys">PutBucketTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBucketTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutBucketVersioningConditionKeys">PutBucketVersioningConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBucketVersioning action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutLifecycleConfigurationConditionKeys">PutLifecycleConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutLifecycleConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectAclConditionKeys">PutObjectAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectAcl action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectConditionKeys">PutObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObject action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectTaggingConditionKeys">PutObjectTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectVersionTaggingConditionKeys">PutObjectVersionTaggingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutObjectVersionTagging action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutReplicationConfigurationConditionKeys">PutReplicationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutReplicationConfiguration action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ReplicateDeleteConditionKeys">ReplicateDeleteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateDelete action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ReplicateObjectConditionKeys">ReplicateObjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateObject action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ReplicateTagsConditionKeys">ReplicateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateTags action. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.REQUEST_OBJECT_TAG">REQUEST_OBJECT_TAG</a></code> | <code>string</code> | Condition key: s3-outposts:RequestObjectTag/<key> (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.REQUEST_OBJECT_TAG_KEYS">REQUEST_OBJECT_TAG_KEYS</a></code> | <code>string</code> | Condition key: s3-outposts:RequestObjectTagKeys (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.SIGNATURE_AGE">SIGNATURE_AGE</a></code> | <code>string</code> | Condition key: s3-outposts:signatureAge (Numeric). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.SIGNATUREVERSION">SIGNATUREVERSION</a></code> | <code>string</code> | Condition key: s3-outposts:signatureversion (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.VERSIONID">VERSIONID</a></code> | <code>string</code> | Condition key: s3-outposts:versionid (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_ACL">X_AMZ_ACL</a></code> | <code>string</code> | Condition key: s3-outposts:x-amz-acl (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_CONTENT_SHA256">X_AMZ_CONTENT_SHA256</a></code> | <code>string</code> | Condition key: s3-outposts:x-amz-content-sha256 (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_COPY_SOURCE">X_AMZ_COPY_SOURCE</a></code> | <code>string</code> | Condition key: s3-outposts:x-amz-copy-source (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_METADATA_DIRECTIVE">X_AMZ_METADATA_DIRECTIVE</a></code> | <code>string</code> | Condition key: s3-outposts:x-amz-metadata-directive (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_SERVER_SIDE_ENCRYPTION">X_AMZ_SERVER_SIDE_ENCRYPTION</a></code> | <code>string</code> | Condition key: s3-outposts:x-amz-server-side-encryption (String). |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_STORAGE_CLASS">X_AMZ_STORAGE_CLASS</a></code> | <code>string</code> | Condition key: s3-outposts:x-amz-storage-class (String). |

---

##### `AbortMultipartUploadConditionKeys`<sup>Required</sup> <a name="AbortMultipartUploadConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.AbortMultipartUploadConditionKeys"></a>

```typescript
public readonly AbortMultipartUploadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AbortMultipartUpload action.

---

##### `ACCESS_POINT_NETWORK_ORIGIN`<sup>Required</sup> <a name="ACCESS_POINT_NETWORK_ORIGIN" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ACCESS_POINT_NETWORK_ORIGIN"></a>

```typescript
public readonly ACCESS_POINT_NETWORK_ORIGIN: string;
```

- *Type:* string

Condition key: s3-outposts:AccessPointNetworkOrigin (String).

---

##### `actionGetAccessPointConditionKeys`<sup>Required</sup> <a name="actionGetAccessPointConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetAccessPointConditionKeys"></a>

```typescript
public readonly actionGetAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessPoint action.

---

##### `actionGetAccessPointPolicyConditionKeys`<sup>Required</sup> <a name="actionGetAccessPointPolicyConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetAccessPointPolicyConditionKeys"></a>

```typescript
public readonly actionGetAccessPointPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessPointPolicy action.

---

##### `actionGetBucketConditionKeys`<sup>Required</sup> <a name="actionGetBucketConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketConditionKeys"></a>

```typescript
public readonly actionGetBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBucket action.

---

##### `actionGetBucketPolicyConditionKeys`<sup>Required</sup> <a name="actionGetBucketPolicyConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketPolicyConditionKeys"></a>

```typescript
public readonly actionGetBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBucketPolicy action.

---

##### `actionGetBucketTaggingConditionKeys`<sup>Required</sup> <a name="actionGetBucketTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketTaggingConditionKeys"></a>

```typescript
public readonly actionGetBucketTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBucketTagging action.

---

##### `actionGetBucketVersioningConditionKeys`<sup>Required</sup> <a name="actionGetBucketVersioningConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetBucketVersioningConditionKeys"></a>

```typescript
public readonly actionGetBucketVersioningConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBucketVersioning action.

---

##### `actionGetLifecycleConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetLifecycleConfigurationConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetLifecycleConfigurationConditionKeys"></a>

```typescript
public readonly actionGetLifecycleConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLifecycleConfiguration action.

---

##### `actionGetObjectConditionKeys`<sup>Required</sup> <a name="actionGetObjectConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectConditionKeys"></a>

```typescript
public readonly actionGetObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObject action.

---

##### `actionGetObjectTaggingConditionKeys`<sup>Required</sup> <a name="actionGetObjectTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectTaggingConditionKeys"></a>

```typescript
public readonly actionGetObjectTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectTagging action.

---

##### `actionGetObjectVersionConditionKeys`<sup>Required</sup> <a name="actionGetObjectVersionConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectVersionConditionKeys"></a>

```typescript
public readonly actionGetObjectVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectVersion action.

---

##### `actionGetObjectVersionForReplicationConditionKeys`<sup>Required</sup> <a name="actionGetObjectVersionForReplicationConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectVersionForReplicationConditionKeys"></a>

```typescript
public readonly actionGetObjectVersionForReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectVersionForReplication action.

---

##### `actionGetObjectVersionTaggingConditionKeys`<sup>Required</sup> <a name="actionGetObjectVersionTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetObjectVersionTaggingConditionKeys"></a>

```typescript
public readonly actionGetObjectVersionTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetObjectVersionTagging action.

---

##### `actionGetReplicationConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetReplicationConfigurationConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.actionGetReplicationConfigurationConditionKeys"></a>

```typescript
public readonly actionGetReplicationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetReplicationConfiguration action.

---

##### `AUTH_TYPE`<sup>Required</sup> <a name="AUTH_TYPE" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.AUTH_TYPE"></a>

```typescript
public readonly AUTH_TYPE: string;
```

- *Type:* string

Condition key: s3-outposts:authType (String).

---

##### `CreateAccessPointConditionKeys`<sup>Required</sup> <a name="CreateAccessPointConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.CreateAccessPointConditionKeys"></a>

```typescript
public readonly CreateAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessPoint action.

---

##### `CreateBucketConditionKeys`<sup>Required</sup> <a name="CreateBucketConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.CreateBucketConditionKeys"></a>

```typescript
public readonly CreateBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBucket action.

---

##### `DATA_ACCESS_POINT_ACCOUNT`<sup>Required</sup> <a name="DATA_ACCESS_POINT_ACCOUNT" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DATA_ACCESS_POINT_ACCOUNT"></a>

```typescript
public readonly DATA_ACCESS_POINT_ACCOUNT: string;
```

- *Type:* string

Condition key: s3-outposts:DataAccessPointAccount (String).

---

##### `DATA_ACCESS_POINT_ARN`<sup>Required</sup> <a name="DATA_ACCESS_POINT_ARN" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DATA_ACCESS_POINT_ARN"></a>

```typescript
public readonly DATA_ACCESS_POINT_ARN: string;
```

- *Type:* string

Condition key: s3-outposts:DataAccessPointArn (ARN).

---

##### `DeleteAccessPointConditionKeys`<sup>Required</sup> <a name="DeleteAccessPointConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteAccessPointConditionKeys"></a>

```typescript
public readonly DeleteAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessPoint action.

---

##### `DeleteAccessPointPolicyConditionKeys`<sup>Required</sup> <a name="DeleteAccessPointPolicyConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteAccessPointPolicyConditionKeys"></a>

```typescript
public readonly DeleteAccessPointPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessPointPolicy action.

---

##### `DeleteBucketConditionKeys`<sup>Required</sup> <a name="DeleteBucketConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteBucketConditionKeys"></a>

```typescript
public readonly DeleteBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBucket action.

---

##### `DeleteBucketPolicyConditionKeys`<sup>Required</sup> <a name="DeleteBucketPolicyConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteBucketPolicyConditionKeys"></a>

```typescript
public readonly DeleteBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBucketPolicy action.

---

##### `DeleteObjectConditionKeys`<sup>Required</sup> <a name="DeleteObjectConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectConditionKeys"></a>

```typescript
public readonly DeleteObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObject action.

---

##### `DeleteObjectTaggingConditionKeys`<sup>Required</sup> <a name="DeleteObjectTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectTaggingConditionKeys"></a>

```typescript
public readonly DeleteObjectTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObjectTagging action.

---

##### `DeleteObjectVersionConditionKeys`<sup>Required</sup> <a name="DeleteObjectVersionConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectVersionConditionKeys"></a>

```typescript
public readonly DeleteObjectVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObjectVersion action.

---

##### `DeleteObjectVersionTaggingConditionKeys`<sup>Required</sup> <a name="DeleteObjectVersionTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DeleteObjectVersionTaggingConditionKeys"></a>

```typescript
public readonly DeleteObjectVersionTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteObjectVersionTagging action.

---

##### `DELIMITER`<sup>Required</sup> <a name="DELIMITER" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.DELIMITER"></a>

```typescript
public readonly DELIMITER: string;
```

- *Type:* string

Condition key: s3-outposts:delimiter (String).

---

##### `EXISTING_OBJECT_TAG`<sup>Required</sup> <a name="EXISTING_OBJECT_TAG" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.EXISTING_OBJECT_TAG"></a>

```typescript
public readonly EXISTING_OBJECT_TAG: string;
```

- *Type:* string

Condition key: s3-outposts:ExistingObjectTag/<key> (String).

---

##### `ListAccessPointsConditionKeys`<sup>Required</sup> <a name="ListAccessPointsConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListAccessPointsConditionKeys"></a>

```typescript
public readonly ListAccessPointsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAccessPoints action.

---

##### `ListBucketConditionKeys`<sup>Required</sup> <a name="ListBucketConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListBucketConditionKeys"></a>

```typescript
public readonly ListBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBucket action.

---

##### `ListBucketMultipartUploadsConditionKeys`<sup>Required</sup> <a name="ListBucketMultipartUploadsConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListBucketMultipartUploadsConditionKeys"></a>

```typescript
public readonly ListBucketMultipartUploadsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBucketMultipartUploads action.

---

##### `ListBucketVersionsConditionKeys`<sup>Required</sup> <a name="ListBucketVersionsConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListBucketVersionsConditionKeys"></a>

```typescript
public readonly ListBucketVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBucketVersions action.

---

##### `ListMultipartUploadPartsConditionKeys`<sup>Required</sup> <a name="ListMultipartUploadPartsConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListMultipartUploadPartsConditionKeys"></a>

```typescript
public readonly ListMultipartUploadPartsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMultipartUploadParts action.

---

##### `ListRegionalBucketsConditionKeys`<sup>Required</sup> <a name="ListRegionalBucketsConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ListRegionalBucketsConditionKeys"></a>

```typescript
public readonly ListRegionalBucketsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRegionalBuckets action.

---

##### `MAX_KEYS`<sup>Required</sup> <a name="MAX_KEYS" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.MAX_KEYS"></a>

```typescript
public readonly MAX_KEYS: string;
```

- *Type:* string

Condition key: s3-outposts:max-keys (Numeric).

---

##### `PREFIX`<sup>Required</sup> <a name="PREFIX" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PREFIX"></a>

```typescript
public readonly PREFIX: string;
```

- *Type:* string

Condition key: s3-outposts:prefix (String).

---

##### `PutAccessPointPolicyConditionKeys`<sup>Required</sup> <a name="PutAccessPointPolicyConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutAccessPointPolicyConditionKeys"></a>

```typescript
public readonly PutAccessPointPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccessPointPolicy action.

---

##### `PutBucketPolicyConditionKeys`<sup>Required</sup> <a name="PutBucketPolicyConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutBucketPolicyConditionKeys"></a>

```typescript
public readonly PutBucketPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBucketPolicy action.

---

##### `PutBucketTaggingConditionKeys`<sup>Required</sup> <a name="PutBucketTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutBucketTaggingConditionKeys"></a>

```typescript
public readonly PutBucketTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBucketTagging action.

---

##### `PutBucketVersioningConditionKeys`<sup>Required</sup> <a name="PutBucketVersioningConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutBucketVersioningConditionKeys"></a>

```typescript
public readonly PutBucketVersioningConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBucketVersioning action.

---

##### `PutLifecycleConfigurationConditionKeys`<sup>Required</sup> <a name="PutLifecycleConfigurationConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutLifecycleConfigurationConditionKeys"></a>

```typescript
public readonly PutLifecycleConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutLifecycleConfiguration action.

---

##### `PutObjectAclConditionKeys`<sup>Required</sup> <a name="PutObjectAclConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectAclConditionKeys"></a>

```typescript
public readonly PutObjectAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectAcl action.

---

##### `PutObjectConditionKeys`<sup>Required</sup> <a name="PutObjectConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectConditionKeys"></a>

```typescript
public readonly PutObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObject action.

---

##### `PutObjectTaggingConditionKeys`<sup>Required</sup> <a name="PutObjectTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectTaggingConditionKeys"></a>

```typescript
public readonly PutObjectTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectTagging action.

---

##### `PutObjectVersionTaggingConditionKeys`<sup>Required</sup> <a name="PutObjectVersionTaggingConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutObjectVersionTaggingConditionKeys"></a>

```typescript
public readonly PutObjectVersionTaggingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutObjectVersionTagging action.

---

##### `PutReplicationConfigurationConditionKeys`<sup>Required</sup> <a name="PutReplicationConfigurationConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.PutReplicationConfigurationConditionKeys"></a>

```typescript
public readonly PutReplicationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutReplicationConfiguration action.

---

##### `ReplicateDeleteConditionKeys`<sup>Required</sup> <a name="ReplicateDeleteConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ReplicateDeleteConditionKeys"></a>

```typescript
public readonly ReplicateDeleteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateDelete action.

---

##### `ReplicateObjectConditionKeys`<sup>Required</sup> <a name="ReplicateObjectConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ReplicateObjectConditionKeys"></a>

```typescript
public readonly ReplicateObjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateObject action.

---

##### `ReplicateTagsConditionKeys`<sup>Required</sup> <a name="ReplicateTagsConditionKeys" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.ReplicateTagsConditionKeys"></a>

```typescript
public readonly ReplicateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateTags action.

---

##### `REQUEST_OBJECT_TAG`<sup>Required</sup> <a name="REQUEST_OBJECT_TAG" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.REQUEST_OBJECT_TAG"></a>

```typescript
public readonly REQUEST_OBJECT_TAG: string;
```

- *Type:* string

Condition key: s3-outposts:RequestObjectTag/<key> (String).

---

##### `REQUEST_OBJECT_TAG_KEYS`<sup>Required</sup> <a name="REQUEST_OBJECT_TAG_KEYS" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.REQUEST_OBJECT_TAG_KEYS"></a>

```typescript
public readonly REQUEST_OBJECT_TAG_KEYS: string;
```

- *Type:* string

Condition key: s3-outposts:RequestObjectTagKeys (String).

---

##### `SIGNATURE_AGE`<sup>Required</sup> <a name="SIGNATURE_AGE" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.SIGNATURE_AGE"></a>

```typescript
public readonly SIGNATURE_AGE: string;
```

- *Type:* string

Condition key: s3-outposts:signatureAge (Numeric).

---

##### `SIGNATUREVERSION`<sup>Required</sup> <a name="SIGNATUREVERSION" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.SIGNATUREVERSION"></a>

```typescript
public readonly SIGNATUREVERSION: string;
```

- *Type:* string

Condition key: s3-outposts:signatureversion (String).

---

##### `VERSIONID`<sup>Required</sup> <a name="VERSIONID" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.VERSIONID"></a>

```typescript
public readonly VERSIONID: string;
```

- *Type:* string

Condition key: s3-outposts:versionid (String).

---

##### `X_AMZ_ACL`<sup>Required</sup> <a name="X_AMZ_ACL" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_ACL"></a>

```typescript
public readonly X_AMZ_ACL: string;
```

- *Type:* string

Condition key: s3-outposts:x-amz-acl (String).

---

##### `X_AMZ_CONTENT_SHA256`<sup>Required</sup> <a name="X_AMZ_CONTENT_SHA256" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_CONTENT_SHA256"></a>

```typescript
public readonly X_AMZ_CONTENT_SHA256: string;
```

- *Type:* string

Condition key: s3-outposts:x-amz-content-sha256 (String).

---

##### `X_AMZ_COPY_SOURCE`<sup>Required</sup> <a name="X_AMZ_COPY_SOURCE" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_COPY_SOURCE"></a>

```typescript
public readonly X_AMZ_COPY_SOURCE: string;
```

- *Type:* string

Condition key: s3-outposts:x-amz-copy-source (String).

---

##### `X_AMZ_METADATA_DIRECTIVE`<sup>Required</sup> <a name="X_AMZ_METADATA_DIRECTIVE" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_METADATA_DIRECTIVE"></a>

```typescript
public readonly X_AMZ_METADATA_DIRECTIVE: string;
```

- *Type:* string

Condition key: s3-outposts:x-amz-metadata-directive (String).

---

##### `X_AMZ_SERVER_SIDE_ENCRYPTION`<sup>Required</sup> <a name="X_AMZ_SERVER_SIDE_ENCRYPTION" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_SERVER_SIDE_ENCRYPTION"></a>

```typescript
public readonly X_AMZ_SERVER_SIDE_ENCRYPTION: string;
```

- *Type:* string

Condition key: s3-outposts:x-amz-server-side-encryption (String).

---

##### `X_AMZ_STORAGE_CLASS`<sup>Required</sup> <a name="X_AMZ_STORAGE_CLASS" id="@cdk_utils/iam.s3_outposts.S3OutpostsConditions.property.X_AMZ_STORAGE_CLASS"></a>

```typescript
public readonly X_AMZ_STORAGE_CLASS: string;
```

- *Type:* string

Condition key: s3-outposts:x-amz-storage-class (String).

---

### S3OutpostsOperations <a name="S3OutpostsOperations" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations"></a>

API operation to required IAM actions mapping for s3-outposts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

new s3_outposts.S3OutpostsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpoint API call. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.ListEndpoints">ListEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListEndpoints API call. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.ListOutpostsWithS3">ListOutpostsWithS3</a></code> | <code>string[]</code> | IAM actions required for the ListOutpostsWithS3 API call. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.ListSharedEndpoints">ListSharedEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListSharedEndpoints API call. |

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpoint API call.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpoint API call.

---

##### `ListEndpoints`<sup>Required</sup> <a name="ListEndpoints" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.ListEndpoints"></a>

```typescript
public readonly ListEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListEndpoints API call.

---

##### `ListOutpostsWithS3`<sup>Required</sup> <a name="ListOutpostsWithS3" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.ListOutpostsWithS3"></a>

```typescript
public readonly ListOutpostsWithS3: string[];
```

- *Type:* string[]

IAM actions required for the ListOutpostsWithS3 API call.

---

##### `ListSharedEndpoints`<sup>Required</sup> <a name="ListSharedEndpoints" id="@cdk_utils/iam.s3_outposts.S3OutpostsOperations.property.ListSharedEndpoints"></a>

```typescript
public readonly ListSharedEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListSharedEndpoints API call.

---

### S3OutpostsResources <a name="S3OutpostsResources" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources"></a>

ARN builders, validators, and parsers for s3-outposts resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.Initializer"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

new s3_outposts.S3OutpostsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.accesspoint">accesspoint</a></code> | Builds an ARN for the accesspoint resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.bucket">bucket</a></code> | Builds an ARN for the bucket resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.endpoint">endpoint</a></code> | Builds an ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidAccesspointArn">isValidAccesspointArn</a></code> | Validates whether a string is a valid ARN for the accesspoint resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidBucketArn">isValidBucketArn</a></code> | Validates whether a string is a valid ARN for the bucket resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidEndpointArn">isValidEndpointArn</a></code> | Validates whether a string is a valid ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidObjectArn">isValidObjectArn</a></code> | Validates whether a string is a valid ARN for the object resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.object">object</a></code> | Builds an ARN for the object resource. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseAccesspointArn">parseAccesspointArn</a></code> | Parses a accesspoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseBucketArn">parseBucketArn</a></code> | Parses a bucket ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseEndpointArn">parseEndpointArn</a></code> | Parses a endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseObjectArn">parseObjectArn</a></code> | Parses a object ARN into its components. |

---

##### `accesspoint` <a name="accesspoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.accesspoint"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.accesspoint(props: S3OutpostsAccesspointArnProps)
```

Builds an ARN for the accesspoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.accesspoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3_outposts.S3OutpostsAccesspointArnProps">S3OutpostsAccesspointArnProps</a>

---

##### `bucket` <a name="bucket" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.bucket"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.bucket(props: S3OutpostsBucketArnProps)
```

Builds an ARN for the bucket resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.bucket.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3_outposts.S3OutpostsBucketArnProps">S3OutpostsBucketArnProps</a>

---

##### `endpoint` <a name="endpoint" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.endpoint"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.endpoint(props: S3OutpostsEndpointArnProps)
```

Builds an ARN for the endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.endpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3_outposts.S3OutpostsEndpointArnProps">S3OutpostsEndpointArnProps</a>

---

##### `isValidAccesspointArn` <a name="isValidAccesspointArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidAccesspointArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.isValidAccesspointArn(arn: string)
```

Validates whether a string is a valid ARN for the accesspoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidAccesspointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBucketArn` <a name="isValidBucketArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidBucketArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.isValidBucketArn(arn: string)
```

Validates whether a string is a valid ARN for the bucket resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEndpointArn` <a name="isValidEndpointArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidEndpointArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.isValidEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidObjectArn` <a name="isValidObjectArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidObjectArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.isValidObjectArn(arn: string)
```

Validates whether a string is a valid ARN for the object resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.isValidObjectArn.parameter.arn"></a>

- *Type:* string

---

##### `object` <a name="object" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.object"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.object(props: S3OutpostsObjectArnProps)
```

Builds an ARN for the object resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.object.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.s3_outposts.S3OutpostsObjectArnProps">S3OutpostsObjectArnProps</a>

---

##### `parseAccesspointArn` <a name="parseAccesspointArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseAccesspointArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.parseAccesspointArn(arn: string)
```

Parses a accesspoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseAccesspointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBucketArn` <a name="parseBucketArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseBucketArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.parseBucketArn(arn: string)
```

Parses a bucket ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEndpointArn` <a name="parseEndpointArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseEndpointArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.parseEndpointArn(arn: string)
```

Parses a endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseObjectArn` <a name="parseObjectArn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseObjectArn"></a>

```typescript
import { s3_outposts } from '@cdk_utils/iam'

s3_outposts.S3OutpostsResources.parseObjectArn(arn: string)
```

Parses a object ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.s3_outposts.S3OutpostsResources.parseObjectArn.parameter.arn"></a>

- *Type:* string

---




