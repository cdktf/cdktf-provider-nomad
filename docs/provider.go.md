# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-nomad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadProvider <a name="NomadProvider" id="@cdktf/provider-nomad.provider.NomadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs nomad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

provider.NewNomadProvider(scope Construct, id *string, config NomadProviderConfig) NomadProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig">NomadProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderConfig">NomadProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaPem">ResetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertFile">ResetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertPem">ResetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetConsulToken">ResetConsulToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth">ResetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars">ResetIgnoreEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile">ResetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem">ResetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify">ResetSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetVaultToken">ResetVaultToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.provider.NomadProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.provider.NomadProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-nomad.provider.NomadProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaFile"></a>

```go
func ResetCaFile()
```

##### `ResetCaPem` <a name="ResetCaPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaPem"></a>

```go
func ResetCaPem()
```

##### `ResetCertFile` <a name="ResetCertFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertFile"></a>

```go
func ResetCertFile()
```

##### `ResetCertPem` <a name="ResetCertPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertPem"></a>

```go
func ResetCertPem()
```

##### `ResetConsulToken` <a name="ResetConsulToken" id="@cdktf/provider-nomad.provider.NomadProvider.resetConsulToken"></a>

```go
func ResetConsulToken()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-nomad.provider.NomadProvider.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHttpAuth` <a name="ResetHttpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth"></a>

```go
func ResetHttpAuth()
```

##### `ResetIgnoreEnvVars` <a name="ResetIgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars"></a>

```go
func ResetIgnoreEnvVars()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile"></a>

```go
func ResetKeyFile()
```

##### `ResetKeyPem` <a name="ResetKeyPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem"></a>

```go
func ResetKeyPem()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-nomad.provider.NomadProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktf/provider-nomad.provider.NomadProvider.resetSecretId"></a>

```go
func ResetSecretId()
```

##### `ResetSkipVerify` <a name="ResetSkipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify"></a>

```go
func ResetSkipVerify()
```

##### `ResetVaultToken` <a name="ResetVaultToken" id="@cdktf/provider-nomad.provider.NomadProvider.resetVaultToken"></a>

```go
func ResetVaultToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NomadProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

provider.NomadProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

provider.NomadProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

provider.NomadProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

provider.NomadProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NomadProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NomadProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NomadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NomadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput">CaFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput">CaPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput">CertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput">CertPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.consulTokenInput">ConsulTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput">HttpAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput">IgnoreEnvVarsInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput">KeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput">KeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput">SkipVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.vaultTokenInput">VaultTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFile">CaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPem">CaPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFile">CertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPem">CertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.consulToken">ConsulToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headers">Headers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth">HttpAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars">IgnoreEnvVars</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFile">KeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPem">KeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify">SkipVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.vaultToken">VaultToken</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.provider.NomadProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.provider.NomadProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-nomad.provider.NomadProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput"></a>

```go
func CaFileInput() *string
```

- *Type:* *string

---

##### `CaPemInput`<sup>Optional</sup> <a name="CaPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput"></a>

```go
func CaPemInput() *string
```

- *Type:* *string

---

##### `CertFileInput`<sup>Optional</sup> <a name="CertFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput"></a>

```go
func CertFileInput() *string
```

- *Type:* *string

---

##### `CertPemInput`<sup>Optional</sup> <a name="CertPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput"></a>

```go
func CertPemInput() *string
```

- *Type:* *string

---

##### `ConsulTokenInput`<sup>Optional</sup> <a name="ConsulTokenInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.consulTokenInput"></a>

```go
func ConsulTokenInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `HttpAuthInput`<sup>Optional</sup> <a name="HttpAuthInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput"></a>

```go
func HttpAuthInput() *string
```

- *Type:* *string

---

##### `IgnoreEnvVarsInput`<sup>Optional</sup> <a name="IgnoreEnvVarsInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput"></a>

```go
func IgnoreEnvVarsInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput"></a>

```go
func KeyFileInput() *string
```

- *Type:* *string

---

##### `KeyPemInput`<sup>Optional</sup> <a name="KeyPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput"></a>

```go
func KeyPemInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SkipVerifyInput`<sup>Optional</sup> <a name="SkipVerifyInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput"></a>

```go
func SkipVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `VaultTokenInput`<sup>Optional</sup> <a name="VaultTokenInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.vaultTokenInput"></a>

```go
func VaultTokenInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-nomad.provider.NomadProvider.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFile"></a>

```go
func CaFile() *string
```

- *Type:* *string

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPem"></a>

```go
func CaPem() *string
```

- *Type:* *string

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFile"></a>

```go
func CertFile() *string
```

- *Type:* *string

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPem"></a>

```go
func CertPem() *string
```

- *Type:* *string

---

##### `ConsulToken`<sup>Optional</sup> <a name="ConsulToken" id="@cdktf/provider-nomad.provider.NomadProvider.property.consulToken"></a>

```go
func ConsulToken() *string
```

- *Type:* *string

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-nomad.provider.NomadProvider.property.headers"></a>

```go
func Headers() interface{}
```

- *Type:* interface{}

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth"></a>

```go
func HttpAuth() *string
```

- *Type:* *string

---

##### `IgnoreEnvVars`<sup>Optional</sup> <a name="IgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars"></a>

```go
func IgnoreEnvVars() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFile"></a>

```go
func KeyFile() *string
```

- *Type:* *string

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPem"></a>

```go
func KeyPem() *string
```

- *Type:* *string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-nomad.provider.NomadProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify"></a>

```go
func SkipVerify() interface{}
```

- *Type:* interface{}

---

##### `VaultToken`<sup>Optional</sup> <a name="VaultToken" id="@cdktf/provider-nomad.provider.NomadProvider.property.vaultToken"></a>

```go
func VaultToken() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NomadProviderConfig <a name="NomadProviderConfig" id="@cdktf/provider-nomad.provider.NomadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

&provider.NomadProviderConfig {
	Address: *string,
	Alias: *string,
	CaFile: *string,
	CaPem: *string,
	CertFile: *string,
	CertPem: *string,
	ConsulToken: *string,
	Headers: interface{},
	HttpAuth: *string,
	IgnoreEnvVars: *map[string]interface{},
	KeyFile: *string,
	KeyPem: *string,
	Region: *string,
	SecretId: *string,
	SkipVerify: interface{},
	VaultToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.address">Address</a></code> | <code>*string</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile">CaFile</a></code> | <code>*string</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem">CaPem</a></code> | <code>*string</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile">CertFile</a></code> | <code>*string</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem">CertPem</a></code> | <code>*string</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.consulToken">ConsulToken</a></code> | <code>*string</code> | Consul token to validate Consul Connect Service Identity policies specified in the job file. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth">HttpAuth</a></code> | <code>*string</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars">IgnoreEnvVars</a></code> | <code>*map[string]interface{}</code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile">KeyFile</a></code> | <code>*string</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem">KeyPem</a></code> | <code>*string</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.region">Region</a></code> | <code>*string</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId">SecretId</a></code> | <code>*string</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify">SkipVerify</a></code> | <code>interface{}</code> | Skip TLS verification on client side. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.vaultToken">VaultToken</a></code> | <code>*string</code> | Vault token if policies are specified in the job file. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#address NomadProvider#address}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#alias NomadProvider#alias}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile"></a>

```go
CaFile *string
```

- *Type:* *string

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#ca_file NomadProvider#ca_file}

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem"></a>

```go
CaPem *string
```

- *Type:* *string

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#ca_pem NomadProvider#ca_pem}

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile"></a>

```go
CertFile *string
```

- *Type:* *string

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#cert_file NomadProvider#cert_file}

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem"></a>

```go
CertPem *string
```

- *Type:* *string

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#cert_pem NomadProvider#cert_pem}

---

##### `ConsulToken`<sup>Optional</sup> <a name="ConsulToken" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.consulToken"></a>

```go
ConsulToken *string
```

- *Type:* *string

Consul token to validate Consul Connect Service Identity policies specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#consul_token NomadProvider#consul_token}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#headers NomadProvider#headers}

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth"></a>

```go
HttpAuth *string
```

- *Type:* *string

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#http_auth NomadProvider#http_auth}

---

##### `IgnoreEnvVars`<sup>Optional</sup> <a name="IgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars"></a>

```go
IgnoreEnvVars *map[string]interface{}
```

- *Type:* *map[string]interface{}

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile"></a>

```go
KeyFile *string
```

- *Type:* *string

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#key_file NomadProvider#key_file}

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem"></a>

```go
KeyPem *string
```

- *Type:* *string

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#key_pem NomadProvider#key_pem}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#region NomadProvider#region}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#secret_id NomadProvider#secret_id}

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify"></a>

```go
SkipVerify interface{}
```

- *Type:* interface{}

Skip TLS verification on client side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#skip_verify NomadProvider#skip_verify}

---

##### `VaultToken`<sup>Optional</sup> <a name="VaultToken" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.vaultToken"></a>

```go
VaultToken *string
```

- *Type:* *string

Vault token if policies are specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#vault_token NomadProvider#vault_token}

---

### NomadProviderHeaders <a name="NomadProviderHeaders" id="@cdktf/provider-nomad.provider.NomadProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/provider"

&provider.NomadProviderHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name">Name</a></code> | <code>*string</code> | The header name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value">Value</a></code> | <code>*string</code> | The header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#name NomadProvider#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs#value NomadProvider#value}

---



