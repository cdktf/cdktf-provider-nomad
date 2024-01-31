# `dataNomadNamespace` Submodule <a name="`dataNomadNamespace` Submodule" id="@cdktf/provider-nomad.dataNomadNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadNamespace <a name="DataNomadNamespace" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/namespace nomad_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespace(Construct Scope, string Id, DataNomadNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig">DataNomadNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig">DataNomadNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DataNomadNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DataNomadNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DataNomadNamespace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DataNomadNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataNomadNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNomadNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNomadNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList">DataNomadNamespaceCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.meta">Meta</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList">DataNomadNamespaceNodePoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.quota">Quota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.capabilities"></a>

```csharp
public DataNomadNamespaceCapabilitiesList Capabilities { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList">DataNomadNamespaceCapabilitiesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.meta"></a>

```csharp
public StringMap Meta { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.nodePoolConfig"></a>

```csharp
public DataNomadNamespaceNodePoolConfigList NodePoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList">DataNomadNamespaceNodePoolConfigList</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.quota"></a>

```csharp
public string Quota { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadNamespaceCapabilities <a name="DataNomadNamespaceCapabilities" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceCapabilities {

};
```


### DataNomadNamespaceConfig <a name="DataNomadNamespaceConfig" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/namespace#name DataNomadNamespace#name}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/namespace#id DataNomadNamespace#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/namespace#name DataNomadNamespace#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/namespace#id DataNomadNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNomadNamespaceNodePoolConfig <a name="DataNomadNamespaceNodePoolConfig" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceNodePoolConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataNomadNamespaceCapabilitiesList <a name="DataNomadNamespaceCapabilitiesList" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.get"></a>

```csharp
private DataNomadNamespaceCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataNomadNamespaceCapabilitiesOutputReference <a name="DataNomadNamespaceCapabilitiesOutputReference" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.disabledTaskDrivers">DisabledTaskDrivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.enabledTaskDrivers">EnabledTaskDrivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilities">DataNomadNamespaceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledTaskDrivers`<sup>Required</sup> <a name="DisabledTaskDrivers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.disabledTaskDrivers"></a>

```csharp
public string[] DisabledTaskDrivers { get; }
```

- *Type:* string[]

---

##### `EnabledTaskDrivers`<sup>Required</sup> <a name="EnabledTaskDrivers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.enabledTaskDrivers"></a>

```csharp
public string[] EnabledTaskDrivers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataNomadNamespaceCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceCapabilities">DataNomadNamespaceCapabilities</a>

---


### DataNomadNamespaceNodePoolConfigList <a name="DataNomadNamespaceNodePoolConfigList" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceNodePoolConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.get"></a>

```csharp
private DataNomadNamespaceNodePoolConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataNomadNamespaceNodePoolConfigOutputReference <a name="DataNomadNamespaceNodePoolConfigOutputReference" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DataNomadNamespaceNodePoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.allowed">Allowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.denied">Denied</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfig">DataNomadNamespaceNodePoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allowed`<sup>Required</sup> <a name="Allowed" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.allowed"></a>

```csharp
public string[] Allowed { get; }
```

- *Type:* string[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Denied`<sup>Required</sup> <a name="Denied" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.denied"></a>

```csharp
public string[] Denied { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfigOutputReference.property.internalValue"></a>

```csharp
public DataNomadNamespaceNodePoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNamespace.DataNomadNamespaceNodePoolConfig">DataNomadNamespaceNodePoolConfig</a>

---



