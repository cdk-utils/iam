# `cloudfront_keyvaluestore` Submodule <a name="`cloudfront_keyvaluestore` Submodule" id="@cdk_utils/iam.cloudfront_keyvaluestore"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudfrontKeyvaluestoreKeyValueStoreArnComponents <a name="CloudfrontKeyvaluestoreKeyValueStoreArnComponents" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents"></a>

Parsed components of a key-value-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.Initializer"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

const cloudfrontKeyvaluestoreKeyValueStoreArnComponents: cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### CloudfrontKeyvaluestoreKeyValueStoreArnProps <a name="CloudfrontKeyvaluestoreKeyValueStoreArnProps" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps"></a>

Properties for building a key-value-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.Initializer"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

const cloudfrontKeyvaluestoreKeyValueStoreArnProps: cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontKeyvaluestoreActions <a name="CloudfrontKeyvaluestoreActions" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions"></a>

IAM action constants for the cloudfront-keyvaluestore service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.Initializer"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

new cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.actionGetKey">actionGetKey</a></code> | <code>string</code> | [Read] cloudfront-keyvaluestore:GetKey. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.DeleteKey">DeleteKey</a></code> | <code>string</code> | [Write] cloudfront-keyvaluestore:DeleteKey. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.DescribeKeyValueStore">DescribeKeyValueStore</a></code> | <code>string</code> | [Read] cloudfront-keyvaluestore:DescribeKeyValueStore. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.ListKeys">ListKeys</a></code> | <code>string</code> | [List] cloudfront-keyvaluestore:ListKeys. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.PutKey">PutKey</a></code> | <code>string</code> | [Write] cloudfront-keyvaluestore:PutKey. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.UpdateKeys">UpdateKeys</a></code> | <code>string</code> | [Write] cloudfront-keyvaluestore:UpdateKeys. |

---

##### `actionGetKey`<sup>Required</sup> <a name="actionGetKey" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.actionGetKey"></a>

```typescript
public readonly actionGetKey: string;
```

- *Type:* string

[Read] cloudfront-keyvaluestore:GetKey.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteKey`<sup>Required</sup> <a name="DeleteKey" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.DeleteKey"></a>

```typescript
public readonly DeleteKey: string;
```

- *Type:* string

[Write] cloudfront-keyvaluestore:DeleteKey.

---

##### `DescribeKeyValueStore`<sup>Required</sup> <a name="DescribeKeyValueStore" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.DescribeKeyValueStore"></a>

```typescript
public readonly DescribeKeyValueStore: string;
```

- *Type:* string

[Read] cloudfront-keyvaluestore:DescribeKeyValueStore.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.ListKeys"></a>

```typescript
public readonly ListKeys: string;
```

- *Type:* string

[List] cloudfront-keyvaluestore:ListKeys.

---

##### `PutKey`<sup>Required</sup> <a name="PutKey" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.PutKey"></a>

```typescript
public readonly PutKey: string;
```

- *Type:* string

[Write] cloudfront-keyvaluestore:PutKey.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateKeys`<sup>Required</sup> <a name="UpdateKeys" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreActions.property.UpdateKeys"></a>

```typescript
public readonly UpdateKeys: string;
```

- *Type:* string

[Write] cloudfront-keyvaluestore:UpdateKeys.

---

### CloudfrontKeyvaluestoreOperations <a name="CloudfrontKeyvaluestoreOperations" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations"></a>

API operation to required IAM actions mapping for cloudfront-keyvaluestore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.Initializer"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

new cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.DeleteKey">DeleteKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.DescribeKeyValueStore">DescribeKeyValueStore</a></code> | <code>string[]</code> | IAM actions required for the DescribeKeyValueStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.ListKeys">ListKeys</a></code> | <code>string[]</code> | IAM actions required for the ListKeys API call. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.opGetKey">opGetKey</a></code> | <code>string[]</code> | IAM actions required for the GetKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.PutKey">PutKey</a></code> | <code>string[]</code> | IAM actions required for the PutKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.UpdateKeys">UpdateKeys</a></code> | <code>string[]</code> | IAM actions required for the UpdateKeys API call. |

---

##### `DeleteKey`<sup>Required</sup> <a name="DeleteKey" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.DeleteKey"></a>

```typescript
public readonly DeleteKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKey API call.

---

##### `DescribeKeyValueStore`<sup>Required</sup> <a name="DescribeKeyValueStore" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.DescribeKeyValueStore"></a>

```typescript
public readonly DescribeKeyValueStore: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKeyValueStore API call.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.ListKeys"></a>

```typescript
public readonly ListKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListKeys API call.

---

##### `opGetKey`<sup>Required</sup> <a name="opGetKey" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.opGetKey"></a>

```typescript
public readonly opGetKey: string[];
```

- *Type:* string[]

IAM actions required for the GetKey API call.

---

##### `PutKey`<sup>Required</sup> <a name="PutKey" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.PutKey"></a>

```typescript
public readonly PutKey: string[];
```

- *Type:* string[]

IAM actions required for the PutKey API call.

---

##### `UpdateKeys`<sup>Required</sup> <a name="UpdateKeys" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreOperations.property.UpdateKeys"></a>

```typescript
public readonly UpdateKeys: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKeys API call.

---

### CloudfrontKeyvaluestoreResources <a name="CloudfrontKeyvaluestoreResources" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources"></a>

ARN builders, validators, and parsers for cloudfront-keyvaluestore resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.Initializer"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

new cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.isValidKeyValueStoreArn">isValidKeyValueStoreArn</a></code> | Validates whether a string is a valid ARN for the key-value-store resource. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.keyValueStore">keyValueStore</a></code> | Builds an ARN for the key-value-store resource. |
| <code><a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.parseKeyValueStoreArn">parseKeyValueStoreArn</a></code> | Parses a key-value-store ARN into its components. |

---

##### `isValidKeyValueStoreArn` <a name="isValidKeyValueStoreArn" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.isValidKeyValueStoreArn"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.isValidKeyValueStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the key-value-store resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.isValidKeyValueStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `keyValueStore` <a name="keyValueStore" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.keyValueStore"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.keyValueStore(props: CloudfrontKeyvaluestoreKeyValueStoreArnProps)
```

Builds an ARN for the key-value-store resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.keyValueStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreKeyValueStoreArnProps">CloudfrontKeyvaluestoreKeyValueStoreArnProps</a>

---

##### `parseKeyValueStoreArn` <a name="parseKeyValueStoreArn" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.parseKeyValueStoreArn"></a>

```typescript
import { cloudfront_keyvaluestore } from '@cdk_utils/iam'

cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.parseKeyValueStoreArn(arn: string)
```

Parses a key-value-store ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront_keyvaluestore.CloudfrontKeyvaluestoreResources.parseKeyValueStoreArn.parameter.arn"></a>

- *Type:* string

---




