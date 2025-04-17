# `dynamicHostVolumeRegistration` Submodule <a name="`dynamicHostVolumeRegistration` Submodule" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolumeRegistration <a name="DynamicHostVolumeRegistration" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration nomad_dynamic_host_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistration(Construct Scope, string Id, DynamicHostVolumeRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig">DynamicHostVolumeRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig">DynamicHostVolumeRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability">PutCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability"></a>

```csharp
private void PutCapability(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* object

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters"></a>

```csharp
private void ResetParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolumeRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolumeRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolumeRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

DynamicHostVolumeRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamicHostVolumeRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamicHostVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes">CapacityBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes">CapacityMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes">CapacityMinBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint">Constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool">NodePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId">PluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput">CapabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput">CapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput">HostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput">NodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity">Capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath">HostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability"></a>

```csharp
public DynamicHostVolumeRegistrationCapabilityList Capability { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a>

---

##### `CapacityBytes`<sup>Required</sup> <a name="CapacityBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes"></a>

```csharp
public double CapacityBytes { get; }
```

- *Type:* double

---

##### `CapacityMaxBytes`<sup>Required</sup> <a name="CapacityMaxBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes"></a>

```csharp
public double CapacityMaxBytes { get; }
```

- *Type:* double

---

##### `CapacityMinBytes`<sup>Required</sup> <a name="CapacityMinBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes"></a>

```csharp
public double CapacityMinBytes { get; }
```

- *Type:* double

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint"></a>

```csharp
public DynamicHostVolumeRegistrationConstraintList Constraint { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool"></a>

```csharp
public string NodePool { get; }
```

- *Type:* string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId"></a>

```csharp
public string PluginId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput"></a>

```csharp
public object CapabilityInput { get; }
```

- *Type:* object

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput"></a>

```csharp
public string CapacityInput { get; }
```

- *Type:* string

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput"></a>

```csharp
public string HostPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput"></a>

```csharp
public string NodeIdInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity"></a>

```csharp
public string Capacity { get; }
```

- *Type:* string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath"></a>

```csharp
public string HostPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeRegistrationCapability <a name="DynamicHostVolumeRegistrationCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationCapability {
    string AccessMode,
    string AttachmentMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode">AccessMode</a></code> | <code>string</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | An attachment mode available for the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#access_mode DynamicHostVolumeRegistration#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; set; }
```

- *Type:* string

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#attachment_mode DynamicHostVolumeRegistration#attachment_mode}

---

### DynamicHostVolumeRegistrationConfig <a name="DynamicHostVolumeRegistrationConfig" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Capability,
    string HostPath,
    string Name,
    string NodeId,
    string Capacity = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability">Capability</a></code> | <code>object</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath">HostPath</a></code> | <code>string</code> | Host path. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name">Name</a></code> | <code>string</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId">NodeId</a></code> | <code>string</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity">Capacity</a></code> | <code>string</code> | Provisioned capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Parameters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability"></a>

```csharp
public object Capability { get; set; }
```

- *Type:* object

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#capability DynamicHostVolumeRegistration#capability}

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath"></a>

```csharp
public string HostPath { get; set; }
```

- *Type:* string

Host path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#host_path DynamicHostVolumeRegistration#host_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#name DynamicHostVolumeRegistration#name}

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId"></a>

```csharp
public string NodeId { get; set; }
```

- *Type:* string

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#node_id DynamicHostVolumeRegistration#node_id}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity"></a>

```csharp
public string Capacity { get; set; }
```

- *Type:* string

Provisioned capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#capacity DynamicHostVolumeRegistration#capacity}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#namespace DynamicHostVolumeRegistration#namespace}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#parameters DynamicHostVolumeRegistration#parameters}

---

### DynamicHostVolumeRegistrationConstraint <a name="DynamicHostVolumeRegistrationConstraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationConstraint {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeRegistrationCapabilityList <a name="DynamicHostVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationCapabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get"></a>

```csharp
private DynamicHostVolumeRegistrationCapabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamicHostVolumeRegistrationCapabilityOutputReference <a name="DynamicHostVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationCapabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```csharp
public string AttachmentModeInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamicHostVolumeRegistrationConstraintList <a name="DynamicHostVolumeRegistrationConstraintList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationConstraintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get"></a>

```csharp
private DynamicHostVolumeRegistrationConstraintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DynamicHostVolumeRegistrationConstraintOutputReference <a name="DynamicHostVolumeRegistrationConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new DynamicHostVolumeRegistrationConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue"></a>

```csharp
public DynamicHostVolumeRegistrationConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a>

---



