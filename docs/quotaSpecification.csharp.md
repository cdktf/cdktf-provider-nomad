# `quotaSpecification` Submodule <a name="`quotaSpecification` Submodule" id="@cdktf/provider-nomad.quotaSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaSpecification <a name="QuotaSpecification" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification nomad_quota_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecification(Construct Scope, string Id, QuotaSpecificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig">QuotaSpecificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig">QuotaSpecificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits"></a>

```csharp
private void PutLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

QuotaSpecification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

QuotaSpecification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

QuotaSpecification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

QuotaSpecification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuotaSpecification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuotaSpecification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QuotaSpecification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput">LimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits"></a>

```csharp
public QuotaSpecificationLimitsList Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput"></a>

```csharp
public object LimitsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaSpecificationConfig <a name="QuotaSpecificationConfig" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecificationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Limits,
    string Name,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits">Limits</a></code> | <code>object</code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name">Name</a></code> | <code>string</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description">Description</a></code> | <code>string</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#id QuotaSpecification#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits"></a>

```csharp
public object Limits { get; set; }
```

- *Type:* object

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#limits QuotaSpecification#limits}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#name QuotaSpecification#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#description QuotaSpecification#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### QuotaSpecificationLimits <a name="QuotaSpecificationLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecificationLimits {
    string Region,
    QuotaSpecificationLimitsRegionLimit RegionLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region">Region</a></code> | <code>string</code> | Region in which this limit has affect. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit">RegionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | region_limit block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region in which this limit has affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#region QuotaSpecification#region}

---

##### `RegionLimit`<sup>Required</sup> <a name="RegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit"></a>

```csharp
public QuotaSpecificationLimitsRegionLimit RegionLimit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

region_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#region_limit QuotaSpecification#region_limit}

---

### QuotaSpecificationLimitsRegionLimit <a name="QuotaSpecificationLimitsRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecificationLimitsRegionLimit {
    double Cpu = null,
    double MemoryMb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu">Cpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb">MemoryMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}.

---

##### `MemoryMb`<sup>Optional</sup> <a name="MemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb"></a>

```csharp
public double MemoryMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuotaSpecificationLimitsList <a name="QuotaSpecificationLimitsList" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecificationLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get"></a>

```csharp
private QuotaSpecificationLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuotaSpecificationLimitsOutputReference <a name="QuotaSpecificationLimitsOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecificationLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit">PutRegionLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegionLimit` <a name="PutRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit"></a>

```csharp
private void PutRegionLimit(QuotaSpecificationLimitsRegionLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit">RegionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput">RegionLimitInput</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionLimit`<sup>Required</sup> <a name="RegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit"></a>

```csharp
public QuotaSpecificationLimitsRegionLimitOutputReference RegionLimit { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionLimitInput`<sup>Optional</sup> <a name="RegionLimitInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput"></a>

```csharp
public QuotaSpecificationLimitsRegionLimit RegionLimitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuotaSpecificationLimitsRegionLimitOutputReference <a name="QuotaSpecificationLimitsRegionLimitOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new QuotaSpecificationLimitsRegionLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb">ResetMemoryMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetMemoryMb` <a name="ResetMemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb"></a>

```csharp
private void ResetMemoryMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput">MemoryMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb">MemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `MemoryMbInput`<sup>Optional</sup> <a name="MemoryMbInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput"></a>

```csharp
public double MemoryMbInput { get; }
```

- *Type:* double

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `MemoryMb`<sup>Required</sup> <a name="MemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb"></a>

```csharp
public double MemoryMb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue"></a>

```csharp
public QuotaSpecificationLimitsRegionLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---



