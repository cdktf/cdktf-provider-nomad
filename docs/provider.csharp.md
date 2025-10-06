# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-nomad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadProvider <a name="NomadProvider" id="@cdktf/provider-nomad.provider.NomadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs nomad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NomadProvider(Construct Scope, string Id, NomadProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig">NomadProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderConfig">NomadProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAuthJwt">ResetAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaPem">ResetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertFile">ResetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertPem">ResetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth">ResetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars">ResetIgnoreEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile">ResetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem">ResetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify">ResetSkipVerify</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.provider.NomadProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.provider.NomadProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.provider.NomadProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-nomad.provider.NomadProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuthJwt` <a name="ResetAuthJwt" id="@cdktf/provider-nomad.provider.NomadProvider.resetAuthJwt"></a>

```csharp
private void ResetAuthJwt()
```

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaFile"></a>

```csharp
private void ResetCaFile()
```

##### `ResetCaPem` <a name="ResetCaPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaPem"></a>

```csharp
private void ResetCaPem()
```

##### `ResetCertFile` <a name="ResetCertFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertFile"></a>

```csharp
private void ResetCertFile()
```

##### `ResetCertPem` <a name="ResetCertPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertPem"></a>

```csharp
private void ResetCertPem()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-nomad.provider.NomadProvider.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetHttpAuth` <a name="ResetHttpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth"></a>

```csharp
private void ResetHttpAuth()
```

##### `ResetIgnoreEnvVars` <a name="ResetIgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars"></a>

```csharp
private void ResetIgnoreEnvVars()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile"></a>

```csharp
private void ResetKeyFile()
```

##### `ResetKeyPem` <a name="ResetKeyPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem"></a>

```csharp
private void ResetKeyPem()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-nomad.provider.NomadProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktf/provider-nomad.provider.NomadProvider.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetSkipVerify` <a name="ResetSkipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify"></a>

```csharp
private void ResetSkipVerify()
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

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

NomadProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

NomadProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

NomadProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

NomadProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NomadProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NomadProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NomadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NomadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.authJwtInput">AuthJwtInput</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput">CaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput">CaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput">CertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput">CertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headersInput">HeadersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput">HttpAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput">IgnoreEnvVarsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|HashiCorp.Cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput">KeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput">KeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput">SkipVerifyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.authJwt">AuthJwt</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFile">CaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPem">CaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFile">CertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPem">CertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headers">Headers</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth">HttpAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars">IgnoreEnvVars</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|HashiCorp.Cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFile">KeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPem">KeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify">SkipVerify</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.provider.NomadProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.provider.NomadProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-nomad.provider.NomadProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuthJwtInput`<sup>Optional</sup> <a name="AuthJwtInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.authJwtInput"></a>

```csharp
public NomadProviderAuthJwt AuthJwtInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput"></a>

```csharp
public string CaFileInput { get; }
```

- *Type:* string

---

##### `CaPemInput`<sup>Optional</sup> <a name="CaPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput"></a>

```csharp
public string CaPemInput { get; }
```

- *Type:* string

---

##### `CertFileInput`<sup>Optional</sup> <a name="CertFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput"></a>

```csharp
public string CertFileInput { get; }
```

- *Type:* string

---

##### `CertPemInput`<sup>Optional</sup> <a name="CertPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput"></a>

```csharp
public string CertPemInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.headersInput"></a>

```csharp
public IResolvable|NomadProviderHeaders[] HeadersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]

---

##### `HttpAuthInput`<sup>Optional</sup> <a name="HttpAuthInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput"></a>

```csharp
public string HttpAuthInput { get; }
```

- *Type:* string

---

##### `IgnoreEnvVarsInput`<sup>Optional</sup> <a name="IgnoreEnvVarsInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> IgnoreEnvVarsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|HashiCorp.Cdktf.IResolvable>

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput"></a>

```csharp
public string KeyFileInput { get; }
```

- *Type:* string

---

##### `KeyPemInput`<sup>Optional</sup> <a name="KeyPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput"></a>

```csharp
public string KeyPemInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SkipVerifyInput`<sup>Optional</sup> <a name="SkipVerifyInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput"></a>

```csharp
public bool|IResolvable SkipVerifyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-nomad.provider.NomadProvider.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AuthJwt`<sup>Optional</sup> <a name="AuthJwt" id="@cdktf/provider-nomad.provider.NomadProvider.property.authJwt"></a>

```csharp
public NomadProviderAuthJwt AuthJwt { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFile"></a>

```csharp
public string CaFile { get; }
```

- *Type:* string

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPem"></a>

```csharp
public string CaPem { get; }
```

- *Type:* string

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFile"></a>

```csharp
public string CertFile { get; }
```

- *Type:* string

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPem"></a>

```csharp
public string CertPem { get; }
```

- *Type:* string

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-nomad.provider.NomadProvider.property.headers"></a>

```csharp
public IResolvable|NomadProviderHeaders[] Headers { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth"></a>

```csharp
public string HttpAuth { get; }
```

- *Type:* string

---

##### `IgnoreEnvVars`<sup>Optional</sup> <a name="IgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> IgnoreEnvVars { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|HashiCorp.Cdktf.IResolvable>

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFile"></a>

```csharp
public string KeyFile { get; }
```

- *Type:* string

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPem"></a>

```csharp
public string KeyPem { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-nomad.provider.NomadProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify"></a>

```csharp
public bool|IResolvable SkipVerify { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NomadProviderAuthJwt <a name="NomadProviderAuthJwt" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NomadProviderAuthJwt {
    string AuthMethod,
    string LoginToken
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.authMethod">AuthMethod</a></code> | <code>string</code> | The name of the auth method to use for login. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.loginToken">LoginToken</a></code> | <code>string</code> | The externally issued authentication token to be exchanged for a Nomad ACL Token. |

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The name of the auth method to use for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#auth_method NomadProvider#auth_method}

---

##### `LoginToken`<sup>Required</sup> <a name="LoginToken" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.loginToken"></a>

```csharp
public string LoginToken { get; set; }
```

- *Type:* string

The externally issued authentication token to be exchanged for a Nomad ACL Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#login_token NomadProvider#login_token}

---

### NomadProviderConfig <a name="NomadProviderConfig" id="@cdktf/provider-nomad.provider.NomadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NomadProviderConfig {
    string Address,
    string Alias = null,
    NomadProviderAuthJwt AuthJwt = null,
    string CaFile = null,
    string CaPem = null,
    string CertFile = null,
    string CertPem = null,
    IResolvable|NomadProviderHeaders[] Headers = null,
    string HttpAuth = null,
    System.Collections.Generic.IDictionary<string, bool|IResolvable> IgnoreEnvVars = null,
    string KeyFile = null,
    string KeyPem = null,
    string Region = null,
    string SecretId = null,
    bool|IResolvable SkipVerify = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.address">Address</a></code> | <code>string</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.authJwt">AuthJwt</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile">CaFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem">CaPem</a></code> | <code>string</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile">CertFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem">CertPem</a></code> | <code>string</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers">Headers</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth">HttpAuth</a></code> | <code>string</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars">IgnoreEnvVars</a></code> | <code>System.Collections.Generic.IDictionary<string, bool\|HashiCorp.Cdktf.IResolvable></code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile">KeyFile</a></code> | <code>string</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem">KeyPem</a></code> | <code>string</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.region">Region</a></code> | <code>string</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId">SecretId</a></code> | <code>string</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify">SkipVerify</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Skip TLS verification on client side. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#address NomadProvider#address}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#alias NomadProvider#alias}

---

##### `AuthJwt`<sup>Optional</sup> <a name="AuthJwt" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.authJwt"></a>

```csharp
public NomadProviderAuthJwt AuthJwt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#auth_jwt NomadProvider#auth_jwt}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile"></a>

```csharp
public string CaFile { get; set; }
```

- *Type:* string

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#ca_file NomadProvider#ca_file}

---

##### `CaPem`<sup>Optional</sup> <a name="CaPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem"></a>

```csharp
public string CaPem { get; set; }
```

- *Type:* string

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#ca_pem NomadProvider#ca_pem}

---

##### `CertFile`<sup>Optional</sup> <a name="CertFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile"></a>

```csharp
public string CertFile { get; set; }
```

- *Type:* string

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#cert_file NomadProvider#cert_file}

---

##### `CertPem`<sup>Optional</sup> <a name="CertPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem"></a>

```csharp
public string CertPem { get; set; }
```

- *Type:* string

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#cert_pem NomadProvider#cert_pem}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers"></a>

```csharp
public IResolvable|NomadProviderHeaders[] Headers { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#headers NomadProvider#headers}

---

##### `HttpAuth`<sup>Optional</sup> <a name="HttpAuth" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth"></a>

```csharp
public string HttpAuth { get; set; }
```

- *Type:* string

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#http_auth NomadProvider#http_auth}

---

##### `IgnoreEnvVars`<sup>Optional</sup> <a name="IgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars"></a>

```csharp
public System.Collections.Generic.IDictionary<string, bool|IResolvable> IgnoreEnvVars { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, bool|HashiCorp.Cdktf.IResolvable>

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile"></a>

```csharp
public string KeyFile { get; set; }
```

- *Type:* string

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#key_file NomadProvider#key_file}

---

##### `KeyPem`<sup>Optional</sup> <a name="KeyPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem"></a>

```csharp
public string KeyPem { get; set; }
```

- *Type:* string

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#key_pem NomadProvider#key_pem}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#region NomadProvider#region}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#secret_id NomadProvider#secret_id}

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify"></a>

```csharp
public bool|IResolvable SkipVerify { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Skip TLS verification on client side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#skip_verify NomadProvider#skip_verify}

---

### NomadProviderHeaders <a name="NomadProviderHeaders" id="@cdktf/provider-nomad.provider.NomadProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NomadProviderHeaders {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name">Name</a></code> | <code>string</code> | The header name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value">Value</a></code> | <code>string</code> | The header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#name NomadProvider#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#value NomadProvider#value}

---



