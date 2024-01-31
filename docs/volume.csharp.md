# `volume` Submodule <a name="`volume` Submodule" id="@cdktf/provider-nomad.volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Volume <a name="Volume" id="@cdktf/provider-nomad.volume.Volume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume nomad_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.Volume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new Volume(Construct Scope, string Id, VolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig">VolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeConfig">VolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.putCapability">PutCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.putTopologyRequest">PutTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetAccessMode">ResetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetAttachmentMode">ResetAttachmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetCapability">ResetCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetDeregisterOnDestroy">ResetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetTopologyRequest">ResetTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.Volume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.volume.Volume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.volume.Volume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.volume.Volume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.volume.Volume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.volume.Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.volume.Volume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.volume.Volume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.volume.Volume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.volume.Volume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.volume.Volume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.volume.Volume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.Volume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.Volume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.Volume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.Volume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.Volume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.Volume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.Volume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.volume.Volume.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.volume.Volume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.volume.Volume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.volume.Volume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.Volume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.volume.Volume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.volume.Volume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.volume.Volume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.volume.Volume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-nomad.volume.Volume.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.volume.Volume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.volume.Volume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.volume.Volume.putCapability"></a>

```csharp
private void PutCapability(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.volume.Volume.putCapability.parameter.value"></a>

- *Type:* object

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktf/provider-nomad.volume.Volume.putMountOptions"></a>

```csharp
private void PutMountOptions(VolumeMountOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.volume.Volume.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

---

##### `PutTopologyRequest` <a name="PutTopologyRequest" id="@cdktf/provider-nomad.volume.Volume.putTopologyRequest"></a>

```csharp
private void PutTopologyRequest(VolumeTopologyRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.volume.Volume.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

---

##### `ResetAccessMode` <a name="ResetAccessMode" id="@cdktf/provider-nomad.volume.Volume.resetAccessMode"></a>

```csharp
private void ResetAccessMode()
```

##### `ResetAttachmentMode` <a name="ResetAttachmentMode" id="@cdktf/provider-nomad.volume.Volume.resetAttachmentMode"></a>

```csharp
private void ResetAttachmentMode()
```

##### `ResetCapability` <a name="ResetCapability" id="@cdktf/provider-nomad.volume.Volume.resetCapability"></a>

```csharp
private void ResetCapability()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-nomad.volume.Volume.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetDeregisterOnDestroy` <a name="ResetDeregisterOnDestroy" id="@cdktf/provider-nomad.volume.Volume.resetDeregisterOnDestroy"></a>

```csharp
private void ResetDeregisterOnDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.volume.Volume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-nomad.volume.Volume.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.volume.Volume.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.volume.Volume.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-nomad.volume.Volume.resetSecrets"></a>

```csharp
private void ResetSecrets()
```

##### `ResetTopologyRequest` <a name="ResetTopologyRequest" id="@cdktf/provider-nomad.volume.Volume.resetTopologyRequest"></a>

```csharp
private void ResetTopologyRequest()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-nomad.volume.Volume.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.volume.Volume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Volume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.volume.Volume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.volume.Volume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Volume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.volume.Volume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.volume.Volume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Volume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.volume.Volume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

Volume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Volume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Volume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Volume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList">VolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.controllerRequired">ControllerRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.controllersExpected">ControllersExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.controllersHealthy">ControllersHealthy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference">VolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.nodesExpected">NodesExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.nodesHealthy">NodesHealthy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginProvider">PluginProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginProviderVersion">PluginProviderVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.schedulable">Schedulable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.topologies">Topologies</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList">VolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference">VolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.capabilityInput">CapabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.contextInput">ContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroyInput">DeregisterOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.mountOptionsInput">MountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginIdInput">PluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.secretsInput">SecretsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.topologyRequestInput">TopologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.context">Context</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroy">DeregisterOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginId">PluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.secrets">Secrets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.volume.Volume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.volume.Volume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.Volume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.volume.Volume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.volume.Volume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.volume.Volume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.volume.Volume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.volume.Volume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.volume.Volume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.volume.Volume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.volume.Volume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.volume.Volume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.volume.Volume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.volume.Volume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.volume.Volume.property.capability"></a>

```csharp
public VolumeCapabilityList Capability { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList">VolumeCapabilityList</a>

---

##### `ControllerRequired`<sup>Required</sup> <a name="ControllerRequired" id="@cdktf/provider-nomad.volume.Volume.property.controllerRequired"></a>

```csharp
public IResolvable ControllerRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ControllersExpected`<sup>Required</sup> <a name="ControllersExpected" id="@cdktf/provider-nomad.volume.Volume.property.controllersExpected"></a>

```csharp
public double ControllersExpected { get; }
```

- *Type:* double

---

##### `ControllersHealthy`<sup>Required</sup> <a name="ControllersHealthy" id="@cdktf/provider-nomad.volume.Volume.property.controllersHealthy"></a>

```csharp
public double ControllersHealthy { get; }
```

- *Type:* double

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-nomad.volume.Volume.property.mountOptions"></a>

```csharp
public VolumeMountOptionsOutputReference MountOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference">VolumeMountOptionsOutputReference</a>

---

##### `NodesExpected`<sup>Required</sup> <a name="NodesExpected" id="@cdktf/provider-nomad.volume.Volume.property.nodesExpected"></a>

```csharp
public double NodesExpected { get; }
```

- *Type:* double

---

##### `NodesHealthy`<sup>Required</sup> <a name="NodesHealthy" id="@cdktf/provider-nomad.volume.Volume.property.nodesHealthy"></a>

```csharp
public double NodesHealthy { get; }
```

- *Type:* double

---

##### `PluginProvider`<sup>Required</sup> <a name="PluginProvider" id="@cdktf/provider-nomad.volume.Volume.property.pluginProvider"></a>

```csharp
public string PluginProvider { get; }
```

- *Type:* string

---

##### `PluginProviderVersion`<sup>Required</sup> <a name="PluginProviderVersion" id="@cdktf/provider-nomad.volume.Volume.property.pluginProviderVersion"></a>

```csharp
public string PluginProviderVersion { get; }
```

- *Type:* string

---

##### `Schedulable`<sup>Required</sup> <a name="Schedulable" id="@cdktf/provider-nomad.volume.Volume.property.schedulable"></a>

```csharp
public IResolvable Schedulable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Topologies`<sup>Required</sup> <a name="Topologies" id="@cdktf/provider-nomad.volume.Volume.property.topologies"></a>

```csharp
public VolumeTopologiesList Topologies { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList">VolumeTopologiesList</a>

---

##### `TopologyRequest`<sup>Required</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.volume.Volume.property.topologyRequest"></a>

```csharp
public VolumeTopologyRequestOutputReference TopologyRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference">VolumeTopologyRequestOutputReference</a>

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.volume.Volume.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.volume.Volume.property.attachmentModeInput"></a>

```csharp
public string AttachmentModeInput { get; }
```

- *Type:* string

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.volume.Volume.property.capabilityInput"></a>

```csharp
public object CapabilityInput { get; }
```

- *Type:* object

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-nomad.volume.Volume.property.contextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeregisterOnDestroyInput`<sup>Optional</sup> <a name="DeregisterOnDestroyInput" id="@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroyInput"></a>

```csharp
public object DeregisterOnDestroyInput { get; }
```

- *Type:* object

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-nomad.volume.Volume.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.volume.Volume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-nomad.volume.Volume.property.mountOptionsInput"></a>

```csharp
public VolumeMountOptions MountOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.volume.Volume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.volume.Volume.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.volume.Volume.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.volume.Volume.property.pluginIdInput"></a>

```csharp
public string PluginIdInput { get; }
```

- *Type:* string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-nomad.volume.Volume.property.secretsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TopologyRequestInput`<sup>Optional</sup> <a name="TopologyRequestInput" id="@cdktf/provider-nomad.volume.Volume.property.topologyRequestInput"></a>

```csharp
public VolumeTopologyRequest TopologyRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-nomad.volume.Volume.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-nomad.volume.Volume.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.volume.Volume.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.volume.Volume.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.Volume.property.context"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Context { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeregisterOnDestroy`<sup>Required</sup> <a name="DeregisterOnDestroy" id="@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroy"></a>

```csharp
public object DeregisterOnDestroy { get; }
```

- *Type:* object

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-nomad.volume.Volume.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.volume.Volume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.volume.Volume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.volume.Volume.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.volume.Volume.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.volume.Volume.property.pluginId"></a>

```csharp
public string PluginId { get; }
```

- *Type:* string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-nomad.volume.Volume.property.secrets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secrets { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.volume.Volume.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.volume.Volume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.volume.Volume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VolumeCapability <a name="VolumeCapability" id="@cdktf/provider-nomad.volume.VolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeCapability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeCapability {
    string AccessMode,
    string AttachmentMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapability.property.accessMode">AccessMode</a></code> | <code>string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapability.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | The storage API that will be used by the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.volume.VolumeCapability.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#access_mode Volume#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.volume.VolumeCapability.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; set; }
```

- *Type:* string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#attachment_mode Volume#attachment_mode}

---

### VolumeConfig <a name="VolumeConfig" id="@cdktf/provider-nomad.volume.VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalId,
    string Name,
    string PluginId,
    string VolumeId,
    string AccessMode = null,
    string AttachmentMode = null,
    object Capability = null,
    System.Collections.Generic.IDictionary<string, string> Context = null,
    object DeregisterOnDestroy = null,
    string Id = null,
    VolumeMountOptions MountOptions = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    System.Collections.Generic.IDictionary<string, string> Secrets = null,
    VolumeTopologyRequest TopologyRequest = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.externalId">ExternalId</a></code> | <code>string</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.name">Name</a></code> | <code>string</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.pluginId">PluginId</a></code> | <code>string</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.volumeId">VolumeId</a></code> | <code>string</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.accessMode">AccessMode</a></code> | <code>string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | The storage API that will be used by the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.capability">Capability</a></code> | <code>object</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.context">Context</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.deregisterOnDestroy">DeregisterOnDestroy</a></code> | <code>object</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.secrets">Secrets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.type">Type</a></code> | <code>string</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.volume.VolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.volume.VolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.volume.VolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.volume.VolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.volume.VolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.volume.VolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.volume.VolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-nomad.volume.VolumeConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#external_id Volume#external_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.volume.VolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#name Volume#name}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.volume.VolumeConfig.property.pluginId"></a>

```csharp
public string PluginId { get; set; }
```

- *Type:* string

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#plugin_id Volume#plugin_id}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.volume.VolumeConfig.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#volume_id Volume#volume_id}

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktf/provider-nomad.volume.VolumeConfig.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#access_mode Volume#access_mode}

---

##### `AttachmentMode`<sup>Optional</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.volume.VolumeConfig.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; set; }
```

- *Type:* string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#attachment_mode Volume#attachment_mode}

---

##### `Capability`<sup>Optional</sup> <a name="Capability" id="@cdktf/provider-nomad.volume.VolumeConfig.property.capability"></a>

```csharp
public object Capability { get; set; }
```

- *Type:* object

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#capability Volume#capability}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeConfig.property.context"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Context { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#context Volume#context}

---

##### `DeregisterOnDestroy`<sup>Optional</sup> <a name="DeregisterOnDestroy" id="@cdktf/provider-nomad.volume.VolumeConfig.property.deregisterOnDestroy"></a>

```csharp
public object DeregisterOnDestroy { get; set; }
```

- *Type:* object

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#deregister_on_destroy Volume#deregister_on_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.volume.VolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-nomad.volume.VolumeConfig.property.mountOptions"></a>

```csharp
public VolumeMountOptions MountOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#mount_options Volume#mount_options}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.volume.VolumeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#namespace Volume#namespace}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.volume.VolumeConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#parameters Volume#parameters}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-nomad.volume.VolumeConfig.property.secrets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secrets { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#secrets Volume#secrets}

---

##### `TopologyRequest`<sup>Optional</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.volume.VolumeConfig.property.topologyRequest"></a>

```csharp
public VolumeTopologyRequest TopologyRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#topology_request Volume#topology_request}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-nomad.volume.VolumeConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#type Volume#type}

---

### VolumeMountOptions <a name="VolumeMountOptions" id="@cdktf/provider-nomad.volume.VolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeMountOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeMountOptions {
    string FsType = null,
    string[] MountFlags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions.property.fsType">FsType</a></code> | <code>string</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions.property.mountFlags">MountFlags</a></code> | <code>string[]</code> | The flags passed to mount. |

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-nomad.volume.VolumeMountOptions.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#fs_type Volume#fs_type}

---

##### `MountFlags`<sup>Optional</sup> <a name="MountFlags" id="@cdktf/provider-nomad.volume.VolumeMountOptions.property.mountFlags"></a>

```csharp
public string[] MountFlags { get; set; }
```

- *Type:* string[]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#mount_flags Volume#mount_flags}

---

### VolumeTopologies <a name="VolumeTopologies" id="@cdktf/provider-nomad.volume.VolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologies {

};
```


### VolumeTopologyRequest <a name="VolumeTopologyRequest" id="@cdktf/provider-nomad.volume.VolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologyRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequest {
    VolumeTopologyRequestRequired Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a></code> | required block. |

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-nomad.volume.VolumeTopologyRequest.property.required"></a>

```csharp
public VolumeTopologyRequestRequired Required { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#required Volume#required}

---

### VolumeTopologyRequestRequired <a name="VolumeTopologyRequestRequired" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequestRequired {
    object Topology
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired.property.topology">Topology</a></code> | <code>object</code> | topology block. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired.property.topology"></a>

```csharp
public object Topology { get; set; }
```

- *Type:* object

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#topology Volume#topology}

---

### VolumeTopologyRequestRequiredTopology <a name="VolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequestRequiredTopology {
    System.Collections.Generic.IDictionary<string, string> Segments
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology.property.segments">Segments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Define attributes for the topology request. |

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology.property.segments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Segments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Define attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/volume#segments Volume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### VolumeCapabilityList <a name="VolumeCapabilityList" id="@cdktf/provider-nomad.volume.VolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeCapabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.get"></a>

```csharp
private VolumeCapabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VolumeCapabilityOutputReference <a name="VolumeCapabilityOutputReference" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeCapabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```csharp
public string AttachmentModeInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VolumeMountOptionsOutputReference <a name="VolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeMountOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetMountFlags">ResetMountFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetMountFlags` <a name="ResetMountFlags" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetMountFlags"></a>

```csharp
private void ResetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlagsInput">MountFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlags">MountFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `MountFlagsInput`<sup>Optional</sup> <a name="MountFlagsInput" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```csharp
public string[] MountFlagsInput { get; }
```

- *Type:* string[]

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `MountFlags`<sup>Required</sup> <a name="MountFlags" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlags"></a>

```csharp
public string[] MountFlags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.internalValue"></a>

```csharp
public VolumeMountOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

---


### VolumeTopologiesList <a name="VolumeTopologiesList" id="@cdktf/provider-nomad.volume.VolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.get"></a>

```csharp
private VolumeTopologiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VolumeTopologiesOutputReference <a name="VolumeTopologiesOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.segments">Segments</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologies">VolumeTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.segments"></a>

```csharp
public StringMap Segments { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.internalValue"></a>

```csharp
public VolumeTopologies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologies">VolumeTopologies</a>

---


### VolumeTopologyRequestOutputReference <a name="VolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.putRequired">PutRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequired` <a name="PutRequired" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.putRequired"></a>

```csharp
private void PutRequired(VolumeTopologyRequestRequired Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

---

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference">VolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.requiredInput">RequiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.required"></a>

```csharp
public VolumeTopologyRequestRequiredOutputReference Required { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference">VolumeTopologyRequestRequiredOutputReference</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.requiredInput"></a>

```csharp
public VolumeTopologyRequestRequired RequiredInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.internalValue"></a>

```csharp
public VolumeTopologyRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

---


### VolumeTopologyRequestRequiredOutputReference <a name="VolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequestRequiredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.putTopology">PutTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopology` <a name="PutTopology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```csharp
private void PutTopology(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList">VolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topologyInput">TopologyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```csharp
public VolumeTopologyRequestRequiredTopologyList Topology { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList">VolumeTopologyRequestRequiredTopologyList</a>

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```csharp
public object TopologyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```csharp
public VolumeTopologyRequestRequired InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

---


### VolumeTopologyRequestRequiredTopologyList <a name="VolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequestRequiredTopologyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.get"></a>

```csharp
private VolumeTopologyRequestRequiredTopologyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VolumeTopologyRequestRequiredTopologyOutputReference <a name="VolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new VolumeTopologyRequestRequiredTopologyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segments">Segments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SegmentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Segments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



