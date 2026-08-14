# `codeartifact` Submodule <a name="`codeartifact` Submodule" id="@cdk_utils/iam.codeartifact"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeArtifactDomainArnComponents <a name="CodeArtifactDomainArnComponents" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactDomainArnComponents: codeartifact.CodeArtifactDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeArtifactDomainArnProps <a name="CodeArtifactDomainArnProps" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactDomainArnProps: codeartifact.CodeArtifactDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeArtifactPackageArnComponents <a name="CodeArtifactPackageArnComponents" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents"></a>

Parsed components of a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactPackageArnComponents: codeartifact.CodeArtifactPackageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.packageFormat">packageFormat</a></code> | <code>string</code> | The PackageFormat component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.packageName">packageName</a></code> | <code>string</code> | The PackageName component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.packageNamespace">packageNamespace</a></code> | <code>string</code> | The PackageNamespace component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `packageFormat`<sup>Required</sup> <a name="packageFormat" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.packageFormat"></a>

```typescript
public readonly packageFormat: string;
```

- *Type:* string

The PackageFormat component.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The PackageName component.

---

##### `packageNamespace`<sup>Required</sup> <a name="packageNamespace" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.packageNamespace"></a>

```typescript
public readonly packageNamespace: string;
```

- *Type:* string

The PackageNamespace component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnComponents.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component.

---

### CodeArtifactPackageArnProps <a name="CodeArtifactPackageArnProps" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps"></a>

Properties for building a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactPackageArnProps: codeartifact.CodeArtifactPackageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.packageFormat">packageFormat</a></code> | <code>string</code> | The PackageFormat component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.packageName">packageName</a></code> | <code>string</code> | The PackageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.packageNamespace">packageNamespace</a></code> | <code>string</code> | The PackageNamespace component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `packageFormat`<sup>Required</sup> <a name="packageFormat" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.packageFormat"></a>

```typescript
public readonly packageFormat: string;
```

- *Type:* string

The PackageFormat component of the ARN.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The PackageName component of the ARN.

---

##### `packageNamespace`<sup>Required</sup> <a name="packageNamespace" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.packageNamespace"></a>

```typescript
public readonly packageNamespace: string;
```

- *Type:* string

The PackageNamespace component of the ARN.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeArtifactPackageGroupArnComponents <a name="CodeArtifactPackageGroupArnComponents" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents"></a>

Parsed components of a package-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactPackageGroupArnComponents: codeartifact.CodeArtifactPackageGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.encodedPackageGroupPattern">encodedPackageGroupPattern</a></code> | <code>string</code> | The EncodedPackageGroupPattern component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `encodedPackageGroupPattern`<sup>Required</sup> <a name="encodedPackageGroupPattern" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.encodedPackageGroupPattern"></a>

```typescript
public readonly encodedPackageGroupPattern: string;
```

- *Type:* string

The EncodedPackageGroupPattern component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeArtifactPackageGroupArnProps <a name="CodeArtifactPackageGroupArnProps" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps"></a>

Properties for building a package-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactPackageGroupArnProps: codeartifact.CodeArtifactPackageGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.encodedPackageGroupPattern">encodedPackageGroupPattern</a></code> | <code>string</code> | The EncodedPackageGroupPattern component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `encodedPackageGroupPattern`<sup>Required</sup> <a name="encodedPackageGroupPattern" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.encodedPackageGroupPattern"></a>

```typescript
public readonly encodedPackageGroupPattern: string;
```

- *Type:* string

The EncodedPackageGroupPattern component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeArtifactRepositoryArnComponents <a name="CodeArtifactRepositoryArnComponents" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents"></a>

Parsed components of a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactRepositoryArnComponents: codeartifact.CodeArtifactRepositoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnComponents.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component.

---

### CodeArtifactRepositoryArnProps <a name="CodeArtifactRepositoryArnProps" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps"></a>

Properties for building a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

const codeArtifactRepositoryArnProps: codeartifact.CodeArtifactRepositoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The RepositoryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The RepositoryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeArtifactActions <a name="CodeArtifactActions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions"></a>

IAM action constants for the codeartifact service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

new codeartifact.CodeArtifactActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetAssociatedPackageGroup">actionGetAssociatedPackageGroup</a></code> | <code>string</code> | [Read] codeartifact:GetAssociatedPackageGroup. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetAuthorizationToken">actionGetAuthorizationToken</a></code> | <code>string</code> | [Read] codeartifact:GetAuthorizationToken. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetDomainPermissionsPolicy">actionGetDomainPermissionsPolicy</a></code> | <code>string</code> | [Read] codeartifact:GetDomainPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetPackageVersionAsset">actionGetPackageVersionAsset</a></code> | <code>string</code> | [Read] codeartifact:GetPackageVersionAsset. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetPackageVersionReadme">actionGetPackageVersionReadme</a></code> | <code>string</code> | [Read] codeartifact:GetPackageVersionReadme. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetRepositoryEndpoint">actionGetRepositoryEndpoint</a></code> | <code>string</code> | [Read] codeartifact:GetRepositoryEndpoint. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetRepositoryPermissionsPolicy">actionGetRepositoryPermissionsPolicy</a></code> | <code>string</code> | [Read] codeartifact:GetRepositoryPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AssociateExternalConnection">AssociateExternalConnection</a></code> | <code>string</code> | [Write] codeartifact:AssociateExternalConnection. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AssociateWithDownstreamRepository">AssociateWithDownstreamRepository</a></code> | <code>string</code> | [Write] codeartifact:AssociateWithDownstreamRepository. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CopyPackageVersions">CopyPackageVersions</a></code> | <code>string</code> | [Write] codeartifact:CopyPackageVersions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] codeartifact:CreateDomain. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CreatePackageGroup">CreatePackageGroup</a></code> | <code>string</code> | [Write] codeartifact:CreatePackageGroup. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] codeartifact:CreateRepository. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] codeartifact:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteDomainPermissionsPolicy">DeleteDomainPermissionsPolicy</a></code> | <code>string</code> | [PermissionManagement] codeartifact:DeleteDomainPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeletePackage">DeletePackage</a></code> | <code>string</code> | [Write] codeartifact:DeletePackage. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeletePackageGroup">DeletePackageGroup</a></code> | <code>string</code> | [Write] codeartifact:DeletePackageGroup. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeletePackageVersions">DeletePackageVersions</a></code> | <code>string</code> | [Write] codeartifact:DeletePackageVersions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] codeartifact:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteRepositoryPermissionsPolicy">DeleteRepositoryPermissionsPolicy</a></code> | <code>string</code> | [PermissionManagement] codeartifact:DeleteRepositoryPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribeDomain">DescribeDomain</a></code> | <code>string</code> | [Read] codeartifact:DescribeDomain. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribePackage">DescribePackage</a></code> | <code>string</code> | [Read] codeartifact:DescribePackage. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribePackageGroup">DescribePackageGroup</a></code> | <code>string</code> | [Read] codeartifact:DescribePackageGroup. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribePackageVersion">DescribePackageVersion</a></code> | <code>string</code> | [Read] codeartifact:DescribePackageVersion. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribeRepository">DescribeRepository</a></code> | <code>string</code> | [Read] codeartifact:DescribeRepository. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DisassociateExternalConnection">DisassociateExternalConnection</a></code> | <code>string</code> | [Write] codeartifact:DisassociateExternalConnection. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DisposePackageVersions">DisposePackageVersions</a></code> | <code>string</code> | [Write] codeartifact:DisposePackageVersions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListAllowedRepositoriesForGroup">ListAllowedRepositoriesForGroup</a></code> | <code>string</code> | [List] codeartifact:ListAllowedRepositoriesForGroup. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListAssociatedPackages">ListAssociatedPackages</a></code> | <code>string</code> | [List] codeartifact:ListAssociatedPackages. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] codeartifact:ListDomains. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageGroups">ListPackageGroups</a></code> | <code>string</code> | [List] codeartifact:ListPackageGroups. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackages">ListPackages</a></code> | <code>string</code> | [List] codeartifact:ListPackages. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageVersionAssets">ListPackageVersionAssets</a></code> | <code>string</code> | [List] codeartifact:ListPackageVersionAssets. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageVersionDependencies">ListPackageVersionDependencies</a></code> | <code>string</code> | [List] codeartifact:ListPackageVersionDependencies. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageVersions">ListPackageVersions</a></code> | <code>string</code> | [List] codeartifact:ListPackageVersions. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] codeartifact:ListRepositories. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListRepositoriesInDomain">ListRepositoriesInDomain</a></code> | <code>string</code> | [List] codeartifact:ListRepositoriesInDomain. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListSubPackageGroups">ListSubPackageGroups</a></code> | <code>string</code> | [List] codeartifact:ListSubPackageGroups. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codeartifact:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PublishPackageVersion">PublishPackageVersion</a></code> | <code>string</code> | [Write] codeartifact:PublishPackageVersion. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutDomainPermissionsPolicy">PutDomainPermissionsPolicy</a></code> | <code>string</code> | [Write] codeartifact:PutDomainPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutPackageMetadata">PutPackageMetadata</a></code> | <code>string</code> | [Write] codeartifact:PutPackageMetadata. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutPackageOriginConfiguration">PutPackageOriginConfiguration</a></code> | <code>string</code> | [Write] codeartifact:PutPackageOriginConfiguration. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutRepositoryPermissionsPolicy">PutRepositoryPermissionsPolicy</a></code> | <code>string</code> | [Write] codeartifact:PutRepositoryPermissionsPolicy. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ReadFromRepository">ReadFromRepository</a></code> | <code>string</code> | [Read] codeartifact:ReadFromRepository. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codeartifact:TagResource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codeartifact:UntagResource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdatePackageGroup">UpdatePackageGroup</a></code> | <code>string</code> | [Write] codeartifact:UpdatePackageGroup. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdatePackageGroupOriginConfiguration">UpdatePackageGroupOriginConfiguration</a></code> | <code>string</code> | [Write] codeartifact:UpdatePackageGroupOriginConfiguration. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdatePackageVersionsStatus">UpdatePackageVersionsStatus</a></code> | <code>string</code> | [Write] codeartifact:UpdatePackageVersionsStatus. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdateRepository">UpdateRepository</a></code> | <code>string</code> | [Write] codeartifact:UpdateRepository. |

---

##### `actionGetAssociatedPackageGroup`<sup>Required</sup> <a name="actionGetAssociatedPackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetAssociatedPackageGroup"></a>

```typescript
public readonly actionGetAssociatedPackageGroup: string;
```

- *Type:* string

[Read] codeartifact:GetAssociatedPackageGroup.

---

##### `actionGetAuthorizationToken`<sup>Required</sup> <a name="actionGetAuthorizationToken" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetAuthorizationToken"></a>

```typescript
public readonly actionGetAuthorizationToken: string;
```

- *Type:* string

[Read] codeartifact:GetAuthorizationToken.

---

##### `actionGetDomainPermissionsPolicy`<sup>Required</sup> <a name="actionGetDomainPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetDomainPermissionsPolicy"></a>

```typescript
public readonly actionGetDomainPermissionsPolicy: string;
```

- *Type:* string

[Read] codeartifact:GetDomainPermissionsPolicy.

---

##### `actionGetPackageVersionAsset`<sup>Required</sup> <a name="actionGetPackageVersionAsset" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetPackageVersionAsset"></a>

```typescript
public readonly actionGetPackageVersionAsset: string;
```

- *Type:* string

[Read] codeartifact:GetPackageVersionAsset.

---

##### `actionGetPackageVersionReadme`<sup>Required</sup> <a name="actionGetPackageVersionReadme" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetPackageVersionReadme"></a>

```typescript
public readonly actionGetPackageVersionReadme: string;
```

- *Type:* string

[Read] codeartifact:GetPackageVersionReadme.

---

##### `actionGetRepositoryEndpoint`<sup>Required</sup> <a name="actionGetRepositoryEndpoint" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetRepositoryEndpoint"></a>

```typescript
public readonly actionGetRepositoryEndpoint: string;
```

- *Type:* string

[Read] codeartifact:GetRepositoryEndpoint.

---

##### `actionGetRepositoryPermissionsPolicy`<sup>Required</sup> <a name="actionGetRepositoryPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.actionGetRepositoryPermissionsPolicy"></a>

```typescript
public readonly actionGetRepositoryPermissionsPolicy: string;
```

- *Type:* string

[Read] codeartifact:GetRepositoryPermissionsPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateExternalConnection`<sup>Required</sup> <a name="AssociateExternalConnection" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AssociateExternalConnection"></a>

```typescript
public readonly AssociateExternalConnection: string;
```

- *Type:* string

[Write] codeartifact:AssociateExternalConnection.

---

##### `AssociateWithDownstreamRepository`<sup>Required</sup> <a name="AssociateWithDownstreamRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.AssociateWithDownstreamRepository"></a>

```typescript
public readonly AssociateWithDownstreamRepository: string;
```

- *Type:* string

[Write] codeartifact:AssociateWithDownstreamRepository.

---

##### `CopyPackageVersions`<sup>Required</sup> <a name="CopyPackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CopyPackageVersions"></a>

```typescript
public readonly CopyPackageVersions: string;
```

- *Type:* string

[Write] codeartifact:CopyPackageVersions.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] codeartifact:CreateDomain.

---

##### `CreatePackageGroup`<sup>Required</sup> <a name="CreatePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CreatePackageGroup"></a>

```typescript
public readonly CreatePackageGroup: string;
```

- *Type:* string

[Write] codeartifact:CreatePackageGroup.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] codeartifact:CreateRepository.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] codeartifact:DeleteDomain.

---

##### `DeleteDomainPermissionsPolicy`<sup>Required</sup> <a name="DeleteDomainPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteDomainPermissionsPolicy"></a>

```typescript
public readonly DeleteDomainPermissionsPolicy: string;
```

- *Type:* string

[PermissionManagement] codeartifact:DeleteDomainPermissionsPolicy.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string;
```

- *Type:* string

[Write] codeartifact:DeletePackage.

---

##### `DeletePackageGroup`<sup>Required</sup> <a name="DeletePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeletePackageGroup"></a>

```typescript
public readonly DeletePackageGroup: string;
```

- *Type:* string

[Write] codeartifact:DeletePackageGroup.

---

##### `DeletePackageVersions`<sup>Required</sup> <a name="DeletePackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeletePackageVersions"></a>

```typescript
public readonly DeletePackageVersions: string;
```

- *Type:* string

[Write] codeartifact:DeletePackageVersions.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] codeartifact:DeleteRepository.

---

##### `DeleteRepositoryPermissionsPolicy`<sup>Required</sup> <a name="DeleteRepositoryPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DeleteRepositoryPermissionsPolicy"></a>

```typescript
public readonly DeleteRepositoryPermissionsPolicy: string;
```

- *Type:* string

[PermissionManagement] codeartifact:DeleteRepositoryPermissionsPolicy.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string;
```

- *Type:* string

[Read] codeartifact:DescribeDomain.

---

##### `DescribePackage`<sup>Required</sup> <a name="DescribePackage" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribePackage"></a>

```typescript
public readonly DescribePackage: string;
```

- *Type:* string

[Read] codeartifact:DescribePackage.

---

##### `DescribePackageGroup`<sup>Required</sup> <a name="DescribePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribePackageGroup"></a>

```typescript
public readonly DescribePackageGroup: string;
```

- *Type:* string

[Read] codeartifact:DescribePackageGroup.

---

##### `DescribePackageVersion`<sup>Required</sup> <a name="DescribePackageVersion" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribePackageVersion"></a>

```typescript
public readonly DescribePackageVersion: string;
```

- *Type:* string

[Read] codeartifact:DescribePackageVersion.

---

##### `DescribeRepository`<sup>Required</sup> <a name="DescribeRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DescribeRepository"></a>

```typescript
public readonly DescribeRepository: string;
```

- *Type:* string

[Read] codeartifact:DescribeRepository.

---

##### `DisassociateExternalConnection`<sup>Required</sup> <a name="DisassociateExternalConnection" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DisassociateExternalConnection"></a>

```typescript
public readonly DisassociateExternalConnection: string;
```

- *Type:* string

[Write] codeartifact:DisassociateExternalConnection.

---

##### `DisposePackageVersions`<sup>Required</sup> <a name="DisposePackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.DisposePackageVersions"></a>

```typescript
public readonly DisposePackageVersions: string;
```

- *Type:* string

[Write] codeartifact:DisposePackageVersions.

---

##### `ListAllowedRepositoriesForGroup`<sup>Required</sup> <a name="ListAllowedRepositoriesForGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListAllowedRepositoriesForGroup"></a>

```typescript
public readonly ListAllowedRepositoriesForGroup: string;
```

- *Type:* string

[List] codeartifact:ListAllowedRepositoriesForGroup.

---

##### `ListAssociatedPackages`<sup>Required</sup> <a name="ListAssociatedPackages" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListAssociatedPackages"></a>

```typescript
public readonly ListAssociatedPackages: string;
```

- *Type:* string

[List] codeartifact:ListAssociatedPackages.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] codeartifact:ListDomains.

---

##### `ListPackageGroups`<sup>Required</sup> <a name="ListPackageGroups" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageGroups"></a>

```typescript
public readonly ListPackageGroups: string;
```

- *Type:* string

[List] codeartifact:ListPackageGroups.

---

##### `ListPackages`<sup>Required</sup> <a name="ListPackages" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackages"></a>

```typescript
public readonly ListPackages: string;
```

- *Type:* string

[List] codeartifact:ListPackages.

---

##### `ListPackageVersionAssets`<sup>Required</sup> <a name="ListPackageVersionAssets" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageVersionAssets"></a>

```typescript
public readonly ListPackageVersionAssets: string;
```

- *Type:* string

[List] codeartifact:ListPackageVersionAssets.

---

##### `ListPackageVersionDependencies`<sup>Required</sup> <a name="ListPackageVersionDependencies" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageVersionDependencies"></a>

```typescript
public readonly ListPackageVersionDependencies: string;
```

- *Type:* string

[List] codeartifact:ListPackageVersionDependencies.

---

##### `ListPackageVersions`<sup>Required</sup> <a name="ListPackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListPackageVersions"></a>

```typescript
public readonly ListPackageVersions: string;
```

- *Type:* string

[List] codeartifact:ListPackageVersions.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] codeartifact:ListRepositories.

---

##### `ListRepositoriesInDomain`<sup>Required</sup> <a name="ListRepositoriesInDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListRepositoriesInDomain"></a>

```typescript
public readonly ListRepositoriesInDomain: string;
```

- *Type:* string

[List] codeartifact:ListRepositoriesInDomain.

---

##### `ListSubPackageGroups`<sup>Required</sup> <a name="ListSubPackageGroups" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListSubPackageGroups"></a>

```typescript
public readonly ListSubPackageGroups: string;
```

- *Type:* string

[List] codeartifact:ListSubPackageGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codeartifact:ListTagsForResource.

---

##### `PublishPackageVersion`<sup>Required</sup> <a name="PublishPackageVersion" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PublishPackageVersion"></a>

```typescript
public readonly PublishPackageVersion: string;
```

- *Type:* string

[Write] codeartifact:PublishPackageVersion.

---

##### `PutDomainPermissionsPolicy`<sup>Required</sup> <a name="PutDomainPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutDomainPermissionsPolicy"></a>

```typescript
public readonly PutDomainPermissionsPolicy: string;
```

- *Type:* string

[Write] codeartifact:PutDomainPermissionsPolicy.

---

##### `PutPackageMetadata`<sup>Required</sup> <a name="PutPackageMetadata" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutPackageMetadata"></a>

```typescript
public readonly PutPackageMetadata: string;
```

- *Type:* string

[Write] codeartifact:PutPackageMetadata.

---

##### `PutPackageOriginConfiguration`<sup>Required</sup> <a name="PutPackageOriginConfiguration" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutPackageOriginConfiguration"></a>

```typescript
public readonly PutPackageOriginConfiguration: string;
```

- *Type:* string

[Write] codeartifact:PutPackageOriginConfiguration.

---

##### `PutRepositoryPermissionsPolicy`<sup>Required</sup> <a name="PutRepositoryPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.PutRepositoryPermissionsPolicy"></a>

```typescript
public readonly PutRepositoryPermissionsPolicy: string;
```

- *Type:* string

[Write] codeartifact:PutRepositoryPermissionsPolicy.

---

##### `ReadFromRepository`<sup>Required</sup> <a name="ReadFromRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.ReadFromRepository"></a>

```typescript
public readonly ReadFromRepository: string;
```

- *Type:* string

[Read] codeartifact:ReadFromRepository.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codeartifact:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codeartifact:UntagResource.

---

##### `UpdatePackageGroup`<sup>Required</sup> <a name="UpdatePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdatePackageGroup"></a>

```typescript
public readonly UpdatePackageGroup: string;
```

- *Type:* string

[Write] codeartifact:UpdatePackageGroup.

---

##### `UpdatePackageGroupOriginConfiguration`<sup>Required</sup> <a name="UpdatePackageGroupOriginConfiguration" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdatePackageGroupOriginConfiguration"></a>

```typescript
public readonly UpdatePackageGroupOriginConfiguration: string;
```

- *Type:* string

[Write] codeartifact:UpdatePackageGroupOriginConfiguration.

---

##### `UpdatePackageVersionsStatus`<sup>Required</sup> <a name="UpdatePackageVersionsStatus" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdatePackageVersionsStatus"></a>

```typescript
public readonly UpdatePackageVersionsStatus: string;
```

- *Type:* string

[Write] codeartifact:UpdatePackageVersionsStatus.

---

##### `UpdateRepository`<sup>Required</sup> <a name="UpdateRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactActions.property.UpdateRepository"></a>

```typescript
public readonly UpdateRepository: string;
```

- *Type:* string

[Write] codeartifact:UpdateRepository.

---

### CodeArtifactConditions <a name="CodeArtifactConditions" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions"></a>

Condition key constants and builders for codeartifact.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

new codeartifact.CodeArtifactConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.requestTag"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.resourceTag"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.tagKeys"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.CreateDomainConditionKeys">CreateDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomain action. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.CreatePackageGroupConditionKeys">CreatePackageGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePackageGroup action. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.CreateRepositoryConditionKeys">CreateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepository action. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDomainConditionKeys`<sup>Required</sup> <a name="CreateDomainConditionKeys" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.CreateDomainConditionKeys"></a>

```typescript
public readonly CreateDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomain action.

---

##### `CreatePackageGroupConditionKeys`<sup>Required</sup> <a name="CreatePackageGroupConditionKeys" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.CreatePackageGroupConditionKeys"></a>

```typescript
public readonly CreatePackageGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePackageGroup action.

---

##### `CreateRepositoryConditionKeys`<sup>Required</sup> <a name="CreateRepositoryConditionKeys" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.CreateRepositoryConditionKeys"></a>

```typescript
public readonly CreateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepository action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codeartifact.CodeArtifactConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CodeArtifactOperations <a name="CodeArtifactOperations" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations"></a>

API operation to required IAM actions mapping for codeartifact.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

new codeartifact.CodeArtifactOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.AssociateExternalConnection">AssociateExternalConnection</a></code> | <code>string[]</code> | IAM actions required for the AssociateExternalConnection API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CopyPackageVersions">CopyPackageVersions</a></code> | <code>string[]</code> | IAM actions required for the CopyPackageVersions API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CreatePackageGroup">CreatePackageGroup</a></code> | <code>string[]</code> | IAM actions required for the CreatePackageGroup API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CreateRepository">CreateRepository</a></code> | <code>string[]</code> | IAM actions required for the CreateRepository API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteDomainPermissionsPolicy">DeleteDomainPermissionsPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainPermissionsPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeletePackage">DeletePackage</a></code> | <code>string[]</code> | IAM actions required for the DeletePackage API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeletePackageGroup">DeletePackageGroup</a></code> | <code>string[]</code> | IAM actions required for the DeletePackageGroup API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeletePackageVersions">DeletePackageVersions</a></code> | <code>string[]</code> | IAM actions required for the DeletePackageVersions API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteRepository">DeleteRepository</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepository API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteRepositoryPermissionsPolicy">DeleteRepositoryPermissionsPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepositoryPermissionsPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribeDomain">DescribeDomain</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomain API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribePackage">DescribePackage</a></code> | <code>string[]</code> | IAM actions required for the DescribePackage API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribePackageGroup">DescribePackageGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribePackageGroup API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribePackageVersion">DescribePackageVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribePackageVersion API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribeRepository">DescribeRepository</a></code> | <code>string[]</code> | IAM actions required for the DescribeRepository API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DisassociateExternalConnection">DisassociateExternalConnection</a></code> | <code>string[]</code> | IAM actions required for the DisassociateExternalConnection API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DisposePackageVersions">DisposePackageVersions</a></code> | <code>string[]</code> | IAM actions required for the DisposePackageVersions API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListAllowedRepositoriesForGroup">ListAllowedRepositoriesForGroup</a></code> | <code>string[]</code> | IAM actions required for the ListAllowedRepositoriesForGroup API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListAssociatedPackages">ListAssociatedPackages</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedPackages API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageGroups">ListPackageGroups</a></code> | <code>string[]</code> | IAM actions required for the ListPackageGroups API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackages">ListPackages</a></code> | <code>string[]</code> | IAM actions required for the ListPackages API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageVersionAssets">ListPackageVersionAssets</a></code> | <code>string[]</code> | IAM actions required for the ListPackageVersionAssets API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageVersionDependencies">ListPackageVersionDependencies</a></code> | <code>string[]</code> | IAM actions required for the ListPackageVersionDependencies API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageVersions">ListPackageVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPackageVersions API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListRepositories">ListRepositories</a></code> | <code>string[]</code> | IAM actions required for the ListRepositories API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListRepositoriesInDomain">ListRepositoriesInDomain</a></code> | <code>string[]</code> | IAM actions required for the ListRepositoriesInDomain API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListSubPackageGroups">ListSubPackageGroups</a></code> | <code>string[]</code> | IAM actions required for the ListSubPackageGroups API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetAssociatedPackageGroup">opGetAssociatedPackageGroup</a></code> | <code>string[]</code> | IAM actions required for the GetAssociatedPackageGroup API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetAuthorizationToken">opGetAuthorizationToken</a></code> | <code>string[]</code> | IAM actions required for the GetAuthorizationToken API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetDomainPermissionsPolicy">opGetDomainPermissionsPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetDomainPermissionsPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetPackageVersionAsset">opGetPackageVersionAsset</a></code> | <code>string[]</code> | IAM actions required for the GetPackageVersionAsset API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetPackageVersionReadme">opGetPackageVersionReadme</a></code> | <code>string[]</code> | IAM actions required for the GetPackageVersionReadme API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetRepositoryEndpoint">opGetRepositoryEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryEndpoint API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetRepositoryPermissionsPolicy">opGetRepositoryPermissionsPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetRepositoryPermissionsPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PublishPackageVersion">PublishPackageVersion</a></code> | <code>string[]</code> | IAM actions required for the PublishPackageVersion API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PutDomainPermissionsPolicy">PutDomainPermissionsPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutDomainPermissionsPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PutPackageOriginConfiguration">PutPackageOriginConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutPackageOriginConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PutRepositoryPermissionsPolicy">PutRepositoryPermissionsPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutRepositoryPermissionsPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdatePackageGroup">UpdatePackageGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackageGroup API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdatePackageGroupOriginConfiguration">UpdatePackageGroupOriginConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackageGroupOriginConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdatePackageVersionsStatus">UpdatePackageVersionsStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdatePackageVersionsStatus API call. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdateRepository">UpdateRepository</a></code> | <code>string[]</code> | IAM actions required for the UpdateRepository API call. |

---

##### `AssociateExternalConnection`<sup>Required</sup> <a name="AssociateExternalConnection" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.AssociateExternalConnection"></a>

```typescript
public readonly AssociateExternalConnection: string[];
```

- *Type:* string[]

IAM actions required for the AssociateExternalConnection API call.

---

##### `CopyPackageVersions`<sup>Required</sup> <a name="CopyPackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CopyPackageVersions"></a>

```typescript
public readonly CopyPackageVersions: string[];
```

- *Type:* string[]

IAM actions required for the CopyPackageVersions API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreatePackageGroup`<sup>Required</sup> <a name="CreatePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CreatePackageGroup"></a>

```typescript
public readonly CreatePackageGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreatePackageGroup API call.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepository API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteDomainPermissionsPolicy`<sup>Required</sup> <a name="DeleteDomainPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteDomainPermissionsPolicy"></a>

```typescript
public readonly DeleteDomainPermissionsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainPermissionsPolicy API call.

---

##### `DeletePackage`<sup>Required</sup> <a name="DeletePackage" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeletePackage"></a>

```typescript
public readonly DeletePackage: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackage API call.

---

##### `DeletePackageGroup`<sup>Required</sup> <a name="DeletePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeletePackageGroup"></a>

```typescript
public readonly DeletePackageGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackageGroup API call.

---

##### `DeletePackageVersions`<sup>Required</sup> <a name="DeletePackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeletePackageVersions"></a>

```typescript
public readonly DeletePackageVersions: string[];
```

- *Type:* string[]

IAM actions required for the DeletePackageVersions API call.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepository API call.

---

##### `DeleteRepositoryPermissionsPolicy`<sup>Required</sup> <a name="DeleteRepositoryPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DeleteRepositoryPermissionsPolicy"></a>

```typescript
public readonly DeleteRepositoryPermissionsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepositoryPermissionsPolicy API call.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomain API call.

---

##### `DescribePackage`<sup>Required</sup> <a name="DescribePackage" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribePackage"></a>

```typescript
public readonly DescribePackage: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackage API call.

---

##### `DescribePackageGroup`<sup>Required</sup> <a name="DescribePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribePackageGroup"></a>

```typescript
public readonly DescribePackageGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackageGroup API call.

---

##### `DescribePackageVersion`<sup>Required</sup> <a name="DescribePackageVersion" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribePackageVersion"></a>

```typescript
public readonly DescribePackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribePackageVersion API call.

---

##### `DescribeRepository`<sup>Required</sup> <a name="DescribeRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DescribeRepository"></a>

```typescript
public readonly DescribeRepository: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRepository API call.

---

##### `DisassociateExternalConnection`<sup>Required</sup> <a name="DisassociateExternalConnection" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DisassociateExternalConnection"></a>

```typescript
public readonly DisassociateExternalConnection: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateExternalConnection API call.

---

##### `DisposePackageVersions`<sup>Required</sup> <a name="DisposePackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.DisposePackageVersions"></a>

```typescript
public readonly DisposePackageVersions: string[];
```

- *Type:* string[]

IAM actions required for the DisposePackageVersions API call.

---

##### `ListAllowedRepositoriesForGroup`<sup>Required</sup> <a name="ListAllowedRepositoriesForGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListAllowedRepositoriesForGroup"></a>

```typescript
public readonly ListAllowedRepositoriesForGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListAllowedRepositoriesForGroup API call.

---

##### `ListAssociatedPackages`<sup>Required</sup> <a name="ListAssociatedPackages" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListAssociatedPackages"></a>

```typescript
public readonly ListAssociatedPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedPackages API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListPackageGroups`<sup>Required</sup> <a name="ListPackageGroups" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageGroups"></a>

```typescript
public readonly ListPackageGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListPackageGroups API call.

---

##### `ListPackages`<sup>Required</sup> <a name="ListPackages" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackages"></a>

```typescript
public readonly ListPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListPackages API call.

---

##### `ListPackageVersionAssets`<sup>Required</sup> <a name="ListPackageVersionAssets" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageVersionAssets"></a>

```typescript
public readonly ListPackageVersionAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListPackageVersionAssets API call.

---

##### `ListPackageVersionDependencies`<sup>Required</sup> <a name="ListPackageVersionDependencies" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageVersionDependencies"></a>

```typescript
public readonly ListPackageVersionDependencies: string[];
```

- *Type:* string[]

IAM actions required for the ListPackageVersionDependencies API call.

---

##### `ListPackageVersions`<sup>Required</sup> <a name="ListPackageVersions" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListPackageVersions"></a>

```typescript
public readonly ListPackageVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPackageVersions API call.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositories API call.

---

##### `ListRepositoriesInDomain`<sup>Required</sup> <a name="ListRepositoriesInDomain" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListRepositoriesInDomain"></a>

```typescript
public readonly ListRepositoriesInDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositoriesInDomain API call.

---

##### `ListSubPackageGroups`<sup>Required</sup> <a name="ListSubPackageGroups" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListSubPackageGroups"></a>

```typescript
public readonly ListSubPackageGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListSubPackageGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAssociatedPackageGroup`<sup>Required</sup> <a name="opGetAssociatedPackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetAssociatedPackageGroup"></a>

```typescript
public readonly opGetAssociatedPackageGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetAssociatedPackageGroup API call.

---

##### `opGetAuthorizationToken`<sup>Required</sup> <a name="opGetAuthorizationToken" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetAuthorizationToken"></a>

```typescript
public readonly opGetAuthorizationToken: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthorizationToken API call.

---

##### `opGetDomainPermissionsPolicy`<sup>Required</sup> <a name="opGetDomainPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetDomainPermissionsPolicy"></a>

```typescript
public readonly opGetDomainPermissionsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainPermissionsPolicy API call.

---

##### `opGetPackageVersionAsset`<sup>Required</sup> <a name="opGetPackageVersionAsset" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetPackageVersionAsset"></a>

```typescript
public readonly opGetPackageVersionAsset: string[];
```

- *Type:* string[]

IAM actions required for the GetPackageVersionAsset API call.

---

##### `opGetPackageVersionReadme`<sup>Required</sup> <a name="opGetPackageVersionReadme" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetPackageVersionReadme"></a>

```typescript
public readonly opGetPackageVersionReadme: string[];
```

- *Type:* string[]

IAM actions required for the GetPackageVersionReadme API call.

---

##### `opGetRepositoryEndpoint`<sup>Required</sup> <a name="opGetRepositoryEndpoint" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetRepositoryEndpoint"></a>

```typescript
public readonly opGetRepositoryEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryEndpoint API call.

---

##### `opGetRepositoryPermissionsPolicy`<sup>Required</sup> <a name="opGetRepositoryPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.opGetRepositoryPermissionsPolicy"></a>

```typescript
public readonly opGetRepositoryPermissionsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositoryPermissionsPolicy API call.

---

##### `PublishPackageVersion`<sup>Required</sup> <a name="PublishPackageVersion" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PublishPackageVersion"></a>

```typescript
public readonly PublishPackageVersion: string[];
```

- *Type:* string[]

IAM actions required for the PublishPackageVersion API call.

---

##### `PutDomainPermissionsPolicy`<sup>Required</sup> <a name="PutDomainPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PutDomainPermissionsPolicy"></a>

```typescript
public readonly PutDomainPermissionsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutDomainPermissionsPolicy API call.

---

##### `PutPackageOriginConfiguration`<sup>Required</sup> <a name="PutPackageOriginConfiguration" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PutPackageOriginConfiguration"></a>

```typescript
public readonly PutPackageOriginConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutPackageOriginConfiguration API call.

---

##### `PutRepositoryPermissionsPolicy`<sup>Required</sup> <a name="PutRepositoryPermissionsPolicy" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.PutRepositoryPermissionsPolicy"></a>

```typescript
public readonly PutRepositoryPermissionsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutRepositoryPermissionsPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePackageGroup`<sup>Required</sup> <a name="UpdatePackageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdatePackageGroup"></a>

```typescript
public readonly UpdatePackageGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackageGroup API call.

---

##### `UpdatePackageGroupOriginConfiguration`<sup>Required</sup> <a name="UpdatePackageGroupOriginConfiguration" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdatePackageGroupOriginConfiguration"></a>

```typescript
public readonly UpdatePackageGroupOriginConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackageGroupOriginConfiguration API call.

---

##### `UpdatePackageVersionsStatus`<sup>Required</sup> <a name="UpdatePackageVersionsStatus" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdatePackageVersionsStatus"></a>

```typescript
public readonly UpdatePackageVersionsStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePackageVersionsStatus API call.

---

##### `UpdateRepository`<sup>Required</sup> <a name="UpdateRepository" id="@cdk_utils/iam.codeartifact.CodeArtifactOperations.property.UpdateRepository"></a>

```typescript
public readonly UpdateRepository: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRepository API call.

---

### CodeArtifactResources <a name="CodeArtifactResources" id="@cdk_utils/iam.codeartifact.CodeArtifactResources"></a>

ARN builders, validators, and parsers for codeartifact resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.Initializer"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

new codeartifact.CodeArtifactResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidPackageArn">isValidPackageArn</a></code> | Validates whether a string is a valid ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidPackageGroupArn">isValidPackageGroupArn</a></code> | Validates whether a string is a valid ARN for the package-group resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidRepositoryArn">isValidRepositoryArn</a></code> | Validates whether a string is a valid ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.package">package</a></code> | Builds an ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.packageGroup">packageGroup</a></code> | Builds an ARN for the package-group resource. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.parsePackageArn">parsePackageArn</a></code> | Parses a package ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.parsePackageGroupArn">parsePackageGroupArn</a></code> | Parses a package-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.parseRepositoryArn">parseRepositoryArn</a></code> | Parses a repository ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeartifact.CodeArtifactResources.repository">repository</a></code> | Builds an ARN for the repository resource. |

---

##### `domain` <a name="domain" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.domain"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.domain(props: CodeArtifactDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeartifact.CodeArtifactDomainArnProps">CodeArtifactDomainArnProps</a>

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidDomainArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackageArn` <a name="isValidPackageArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidPackageArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.isValidPackageArn(arn: string)
```

Validates whether a string is a valid ARN for the package resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackageGroupArn` <a name="isValidPackageGroupArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidPackageGroupArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.isValidPackageGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the package-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidPackageGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRepositoryArn` <a name="isValidRepositoryArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidRepositoryArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.isValidRepositoryArn(arn: string)
```

Validates whether a string is a valid ARN for the repository resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.isValidRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `package` <a name="package" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.package"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.package(props: CodeArtifactPackageArnProps)
```

Builds an ARN for the package resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.package.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageArnProps">CodeArtifactPackageArnProps</a>

---

##### `packageGroup` <a name="packageGroup" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.packageGroup"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.packageGroup(props: CodeArtifactPackageGroupArnProps)
```

Builds an ARN for the package-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.packageGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeartifact.CodeArtifactPackageGroupArnProps">CodeArtifactPackageGroupArnProps</a>

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parseDomainArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackageArn` <a name="parsePackageArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parsePackageArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.parsePackageArn(arn: string)
```

Parses a package ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parsePackageArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackageGroupArn` <a name="parsePackageGroupArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parsePackageGroupArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.parsePackageGroupArn(arn: string)
```

Parses a package-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parsePackageGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryArn` <a name="parseRepositoryArn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parseRepositoryArn"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.parseRepositoryArn(arn: string)
```

Parses a repository ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.parseRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `repository` <a name="repository" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.repository"></a>

```typescript
import { codeartifact } from '@cdk_utils/iam'

codeartifact.CodeArtifactResources.repository(props: CodeArtifactRepositoryArnProps)
```

Builds an ARN for the repository resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeartifact.CodeArtifactResources.repository.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeartifact.CodeArtifactRepositoryArnProps">CodeArtifactRepositoryArnProps</a>

---




