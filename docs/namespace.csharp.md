# `namespace` Submodule <a name="`namespace` Submodule" id="@cdktf/provider-nomad.namespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Namespace <a name="Namespace" id="@cdktf/provider-nomad.namespace.Namespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace nomad_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.Namespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new Namespace(Construct Scope, string Id, NamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig">NamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceConfig">NamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig">PutNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetNodePoolConfig">ResetNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetQuota">ResetQuota</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.namespace.Namespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.namespace.Namespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.namespace.Namespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.namespace.Namespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.namespace.Namespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.namespace.Namespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.namespace.Namespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.namespace.Namespace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.namespace.Namespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.namespace.Namespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.namespace.Namespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.namespace.Namespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.namespace.Namespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.namespace.Namespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.namespace.Namespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-nomad.namespace.Namespace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.namespace.Namespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.namespace.Namespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities"></a>

```csharp
private void PutCapabilities(NamespaceCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `PutNodePoolConfig` <a name="PutNodePoolConfig" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig"></a>

```csharp
private void PutNodePoolConfig(NamespaceNodePoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktf/provider-nomad.namespace.Namespace.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-nomad.namespace.Namespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.namespace.Namespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-nomad.namespace.Namespace.resetMeta"></a>

```csharp
private void ResetMeta()
```

##### `ResetNodePoolConfig` <a name="ResetNodePoolConfig" id="@cdktf/provider-nomad.namespace.Namespace.resetNodePoolConfig"></a>

```csharp
private void ResetNodePoolConfig()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-nomad.namespace.Namespace.resetQuota"></a>

```csharp
private void ResetQuota()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Namespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Namespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Namespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Namespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Namespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Namespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Namespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference">NamespaceNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput">CapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.metaInput">MetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfigInput">NodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quotaInput">QuotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quota">Quota</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.namespace.Namespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.namespace.Namespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.namespace.Namespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.namespace.Namespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.namespace.Namespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.namespace.Namespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.namespace.Namespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.namespace.Namespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.namespace.Namespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilities"></a>

```csharp
public NamespaceCapabilitiesOutputReference Capabilities { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a>

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfig"></a>

```csharp
public NamespaceNodePoolConfigOutputReference NodePoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference">NamespaceNodePoolConfigOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput"></a>

```csharp
public NamespaceCapabilities CapabilitiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.namespace.Namespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-nomad.namespace.Namespace.property.metaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.namespace.Namespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodePoolConfigInput`<sup>Optional</sup> <a name="NodePoolConfigInput" id="@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfigInput"></a>

```csharp
public NamespaceNodePoolConfig NodePoolConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-nomad.namespace.Namespace.property.quotaInput"></a>

```csharp
public string QuotaInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-nomad.namespace.Namespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.namespace.Namespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-nomad.namespace.Namespace.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.namespace.Namespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-nomad.namespace.Namespace.property.quota"></a>

```csharp
public string Quota { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NamespaceCapabilities <a name="NamespaceCapabilities" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NamespaceCapabilities {
    string[] DisabledTaskDrivers = null,
    string[] EnabledTaskDrivers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers">DisabledTaskDrivers</a></code> | <code>string[]</code> | Disabled task drivers for the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers">EnabledTaskDrivers</a></code> | <code>string[]</code> | Enabled task drivers for the namespace. |

---

##### `DisabledTaskDrivers`<sup>Optional</sup> <a name="DisabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers"></a>

```csharp
public string[] DisabledTaskDrivers { get; set; }
```

- *Type:* string[]

Disabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#disabled_task_drivers Namespace#disabled_task_drivers}

---

##### `EnabledTaskDrivers`<sup>Optional</sup> <a name="EnabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers"></a>

```csharp
public string[] EnabledTaskDrivers { get; set; }
```

- *Type:* string[]

Enabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#enabled_task_drivers Namespace#enabled_task_drivers}

---

### NamespaceConfig <a name="NamespaceConfig" id="@cdktf/provider-nomad.namespace.NamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    NamespaceCapabilities Capabilities = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Meta = null,
    NamespaceNodePoolConfig NodePoolConfig = null,
    string Quota = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.name">Name</a></code> | <code>string</code> | Unique name for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.description">Description</a></code> | <code>string</code> | Description for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata associated with the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota">Quota</a></code> | <code>string</code> | Quota to set for this namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#name Namespace#name}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities"></a>

```csharp
public NamespaceCapabilities Capabilities { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#capabilities Namespace#capabilities}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#description Namespace#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata associated with the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#meta Namespace#meta}

---

##### `NodePoolConfig`<sup>Optional</sup> <a name="NodePoolConfig" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.nodePoolConfig"></a>

```csharp
public NamespaceNodePoolConfig NodePoolConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#node_pool_config Namespace#node_pool_config}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota"></a>

```csharp
public string Quota { get; set; }
```

- *Type:* string

Quota to set for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#quota Namespace#quota}

---

### NamespaceNodePoolConfig <a name="NamespaceNodePoolConfig" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NamespaceNodePoolConfig {
    string[] Allowed = null,
    string Default = null,
    string[] Denied = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.allowed">Allowed</a></code> | <code>string[]</code> | The list of node pools allowed to be used in this namespace. Cannot be used with denied. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.default">Default</a></code> | <code>string</code> | The node pool to use when none are specified in the job. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.denied">Denied</a></code> | <code>string[]</code> | The list of node pools not allowed to be used in this namespace. Cannot be used with allowed. |

---

##### `Allowed`<sup>Optional</sup> <a name="Allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.allowed"></a>

```csharp
public string[] Allowed { get; set; }
```

- *Type:* string[]

The list of node pools allowed to be used in this namespace. Cannot be used with denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#allowed Namespace#allowed}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

The node pool to use when none are specified in the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#default Namespace#default}

---

##### `Denied`<sup>Optional</sup> <a name="Denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.denied"></a>

```csharp
public string[] Denied { get; set; }
```

- *Type:* string[]

The list of node pools not allowed to be used in this namespace. Cannot be used with allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/namespace#denied Namespace#denied}

---

## Classes <a name="Classes" id="Classes"></a>

### NamespaceCapabilitiesOutputReference <a name="NamespaceCapabilitiesOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NamespaceCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers">ResetDisabledTaskDrivers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers">ResetEnabledTaskDrivers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledTaskDrivers` <a name="ResetDisabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers"></a>

```csharp
private void ResetDisabledTaskDrivers()
```

##### `ResetEnabledTaskDrivers` <a name="ResetEnabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers"></a>

```csharp
private void ResetEnabledTaskDrivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput">DisabledTaskDriversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput">EnabledTaskDriversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers">DisabledTaskDrivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers">EnabledTaskDrivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledTaskDriversInput`<sup>Optional</sup> <a name="DisabledTaskDriversInput" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput"></a>

```csharp
public string[] DisabledTaskDriversInput { get; }
```

- *Type:* string[]

---

##### `EnabledTaskDriversInput`<sup>Optional</sup> <a name="EnabledTaskDriversInput" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput"></a>

```csharp
public string[] EnabledTaskDriversInput { get; }
```

- *Type:* string[]

---

##### `DisabledTaskDrivers`<sup>Required</sup> <a name="DisabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers"></a>

```csharp
public string[] DisabledTaskDrivers { get; }
```

- *Type:* string[]

---

##### `EnabledTaskDrivers`<sup>Required</sup> <a name="EnabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers"></a>

```csharp
public string[] EnabledTaskDrivers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public NamespaceCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---


### NamespaceNodePoolConfigOutputReference <a name="NamespaceNodePoolConfigOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new NamespaceNodePoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetAllowed">ResetAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDenied">ResetDenied</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowed` <a name="ResetAllowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetAllowed"></a>

```csharp
private void ResetAllowed()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDenied` <a name="ResetDenied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDenied"></a>

```csharp
private void ResetDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowedInput">AllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.deniedInput">DeniedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowed">Allowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.denied">Denied</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInput`<sup>Optional</sup> <a name="AllowedInput" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowedInput"></a>

```csharp
public string[] AllowedInput { get; }
```

- *Type:* string[]

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeniedInput`<sup>Optional</sup> <a name="DeniedInput" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.deniedInput"></a>

```csharp
public string[] DeniedInput { get; }
```

- *Type:* string[]

---

##### `Allowed`<sup>Required</sup> <a name="Allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowed"></a>

```csharp
public string[] Allowed { get; }
```

- *Type:* string[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Denied`<sup>Required</sup> <a name="Denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.denied"></a>

```csharp
public string[] Denied { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.internalValue"></a>

```csharp
public NamespaceNodePoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---



