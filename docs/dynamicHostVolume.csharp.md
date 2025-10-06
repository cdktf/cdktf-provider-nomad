# `dynamicHostVolume` Submodule <a name="`dynamicHostVolume` Submodule" id="@cdktf/provider-nomad.dynamicHostVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolume <a name="DynamicHostVolume" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume nomad_dynamic_host_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolume(Construct Scope, string Id, DynamicHostVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig">DynamicHostVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig">DynamicHostVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability">PutCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint">PutConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax">ResetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin">ResetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId">ResetNodeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool">ResetNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability"></a>

```csharp
private void PutCapability(IResolvable|DynamicHostVolumeCapability[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

---

##### `PutConstraint` <a name="PutConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint"></a>

```csharp
private void PutConstraint(IResolvable|DynamicHostVolumeConstraint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

---

##### `ResetCapacityMax` <a name="ResetCapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax"></a>

```csharp
private void ResetCapacityMax()
```

##### `ResetCapacityMin` <a name="ResetCapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin"></a>

```csharp
private void ResetCapacityMin()
```

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint"></a>

```csharp
private void ResetConstraint()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNodeId` <a name="ResetNodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId"></a>

```csharp
private void ResetNodeId()
```

##### `ResetNodePool` <a name="ResetNodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool"></a>

```csharp
private void ResetNodePool()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters"></a>

```csharp
private void ResetParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamicHostVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamicHostVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity">Capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes">CapacityBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes">CapacityMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes">CapacityMinBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint">Constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath">HostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput">CapabilityInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput">CapacityMaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput">CapacityMinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput">ConstraintInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput">NodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput">NodePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput">PluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax">CapacityMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin">CapacityMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool">NodePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId">PluginId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability"></a>

```csharp
public DynamicHostVolumeCapabilityList Capability { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity"></a>

```csharp
public string Capacity { get; }
```

- *Type:* string

---

##### `CapacityBytes`<sup>Required</sup> <a name="CapacityBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes"></a>

```csharp
public double CapacityBytes { get; }
```

- *Type:* double

---

##### `CapacityMaxBytes`<sup>Required</sup> <a name="CapacityMaxBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes"></a>

```csharp
public double CapacityMaxBytes { get; }
```

- *Type:* double

---

##### `CapacityMinBytes`<sup>Required</sup> <a name="CapacityMinBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes"></a>

```csharp
public double CapacityMinBytes { get; }
```

- *Type:* double

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint"></a>

```csharp
public DynamicHostVolumeConstraintList Constraint { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a>

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath"></a>

```csharp
public string HostPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput"></a>

```csharp
public IResolvable|DynamicHostVolumeCapability[] CapabilityInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

---

##### `CapacityMaxInput`<sup>Optional</sup> <a name="CapacityMaxInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput"></a>

```csharp
public string CapacityMaxInput { get; }
```

- *Type:* string

---

##### `CapacityMinInput`<sup>Optional</sup> <a name="CapacityMinInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput"></a>

```csharp
public string CapacityMinInput { get; }
```

- *Type:* string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput"></a>

```csharp
public IResolvable|DynamicHostVolumeConstraint[] ConstraintInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput"></a>

```csharp
public string NodeIdInput { get; }
```

- *Type:* string

---

##### `NodePoolInput`<sup>Optional</sup> <a name="NodePoolInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput"></a>

```csharp
public string NodePoolInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput"></a>

```csharp
public string PluginIdInput { get; }
```

- *Type:* string

---

##### `CapacityMax`<sup>Required</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax"></a>

```csharp
public string CapacityMax { get; }
```

- *Type:* string

---

##### `CapacityMin`<sup>Required</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin"></a>

```csharp
public string CapacityMin { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool"></a>

```csharp
public string NodePool { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId"></a>

```csharp
public string PluginId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeCapability <a name="DynamicHostVolumeCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeCapability {
    string AccessMode,
    string AttachmentMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode">AccessMode</a></code> | <code>string</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | An attachment mode available for the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#access_mode DynamicHostVolume#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; set; }
```

- *Type:* string

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#attachment_mode DynamicHostVolume#attachment_mode}

---

### DynamicHostVolumeConfig <a name="DynamicHostVolumeConfig" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DynamicHostVolumeCapability[] Capability,
    string Name,
    string PluginId,
    string CapacityMax = null,
    string CapacityMin = null,
    IResolvable|DynamicHostVolumeConstraint[] Constraint = null,
    string Namespace = null,
    string NodeId = null,
    string NodePool = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability">Capability</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name">Name</a></code> | <code>string</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId">PluginId</a></code> | <code>string</code> | Plugin ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax">CapacityMax</a></code> | <code>string</code> | Requested maximum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin">CapacityMin</a></code> | <code>string</code> | Requested minimum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint">Constraint</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]</code> | constraint block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace">Namespace</a></code> | <code>string</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId">NodeId</a></code> | <code>string</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool">NodePool</a></code> | <code>string</code> | Node pool. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Parameters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability"></a>

```csharp
public IResolvable|DynamicHostVolumeCapability[] Capability { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capability DynamicHostVolume#capability}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#name DynamicHostVolume#name}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId"></a>

```csharp
public string PluginId { get; set; }
```

- *Type:* string

Plugin ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#plugin_id DynamicHostVolume#plugin_id}

---

##### `CapacityMax`<sup>Optional</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax"></a>

```csharp
public string CapacityMax { get; set; }
```

- *Type:* string

Requested maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capacity_max DynamicHostVolume#capacity_max}

---

##### `CapacityMin`<sup>Optional</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin"></a>

```csharp
public string CapacityMin { get; set; }
```

- *Type:* string

Requested minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capacity_min DynamicHostVolume#capacity_min}

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint"></a>

```csharp
public IResolvable|DynamicHostVolumeConstraint[] Constraint { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#constraint DynamicHostVolume#constraint}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#namespace DynamicHostVolume#namespace}

---

##### `NodeId`<sup>Optional</sup> <a name="NodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId"></a>

```csharp
public string NodeId { get; set; }
```

- *Type:* string

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#node_id DynamicHostVolume#node_id}

---

##### `NodePool`<sup>Optional</sup> <a name="NodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool"></a>

```csharp
public string NodePool { get; set; }
```

- *Type:* string

Node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#node_pool DynamicHostVolume#node_pool}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#parameters DynamicHostVolume#parameters}

---

### DynamicHostVolumeConstraint <a name="DynamicHostVolumeConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeConstraint {
    string Attribute,
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute">Attribute</a></code> | <code>string</code> | An attribute to check to constrain volume placement. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator">Operator</a></code> | <code>string</code> | The operator to use for comparison. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value">Value</a></code> | <code>string</code> | The requested value of the attribute. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

An attribute to check to constrain volume placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#attribute DynamicHostVolume#attribute}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#operator DynamicHostVolume#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The requested value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#value DynamicHostVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeCapabilityList <a name="DynamicHostVolumeCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeCapabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get"></a>

```csharp
private DynamicHostVolumeCapabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue"></a>

```csharp
public IResolvable|DynamicHostVolumeCapability[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

---


### DynamicHostVolumeCapabilityOutputReference <a name="DynamicHostVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeCapabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```csharp
public string AttachmentModeInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamicHostVolumeCapability InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>

---


### DynamicHostVolumeConstraintList <a name="DynamicHostVolumeConstraintList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeConstraintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get"></a>

```csharp
private DynamicHostVolumeConstraintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue"></a>

```csharp
public IResolvable|DynamicHostVolumeConstraint[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

---


### DynamicHostVolumeConstraintOutputReference <a name="DynamicHostVolumeConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamicHostVolumeConstraint InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>

---



