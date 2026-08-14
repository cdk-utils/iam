# `panorama` Submodule <a name="`panorama` Submodule" id="@cdk_utils/iam.panorama"></a>


## Structs <a name="Structs" id="Structs"></a>

### PanoramaApplicationInstanceArnComponents <a name="PanoramaApplicationInstanceArnComponents" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents"></a>

Parsed components of a applicationInstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

const panoramaApplicationInstanceArnComponents: panorama.PanoramaApplicationInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.applicationInstanceId">applicationInstanceId</a></code> | <code>string</code> | The ApplicationInstanceId component. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationInstanceId`<sup>Required</sup> <a name="applicationInstanceId" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.applicationInstanceId"></a>

```typescript
public readonly applicationInstanceId: string;
```

- *Type:* string

The ApplicationInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PanoramaApplicationInstanceArnProps <a name="PanoramaApplicationInstanceArnProps" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps"></a>

Properties for building a applicationInstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

const panoramaApplicationInstanceArnProps: panorama.PanoramaApplicationInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.applicationInstanceId">applicationInstanceId</a></code> | <code>string</code> | The ApplicationInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationInstanceId`<sup>Required</sup> <a name="applicationInstanceId" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.applicationInstanceId"></a>

```typescript
public readonly applicationInstanceId: string;
```

- *Type:* string

The ApplicationInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PanoramaDeviceArnComponents <a name="PanoramaDeviceArnComponents" id="@cdk_utils/iam.panorama.PanoramaDeviceArnComponents"></a>

Parsed components of a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

const panoramaDeviceArnComponents: panorama.PanoramaDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.panorama.PanoramaDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PanoramaDeviceArnProps <a name="PanoramaDeviceArnProps" id="@cdk_utils/iam.panorama.PanoramaDeviceArnProps"></a>

Properties for building a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.panorama.PanoramaDeviceArnProps.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

const panoramaDeviceArnProps: panorama.PanoramaDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.panorama.PanoramaDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PanoramaPackageArnComponents <a name="PanoramaPackageArnComponents" id="@cdk_utils/iam.panorama.PanoramaPackageArnComponents"></a>

Parsed components of a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.panorama.PanoramaPackageArnComponents.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

const panoramaPackageArnComponents: panorama.PanoramaPackageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.packageId">packageId</a></code> | <code>string</code> | The PackageId component. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

The PackageId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.panorama.PanoramaPackageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PanoramaPackageArnProps <a name="PanoramaPackageArnProps" id="@cdk_utils/iam.panorama.PanoramaPackageArnProps"></a>

Properties for building a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.panorama.PanoramaPackageArnProps.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

const panoramaPackageArnProps: panorama.PanoramaPackageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.packageId">packageId</a></code> | <code>string</code> | The PackageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

The PackageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.panorama.PanoramaPackageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PanoramaActions <a name="PanoramaActions" id="@cdk_utils/iam.panorama.PanoramaActions"></a>

IAM action constants for the panorama service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.panorama.PanoramaActions.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

new panorama.PanoramaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.actionGetWebSocketURL">actionGetWebSocketURL</a></code> | <code>string</code> | [Read] panorama:GetWebSocketURL. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.CreateApplicationInstance">CreateApplicationInstance</a></code> | <code>string</code> | [Write] panorama:CreateApplicationInstance. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.CreateJobForDevices">CreateJobForDevices</a></code> | <code>string</code> | [Write] panorama:CreateJobForDevices. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.CreateNodeFromTemplateJob">CreateNodeFromTemplateJob</a></code> | <code>string</code> | [Write] panorama:CreateNodeFromTemplateJob. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.CreatePackage">CreatePackage</a></code> | <code>string</code> | [Write] panorama:CreatePackage. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.CreatePackageImportJob">CreatePackageImportJob</a></code> | <code>string</code> | [Write] panorama:CreatePackageImportJob. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DeleteDevice">DeleteDevice</a></code> | <code>string</code> | [Write] panorama:DeleteDevice. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DeletePackage">DeletePackage</a></code> | <code>string</code> | [Write] panorama:DeletePackage. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DeregisterPackageVersion">DeregisterPackageVersion</a></code> | <code>string</code> | [Write] panorama:DeregisterPackageVersion. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeApplicationInstance">DescribeApplicationInstance</a></code> | <code>string</code> | [Read] panorama:DescribeApplicationInstance. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeApplicationInstanceDetails">DescribeApplicationInstanceDetails</a></code> | <code>string</code> | [Read] panorama:DescribeApplicationInstanceDetails. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeDevice">DescribeDevice</a></code> | <code>string</code> | [Read] panorama:DescribeDevice. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeDeviceJob">DescribeDeviceJob</a></code> | <code>string</code> | [Read] panorama:DescribeDeviceJob. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeNode">DescribeNode</a></code> | <code>string</code> | [Read] panorama:DescribeNode. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeNodeFromTemplateJob">DescribeNodeFromTemplateJob</a></code> | <code>string</code> | [Read] panorama:DescribeNodeFromTemplateJob. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribePackage">DescribePackage</a></code> | <code>string</code> | [Read] panorama:DescribePackage. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribePackageImportJob">DescribePackageImportJob</a></code> | <code>string</code> | [Read] panorama:DescribePackageImportJob. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribePackageVersion">DescribePackageVersion</a></code> | <code>string</code> | [Read] panorama:DescribePackageVersion. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.DescribeSoftware">DescribeSoftware</a></code> | <code>string</code> | [Read] panorama:DescribeSoftware. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListApplicationInstanceDependencies">ListApplicationInstanceDependencies</a></code> | <code>string</code> | [List] panorama:ListApplicationInstanceDependencies. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListApplicationInstanceNodeInstances">ListApplicationInstanceNodeInstances</a></code> | <code>string</code> | [List] panorama:ListApplicationInstanceNodeInstances. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListApplicationInstances">ListApplicationInstances</a></code> | <code>string</code> | [List] panorama:ListApplicationInstances. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListDevices">ListDevices</a></code> | <code>string</code> | [List] panorama:ListDevices. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListDevicesJobs">ListDevicesJobs</a></code> | <code>string</code> | [List] panorama:ListDevicesJobs. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListNodeFromTemplateJobs">ListNodeFromTemplateJobs</a></code> | <code>string</code> | [List] panorama:ListNodeFromTemplateJobs. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListNodes">ListNodes</a></code> | <code>string</code> | [List] panorama:ListNodes. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListPackageImportJobs">ListPackageImportJobs</a></code> | <code>string</code> | [List] panorama:ListPackageImportJobs. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListPackages">ListPackages</a></code> | <code>string</code> | [List] panorama:ListPackages. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] panorama:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.ProvisionDevice">ProvisionDevice</a></code> | <code>string</code> | [Write] panorama:ProvisionDevice. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.RegisterPackageVersion">RegisterPackageVersion</a></code> | <code>string</code> | [Write] panorama:RegisterPackageVersion. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.RemoveApplicationInstance">RemoveApplicationInstance</a></code> | <code>string</code> | [Write] panorama:RemoveApplicationInstance. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.SignalApplicationInstanceNodeInstances">SignalApplicationInstanceNodeInstances</a></code> | <code>string</code> | [Write] panorama:SignalApplicationInstanceNodeInstances. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] panorama:TagResource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] panorama:UntagResource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaActions.property.UpdateDeviceMetadata">UpdateDeviceMetadata</a></code> | <code>string</code> | [Write] panorama:UpdateDeviceMetadata. |

---

##### `actionGetWebSocketURL`<sup>Required</sup> <a name="actionGetWebSocketURL" id="@cdk_utils/iam.panorama.PanoramaActions.property.actionGetWebSocketURL"></a>

```typescript
public readonly actionGetWebSocketURL: string;
```

- *Type:* string

[Read] panorama:GetWebSocketURL.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.panorama.PanoramaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.panorama.PanoramaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.panorama.PanoramaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.panorama.PanoramaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.panorama.PanoramaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplicationInstance`<sup>Required</sup> <a name="CreateApplicationInstance" id="@cdk_utils/iam.panorama.PanoramaActions.property.CreateApplicationInstance"></a>

```typescript
public readonly CreateApplicationInstance: string;
```

- *Type:* string

[Write] panorama:CreateApplicationInstance.

---

##### `CreateJobForDevices`<sup>Required</sup> <a name="CreateJobForDevices" id="@cdk_utils/iam.panorama.PanoramaActions.property.CreateJobForDevices"></a>

```typescript
public readonly CreateJobForDevices: string;
```

- *Type:* string

[Write] panorama:CreateJobForDevices.

---

##### `CreateNodeFromTemplateJob`<sup>Required</sup> <a name="CreateNodeFromTemplateJob" id="@cdk_utils/iam.panorama.PanoramaActions.property.CreateNodeFromTemplateJob"></a>

```typescript
public readonly CreateNodeFromTemplateJob: string;
```

- *Type:* string

[Write] panorama:CreateNodeFromTemplateJob.

---

##### `CreatePackage`<sup>Required</sup> <a name="CreatePackage" id="@cdk_utils/iam.panorama.PanoramaActions.property.CreatePackage"></a>

```typescript
public readonly CreatePackage: string;
```

- *Type:* string

[Write] panorama:CreatePackage.

---

##### `CreatePackageImportJob`<sup>Required</sup> <a name="CreatePackageImportJob" id="@cdk_utils/iam.panorama.PanoramaActions.property.CreatePackageImportJob"></a>

```typescript
public readonly CreatePackageImportJob: string;
```

- *Type:* string

[Write] panorama:CreatePackageImportJob.

---

##### `DeleteDevice`<sup>Required</sup> <a name="DeleteDevice" id="@cdk_utils/iam.panorama.PanoramaActions.property.DeleteDevice"></a>

```typescript
public readonly DeleteDevice: string;
```

- *Type:* string

[Write] panorama:DeleteDevice.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.panorama.PanoramaActions.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string;
```

- *Type:* string

[Write] panorama:DeletePackage.

---

##### `DeregisterPackageVersion`<sup>Required</sup> <a name="DeregisterPackageVersion" id="@cdk_utils/iam.panorama.PanoramaActions.property.DeregisterPackageVersion"></a>

```typescript
public readonly DeregisterPackageVersion: string;
```

- *Type:* string

[Write] panorama:DeregisterPackageVersion.

---

##### `DescribeApplicationInstance`<sup>Required</sup> <a name="DescribeApplicationInstance" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeApplicationInstance"></a>

```typescript
public readonly DescribeApplicationInstance: string;
```

- *Type:* string

[Read] panorama:DescribeApplicationInstance.

---

##### `DescribeApplicationInstanceDetails`<sup>Required</sup> <a name="DescribeApplicationInstanceDetails" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeApplicationInstanceDetails"></a>

```typescript
public readonly DescribeApplicationInstanceDetails: string;
```

- *Type:* string

[Read] panorama:DescribeApplicationInstanceDetails.

---

##### `DescribeDevice`<sup>Required</sup> <a name="DescribeDevice" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeDevice"></a>

```typescript
public readonly DescribeDevice: string;
```

- *Type:* string

[Read] panorama:DescribeDevice.

---

##### `DescribeDeviceJob`<sup>Required</sup> <a name="DescribeDeviceJob" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeDeviceJob"></a>

```typescript
public readonly DescribeDeviceJob: string;
```

- *Type:* string

[Read] panorama:DescribeDeviceJob.

---

##### `DescribeNode`<sup>Required</sup> <a name="DescribeNode" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeNode"></a>

```typescript
public readonly DescribeNode: string;
```

- *Type:* string

[Read] panorama:DescribeNode.

---

##### `DescribeNodeFromTemplateJob`<sup>Required</sup> <a name="DescribeNodeFromTemplateJob" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeNodeFromTemplateJob"></a>

```typescript
public readonly DescribeNodeFromTemplateJob: string;
```

- *Type:* string

[Read] panorama:DescribeNodeFromTemplateJob.

---

##### `DescribePackage`<sup>Required</sup> <a name="DescribePackage" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribePackage"></a>

```typescript
public readonly DescribePackage: string;
```

- *Type:* string

[Read] panorama:DescribePackage.

---

##### `DescribePackageImportJob`<sup>Required</sup> <a name="DescribePackageImportJob" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribePackageImportJob"></a>

```typescript
public readonly DescribePackageImportJob: string;
```

- *Type:* string

[Read] panorama:DescribePackageImportJob.

---

##### `DescribePackageVersion`<sup>Required</sup> <a name="DescribePackageVersion" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribePackageVersion"></a>

```typescript
public readonly DescribePackageVersion: string;
```

- *Type:* string

[Read] panorama:DescribePackageVersion.

---

##### `DescribeSoftware`<sup>Required</sup> <a name="DescribeSoftware" id="@cdk_utils/iam.panorama.PanoramaActions.property.DescribeSoftware"></a>

```typescript
public readonly DescribeSoftware: string;
```

- *Type:* string

[Read] panorama:DescribeSoftware.

---

##### `ListApplicationInstanceDependencies`<sup>Required</sup> <a name="ListApplicationInstanceDependencies" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListApplicationInstanceDependencies"></a>

```typescript
public readonly ListApplicationInstanceDependencies: string;
```

- *Type:* string

[List] panorama:ListApplicationInstanceDependencies.

---

##### `ListApplicationInstanceNodeInstances`<sup>Required</sup> <a name="ListApplicationInstanceNodeInstances" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListApplicationInstanceNodeInstances"></a>

```typescript
public readonly ListApplicationInstanceNodeInstances: string;
```

- *Type:* string

[List] panorama:ListApplicationInstanceNodeInstances.

---

##### `ListApplicationInstances`<sup>Required</sup> <a name="ListApplicationInstances" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListApplicationInstances"></a>

```typescript
public readonly ListApplicationInstances: string;
```

- *Type:* string

[List] panorama:ListApplicationInstances.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListDevices"></a>

```typescript
public readonly ListDevices: string;
```

- *Type:* string

[List] panorama:ListDevices.

---

##### `ListDevicesJobs`<sup>Required</sup> <a name="ListDevicesJobs" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListDevicesJobs"></a>

```typescript
public readonly ListDevicesJobs: string;
```

- *Type:* string

[List] panorama:ListDevicesJobs.

---

##### `ListNodeFromTemplateJobs`<sup>Required</sup> <a name="ListNodeFromTemplateJobs" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListNodeFromTemplateJobs"></a>

```typescript
public readonly ListNodeFromTemplateJobs: string;
```

- *Type:* string

[List] panorama:ListNodeFromTemplateJobs.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListNodes"></a>

```typescript
public readonly ListNodes: string;
```

- *Type:* string

[List] panorama:ListNodes.

---

##### `ListPackageImportJobs`<sup>Required</sup> <a name="ListPackageImportJobs" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListPackageImportJobs"></a>

```typescript
public readonly ListPackageImportJobs: string;
```

- *Type:* string

[List] panorama:ListPackageImportJobs.

---

##### `ListPackages`<sup>Required</sup> <a name="ListPackages" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListPackages"></a>

```typescript
public readonly ListPackages: string;
```

- *Type:* string

[List] panorama:ListPackages.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.panorama.PanoramaActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] panorama:ListTagsForResource.

---

##### `ProvisionDevice`<sup>Required</sup> <a name="ProvisionDevice" id="@cdk_utils/iam.panorama.PanoramaActions.property.ProvisionDevice"></a>

```typescript
public readonly ProvisionDevice: string;
```

- *Type:* string

[Write] panorama:ProvisionDevice.

---

##### `RegisterPackageVersion`<sup>Required</sup> <a name="RegisterPackageVersion" id="@cdk_utils/iam.panorama.PanoramaActions.property.RegisterPackageVersion"></a>

```typescript
public readonly RegisterPackageVersion: string;
```

- *Type:* string

[Write] panorama:RegisterPackageVersion.

---

##### `RemoveApplicationInstance`<sup>Required</sup> <a name="RemoveApplicationInstance" id="@cdk_utils/iam.panorama.PanoramaActions.property.RemoveApplicationInstance"></a>

```typescript
public readonly RemoveApplicationInstance: string;
```

- *Type:* string

[Write] panorama:RemoveApplicationInstance.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.panorama.PanoramaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SignalApplicationInstanceNodeInstances`<sup>Required</sup> <a name="SignalApplicationInstanceNodeInstances" id="@cdk_utils/iam.panorama.PanoramaActions.property.SignalApplicationInstanceNodeInstances"></a>

```typescript
public readonly SignalApplicationInstanceNodeInstances: string;
```

- *Type:* string

[Write] panorama:SignalApplicationInstanceNodeInstances.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.panorama.PanoramaActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] panorama:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.panorama.PanoramaActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] panorama:UntagResource.

---

##### `UpdateDeviceMetadata`<sup>Required</sup> <a name="UpdateDeviceMetadata" id="@cdk_utils/iam.panorama.PanoramaActions.property.UpdateDeviceMetadata"></a>

```typescript
public readonly UpdateDeviceMetadata: string;
```

- *Type:* string

[Write] panorama:UpdateDeviceMetadata.

---

### PanoramaConditions <a name="PanoramaConditions" id="@cdk_utils/iam.panorama.PanoramaConditions"></a>

Condition key constants and builders for panorama.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.panorama.PanoramaConditions.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

new panorama.PanoramaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.panorama.PanoramaConditions.requestTag"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.panorama.PanoramaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.panorama.PanoramaConditions.resourceTag"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.panorama.PanoramaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.panorama.PanoramaConditions.tagKeys"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.panorama.PanoramaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.CreateApplicationInstanceConditionKeys">CreateApplicationInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplicationInstance action. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.CreatePackageConditionKeys">CreatePackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePackage action. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.ProvisionDeviceConditionKeys">ProvisionDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ProvisionDevice action. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.panorama.PanoramaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.panorama.PanoramaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.panorama.PanoramaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationInstanceConditionKeys`<sup>Required</sup> <a name="CreateApplicationInstanceConditionKeys" id="@cdk_utils/iam.panorama.PanoramaConditions.property.CreateApplicationInstanceConditionKeys"></a>

```typescript
public readonly CreateApplicationInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplicationInstance action.

---

##### `CreatePackageConditionKeys`<sup>Required</sup> <a name="CreatePackageConditionKeys" id="@cdk_utils/iam.panorama.PanoramaConditions.property.CreatePackageConditionKeys"></a>

```typescript
public readonly CreatePackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePackage action.

---

##### `ProvisionDeviceConditionKeys`<sup>Required</sup> <a name="ProvisionDeviceConditionKeys" id="@cdk_utils/iam.panorama.PanoramaConditions.property.ProvisionDeviceConditionKeys"></a>

```typescript
public readonly ProvisionDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ProvisionDevice action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.panorama.PanoramaConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.panorama.PanoramaConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PanoramaResources <a name="PanoramaResources" id="@cdk_utils/iam.panorama.PanoramaResources"></a>

ARN builders, validators, and parsers for panorama resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.panorama.PanoramaResources.Initializer"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

new panorama.PanoramaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.applicationInstance">applicationInstance</a></code> | Builds an ARN for the applicationInstance resource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.device">device</a></code> | Builds an ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.isValidApplicationInstanceArn">isValidApplicationInstanceArn</a></code> | Validates whether a string is a valid ARN for the applicationInstance resource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.isValidDeviceArn">isValidDeviceArn</a></code> | Validates whether a string is a valid ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.isValidPackageArn">isValidPackageArn</a></code> | Validates whether a string is a valid ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.package">package</a></code> | Builds an ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.parseApplicationInstanceArn">parseApplicationInstanceArn</a></code> | Parses a applicationInstance ARN into its components. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.parseDeviceArn">parseDeviceArn</a></code> | Parses a device ARN into its components. |
| <code><a href="#@cdk_utils/iam.panorama.PanoramaResources.parsePackageArn">parsePackageArn</a></code> | Parses a package ARN into its components. |

---

##### `applicationInstance` <a name="applicationInstance" id="@cdk_utils/iam.panorama.PanoramaResources.applicationInstance"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.applicationInstance(props: PanoramaApplicationInstanceArnProps)
```

Builds an ARN for the applicationInstance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.panorama.PanoramaResources.applicationInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.panorama.PanoramaApplicationInstanceArnProps">PanoramaApplicationInstanceArnProps</a>

---

##### `device` <a name="device" id="@cdk_utils/iam.panorama.PanoramaResources.device"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.device(props: PanoramaDeviceArnProps)
```

Builds an ARN for the device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.panorama.PanoramaResources.device.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.panorama.PanoramaDeviceArnProps">PanoramaDeviceArnProps</a>

---

##### `isValidApplicationInstanceArn` <a name="isValidApplicationInstanceArn" id="@cdk_utils/iam.panorama.PanoramaResources.isValidApplicationInstanceArn"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.isValidApplicationInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the applicationInstance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.panorama.PanoramaResources.isValidApplicationInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceArn` <a name="isValidDeviceArn" id="@cdk_utils/iam.panorama.PanoramaResources.isValidDeviceArn"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.isValidDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.panorama.PanoramaResources.isValidDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackageArn` <a name="isValidPackageArn" id="@cdk_utils/iam.panorama.PanoramaResources.isValidPackageArn"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.isValidPackageArn(arn: string)
```

Validates whether a string is a valid ARN for the package resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.panorama.PanoramaResources.isValidPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `package` <a name="package" id="@cdk_utils/iam.panorama.PanoramaResources.package"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.package(props: PanoramaPackageArnProps)
```

Builds an ARN for the package resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.panorama.PanoramaResources.package.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.panorama.PanoramaPackageArnProps">PanoramaPackageArnProps</a>

---

##### `parseApplicationInstanceArn` <a name="parseApplicationInstanceArn" id="@cdk_utils/iam.panorama.PanoramaResources.parseApplicationInstanceArn"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.parseApplicationInstanceArn(arn: string)
```

Parses a applicationInstance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.panorama.PanoramaResources.parseApplicationInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceArn` <a name="parseDeviceArn" id="@cdk_utils/iam.panorama.PanoramaResources.parseDeviceArn"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.parseDeviceArn(arn: string)
```

Parses a device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.panorama.PanoramaResources.parseDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackageArn` <a name="parsePackageArn" id="@cdk_utils/iam.panorama.PanoramaResources.parsePackageArn"></a>

```typescript
import { panorama } from '@cdk_utils/iam'

panorama.PanoramaResources.parsePackageArn(arn: string)
```

Parses a package ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.panorama.PanoramaResources.parsePackageArn.parameter.arn"></a>

- *Type:* string

---




