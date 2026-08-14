# `mediapackage_vod` Submodule <a name="`mediapackage_vod` Submodule" id="@cdk_utils/iam.mediapackage_vod"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediapackageVodAssetsArnComponents <a name="MediapackageVodAssetsArnComponents" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents"></a>

Parsed components of a assets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

const mediapackageVodAssetsArnComponents: mediapackage_vod.MediapackageVodAssetsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.assetIdentifier">assetIdentifier</a></code> | <code>string</code> | The AssetIdentifier component. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assetIdentifier`<sup>Required</sup> <a name="assetIdentifier" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.assetIdentifier"></a>

```typescript
public readonly assetIdentifier: string;
```

- *Type:* string

The AssetIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediapackageVodAssetsArnProps <a name="MediapackageVodAssetsArnProps" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps"></a>

Properties for building a assets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

const mediapackageVodAssetsArnProps: mediapackage_vod.MediapackageVodAssetsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.assetIdentifier">assetIdentifier</a></code> | <code>string</code> | The AssetIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assetIdentifier`<sup>Required</sup> <a name="assetIdentifier" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.assetIdentifier"></a>

```typescript
public readonly assetIdentifier: string;
```

- *Type:* string

The AssetIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediapackageVodPackagingConfigurationsArnComponents <a name="MediapackageVodPackagingConfigurationsArnComponents" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents"></a>

Parsed components of a packaging-configurations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

const mediapackageVodPackagingConfigurationsArnComponents: mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.packagingConfigurationIdentifier">packagingConfigurationIdentifier</a></code> | <code>string</code> | The PackagingConfigurationIdentifier component. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `packagingConfigurationIdentifier`<sup>Required</sup> <a name="packagingConfigurationIdentifier" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.packagingConfigurationIdentifier"></a>

```typescript
public readonly packagingConfigurationIdentifier: string;
```

- *Type:* string

The PackagingConfigurationIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediapackageVodPackagingConfigurationsArnProps <a name="MediapackageVodPackagingConfigurationsArnProps" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps"></a>

Properties for building a packaging-configurations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

const mediapackageVodPackagingConfigurationsArnProps: mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.packagingConfigurationIdentifier">packagingConfigurationIdentifier</a></code> | <code>string</code> | The PackagingConfigurationIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `packagingConfigurationIdentifier`<sup>Required</sup> <a name="packagingConfigurationIdentifier" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.packagingConfigurationIdentifier"></a>

```typescript
public readonly packagingConfigurationIdentifier: string;
```

- *Type:* string

The PackagingConfigurationIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediapackageVodPackagingGroupsArnComponents <a name="MediapackageVodPackagingGroupsArnComponents" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents"></a>

Parsed components of a packaging-groups ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

const mediapackageVodPackagingGroupsArnComponents: mediapackage_vod.MediapackageVodPackagingGroupsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.packagingGroupIdentifier">packagingGroupIdentifier</a></code> | <code>string</code> | The PackagingGroupIdentifier component. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `packagingGroupIdentifier`<sup>Required</sup> <a name="packagingGroupIdentifier" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.packagingGroupIdentifier"></a>

```typescript
public readonly packagingGroupIdentifier: string;
```

- *Type:* string

The PackagingGroupIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediapackageVodPackagingGroupsArnProps <a name="MediapackageVodPackagingGroupsArnProps" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps"></a>

Properties for building a packaging-groups ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

const mediapackageVodPackagingGroupsArnProps: mediapackage_vod.MediapackageVodPackagingGroupsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.packagingGroupIdentifier">packagingGroupIdentifier</a></code> | <code>string</code> | The PackagingGroupIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `packagingGroupIdentifier`<sup>Required</sup> <a name="packagingGroupIdentifier" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.packagingGroupIdentifier"></a>

```typescript
public readonly packagingGroupIdentifier: string;
```

- *Type:* string

The PackagingGroupIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackageVodActions <a name="MediapackageVodActions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions"></a>

IAM action constants for the mediapackage-vod service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

new mediapackage_vod.MediapackageVodActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ConfigureLogs">ConfigureLogs</a></code> | <code>string</code> | [Write] mediapackage-vod:ConfigureLogs. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.CreateAsset">CreateAsset</a></code> | <code>string</code> | [Write] mediapackage-vod:CreateAsset. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.CreatePackagingConfiguration">CreatePackagingConfiguration</a></code> | <code>string</code> | [Write] mediapackage-vod:CreatePackagingConfiguration. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.CreatePackagingGroup">CreatePackagingGroup</a></code> | <code>string</code> | [Write] mediapackage-vod:CreatePackagingGroup. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DeleteAsset">DeleteAsset</a></code> | <code>string</code> | [Write] mediapackage-vod:DeleteAsset. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DeletePackagingConfiguration">DeletePackagingConfiguration</a></code> | <code>string</code> | [Write] mediapackage-vod:DeletePackagingConfiguration. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DeletePackagingGroup">DeletePackagingGroup</a></code> | <code>string</code> | [Write] mediapackage-vod:DeletePackagingGroup. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DescribeAsset">DescribeAsset</a></code> | <code>string</code> | [Read] mediapackage-vod:DescribeAsset. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DescribePackagingConfiguration">DescribePackagingConfiguration</a></code> | <code>string</code> | [Read] mediapackage-vod:DescribePackagingConfiguration. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DescribePackagingGroup">DescribePackagingGroup</a></code> | <code>string</code> | [Read] mediapackage-vod:DescribePackagingGroup. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListAssets">ListAssets</a></code> | <code>string</code> | [List] mediapackage-vod:ListAssets. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListPackagingConfigurations">ListPackagingConfigurations</a></code> | <code>string</code> | [List] mediapackage-vod:ListPackagingConfigurations. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListPackagingGroups">ListPackagingGroups</a></code> | <code>string</code> | [List] mediapackage-vod:ListPackagingGroups. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediapackage-vod:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediapackage-vod:TagResource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediapackage-vod:UntagResource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.UpdatePackagingGroup">UpdatePackagingGroup</a></code> | <code>string</code> | [Write] mediapackage-vod:UpdatePackagingGroup. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConfigureLogs`<sup>Required</sup> <a name="ConfigureLogs" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ConfigureLogs"></a>

```typescript
public readonly ConfigureLogs: string;
```

- *Type:* string

[Write] mediapackage-vod:ConfigureLogs.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string;
```

- *Type:* string

[Write] mediapackage-vod:CreateAsset.

---

##### `CreatePackagingConfiguration`<sup>Required</sup> <a name="CreatePackagingConfiguration" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.CreatePackagingConfiguration"></a>

```typescript
public readonly CreatePackagingConfiguration: string;
```

- *Type:* string

[Write] mediapackage-vod:CreatePackagingConfiguration.

---

##### `CreatePackagingGroup`<sup>Required</sup> <a name="CreatePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.CreatePackagingGroup"></a>

```typescript
public readonly CreatePackagingGroup: string;
```

- *Type:* string

[Write] mediapackage-vod:CreatePackagingGroup.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string;
```

- *Type:* string

[Write] mediapackage-vod:DeleteAsset.

---

##### `DeletePackagingConfiguration`<sup>Required</sup> <a name="DeletePackagingConfiguration" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DeletePackagingConfiguration"></a>

```typescript
public readonly DeletePackagingConfiguration: string;
```

- *Type:* string

[Write] mediapackage-vod:DeletePackagingConfiguration.

---

##### `DeletePackagingGroup`<sup>Required</sup> <a name="DeletePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DeletePackagingGroup"></a>

```typescript
public readonly DeletePackagingGroup: string;
```

- *Type:* string

[Write] mediapackage-vod:DeletePackagingGroup.

---

##### `DescribeAsset`<sup>Required</sup> <a name="DescribeAsset" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DescribeAsset"></a>

```typescript
public readonly DescribeAsset: string;
```

- *Type:* string

[Read] mediapackage-vod:DescribeAsset.

---

##### `DescribePackagingConfiguration`<sup>Required</sup> <a name="DescribePackagingConfiguration" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DescribePackagingConfiguration"></a>

```typescript
public readonly DescribePackagingConfiguration: string;
```

- *Type:* string

[Read] mediapackage-vod:DescribePackagingConfiguration.

---

##### `DescribePackagingGroup`<sup>Required</sup> <a name="DescribePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.DescribePackagingGroup"></a>

```typescript
public readonly DescribePackagingGroup: string;
```

- *Type:* string

[Read] mediapackage-vod:DescribePackagingGroup.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListAssets"></a>

```typescript
public readonly ListAssets: string;
```

- *Type:* string

[List] mediapackage-vod:ListAssets.

---

##### `ListPackagingConfigurations`<sup>Required</sup> <a name="ListPackagingConfigurations" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListPackagingConfigurations"></a>

```typescript
public readonly ListPackagingConfigurations: string;
```

- *Type:* string

[List] mediapackage-vod:ListPackagingConfigurations.

---

##### `ListPackagingGroups`<sup>Required</sup> <a name="ListPackagingGroups" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListPackagingGroups"></a>

```typescript
public readonly ListPackagingGroups: string;
```

- *Type:* string

[List] mediapackage-vod:ListPackagingGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediapackage-vod:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediapackage-vod:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediapackage-vod:UntagResource.

---

##### `UpdatePackagingGroup`<sup>Required</sup> <a name="UpdatePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodActions.property.UpdatePackagingGroup"></a>

```typescript
public readonly UpdatePackagingGroup: string;
```

- *Type:* string

[Write] mediapackage-vod:UpdatePackagingGroup.

---

### MediapackageVodConditions <a name="MediapackageVodConditions" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions"></a>

Condition key constants and builders for mediapackage-vod.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

new mediapackage_vod.MediapackageVodConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.requestTag"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.resourceTag"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.tagKeys"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.CreateAssetConditionKeys">CreateAssetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAsset action. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.CreatePackagingConfigurationConditionKeys">CreatePackagingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePackagingConfiguration action. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.CreatePackagingGroupConditionKeys">CreatePackagingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePackagingGroup action. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAssetConditionKeys`<sup>Required</sup> <a name="CreateAssetConditionKeys" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.CreateAssetConditionKeys"></a>

```typescript
public readonly CreateAssetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAsset action.

---

##### `CreatePackagingConfigurationConditionKeys`<sup>Required</sup> <a name="CreatePackagingConfigurationConditionKeys" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.CreatePackagingConfigurationConditionKeys"></a>

```typescript
public readonly CreatePackagingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePackagingConfiguration action.

---

##### `CreatePackagingGroupConditionKeys`<sup>Required</sup> <a name="CreatePackagingGroupConditionKeys" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.CreatePackagingGroupConditionKeys"></a>

```typescript
public readonly CreatePackagingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePackagingGroup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MediapackageVodOperations <a name="MediapackageVodOperations" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations"></a>

API operation to required IAM actions mapping for mediapackage-vod.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

new mediapackage_vod.MediapackageVodOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ConfigureLogs">ConfigureLogs</a></code> | <code>string[]</code> | IAM actions required for the ConfigureLogs API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.CreateAsset">CreateAsset</a></code> | <code>string[]</code> | IAM actions required for the CreateAsset API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.CreatePackagingConfiguration">CreatePackagingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreatePackagingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.CreatePackagingGroup">CreatePackagingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreatePackagingGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DeleteAsset">DeleteAsset</a></code> | <code>string[]</code> | IAM actions required for the DeleteAsset API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DeletePackagingConfiguration">DeletePackagingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeletePackagingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DeletePackagingGroup">DeletePackagingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeletePackagingGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DescribeAsset">DescribeAsset</a></code> | <code>string[]</code> | IAM actions required for the DescribeAsset API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DescribePackagingConfiguration">DescribePackagingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribePackagingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DescribePackagingGroup">DescribePackagingGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribePackagingGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListAssets">ListAssets</a></code> | <code>string[]</code> | IAM actions required for the ListAssets API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListPackagingConfigurations">ListPackagingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListPackagingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListPackagingGroups">ListPackagingGroups</a></code> | <code>string[]</code> | IAM actions required for the ListPackagingGroups API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.UpdatePackagingGroup">UpdatePackagingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackagingGroup API call. |

---

##### `ConfigureLogs`<sup>Required</sup> <a name="ConfigureLogs" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ConfigureLogs"></a>

```typescript
public readonly ConfigureLogs: string[];
```

- *Type:* string[]

IAM actions required for the ConfigureLogs API call.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string[];
```

- *Type:* string[]

IAM actions required for the CreateAsset API call.

---

##### `CreatePackagingConfiguration`<sup>Required</sup> <a name="CreatePackagingConfiguration" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.CreatePackagingConfiguration"></a>

```typescript
public readonly CreatePackagingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackagingConfiguration API call.

---

##### `CreatePackagingGroup`<sup>Required</sup> <a name="CreatePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.CreatePackagingGroup"></a>

```typescript
public readonly CreatePackagingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackagingGroup API call.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAsset API call.

---

##### `DeletePackagingConfiguration`<sup>Required</sup> <a name="DeletePackagingConfiguration" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DeletePackagingConfiguration"></a>

```typescript
public readonly DeletePackagingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackagingConfiguration API call.

---

##### `DeletePackagingGroup`<sup>Required</sup> <a name="DeletePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DeletePackagingGroup"></a>

```typescript
public readonly DeletePackagingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackagingGroup API call.

---

##### `DescribeAsset`<sup>Required</sup> <a name="DescribeAsset" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DescribeAsset"></a>

```typescript
public readonly DescribeAsset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAsset API call.

---

##### `DescribePackagingConfiguration`<sup>Required</sup> <a name="DescribePackagingConfiguration" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DescribePackagingConfiguration"></a>

```typescript
public readonly DescribePackagingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackagingConfiguration API call.

---

##### `DescribePackagingGroup`<sup>Required</sup> <a name="DescribePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.DescribePackagingGroup"></a>

```typescript
public readonly DescribePackagingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackagingGroup API call.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListAssets"></a>

```typescript
public readonly ListAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssets API call.

---

##### `ListPackagingConfigurations`<sup>Required</sup> <a name="ListPackagingConfigurations" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListPackagingConfigurations"></a>

```typescript
public readonly ListPackagingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListPackagingConfigurations API call.

---

##### `ListPackagingGroups`<sup>Required</sup> <a name="ListPackagingGroups" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListPackagingGroups"></a>

```typescript
public readonly ListPackagingGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListPackagingGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePackagingGroup`<sup>Required</sup> <a name="UpdatePackagingGroup" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodOperations.property.UpdatePackagingGroup"></a>

```typescript
public readonly UpdatePackagingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackagingGroup API call.

---

### MediapackageVodResources <a name="MediapackageVodResources" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources"></a>

ARN builders, validators, and parsers for mediapackage-vod resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.Initializer"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

new mediapackage_vod.MediapackageVodResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.assets">assets</a></code> | Builds an ARN for the assets resource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidAssetsArn">isValidAssetsArn</a></code> | Validates whether a string is a valid ARN for the assets resource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidPackagingConfigurationsArn">isValidPackagingConfigurationsArn</a></code> | Validates whether a string is a valid ARN for the packaging-configurations resource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidPackagingGroupsArn">isValidPackagingGroupsArn</a></code> | Validates whether a string is a valid ARN for the packaging-groups resource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.packagingConfigurations">packagingConfigurations</a></code> | Builds an ARN for the packaging-configurations resource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.packagingGroups">packagingGroups</a></code> | Builds an ARN for the packaging-groups resource. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parseAssetsArn">parseAssetsArn</a></code> | Parses a assets ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parsePackagingConfigurationsArn">parsePackagingConfigurationsArn</a></code> | Parses a packaging-configurations ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parsePackagingGroupsArn">parsePackagingGroupsArn</a></code> | Parses a packaging-groups ARN into its components. |

---

##### `assets` <a name="assets" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.assets"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.assets(props: MediapackageVodAssetsArnProps)
```

Builds an ARN for the assets resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.assets.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodAssetsArnProps">MediapackageVodAssetsArnProps</a>

---

##### `isValidAssetsArn` <a name="isValidAssetsArn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidAssetsArn"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.isValidAssetsArn(arn: string)
```

Validates whether a string is a valid ARN for the assets resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidAssetsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackagingConfigurationsArn` <a name="isValidPackagingConfigurationsArn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidPackagingConfigurationsArn"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.isValidPackagingConfigurationsArn(arn: string)
```

Validates whether a string is a valid ARN for the packaging-configurations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidPackagingConfigurationsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackagingGroupsArn` <a name="isValidPackagingGroupsArn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidPackagingGroupsArn"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.isValidPackagingGroupsArn(arn: string)
```

Validates whether a string is a valid ARN for the packaging-groups resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.isValidPackagingGroupsArn.parameter.arn"></a>

- *Type:* string

---

##### `packagingConfigurations` <a name="packagingConfigurations" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.packagingConfigurations"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.packagingConfigurations(props: MediapackageVodPackagingConfigurationsArnProps)
```

Builds an ARN for the packaging-configurations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.packagingConfigurations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingConfigurationsArnProps">MediapackageVodPackagingConfigurationsArnProps</a>

---

##### `packagingGroups` <a name="packagingGroups" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.packagingGroups"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.packagingGroups(props: MediapackageVodPackagingGroupsArnProps)
```

Builds an ARN for the packaging-groups resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.packagingGroups.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackage_vod.MediapackageVodPackagingGroupsArnProps">MediapackageVodPackagingGroupsArnProps</a>

---

##### `parseAssetsArn` <a name="parseAssetsArn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parseAssetsArn"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.parseAssetsArn(arn: string)
```

Parses a assets ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parseAssetsArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackagingConfigurationsArn` <a name="parsePackagingConfigurationsArn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parsePackagingConfigurationsArn"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.parsePackagingConfigurationsArn(arn: string)
```

Parses a packaging-configurations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parsePackagingConfigurationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackagingGroupsArn` <a name="parsePackagingGroupsArn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parsePackagingGroupsArn"></a>

```typescript
import { mediapackage_vod } from '@cdk_utils/iam'

mediapackage_vod.MediapackageVodResources.parsePackagingGroupsArn(arn: string)
```

Parses a packaging-groups ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage_vod.MediapackageVodResources.parsePackagingGroupsArn.parameter.arn"></a>

- *Type:* string

---




