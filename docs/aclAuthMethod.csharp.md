# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-nomad.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method nomad_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethod(Construct Scope, string Id, AclAuthMethodConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat">ResetTokenNameFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig"></a>

```csharp
private void PutConfig(AclAuthMethodConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTokenNameFormat` <a name="ResetTokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat"></a>

```csharp
private void ResetTokenNameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

AclAuthMethod.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

AclAuthMethod.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

AclAuthMethod.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

AclAuthMethod.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">MaxTokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">TokenLocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput">TokenNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality">TokenLocality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat">TokenNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config"></a>

```csharp
public AclAuthMethodConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```csharp
public AclAuthMethodConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxTokenTtlInput`<sup>Optional</sup> <a name="MaxTokenTtlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```csharp
public string MaxTokenTtlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TokenLocalityInput`<sup>Optional</sup> <a name="TokenLocalityInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```csharp
public string TokenLocalityInput { get; }
```

- *Type:* string

---

##### `TokenNameFormatInput`<sup>Optional</sup> <a name="TokenNameFormatInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput"></a>

```csharp
public string TokenNameFormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```csharp
public string MaxTokenTtl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```csharp
public string TokenLocality { get; }
```

- *Type:* string

---

##### `TokenNameFormat`<sup>Required</sup> <a name="TokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat"></a>

```csharp
public string TokenNameFormat { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    AclAuthMethodConfigA Config,
    string MaxTokenTtl,
    string Name,
    string TokenLocality,
    string Type,
    object Default = null,
    string Id = null,
    string TokenNameFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>string</code> | Defines the maximum life of a token created by this method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name">Name</a></code> | <code>string</code> | The identifier of the ACL Auth Method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">TokenLocality</a></code> | <code>string</code> | Defines whether the ACL Auth Method creates a local or global token when performing SSO login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type">Type</a></code> | <code>string</code> | ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default">Default</a></code> | <code>object</code> | Defines whether this ACL Auth Method is to be set as default. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat">TokenNameFormat</a></code> | <code>string</code> | Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```csharp
public AclAuthMethodConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```csharp
public string MaxTokenTtl { get; set; }
```

- *Type:* string

Defines the maximum life of a token created by this method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The identifier of the ACL Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```csharp
public string TokenLocality { get; set; }
```

- *Type:* string

Defines whether the ACL Auth Method creates a local or global token when performing SSO login.

This field must be set to either "local" or "global".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Defines whether this ACL Auth Method is to be set as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#default AclAuthMethod#default}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TokenNameFormat`<sup>Optional</sup> <a name="TokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat"></a>

```csharp
public string TokenNameFormat { get; set; }
```

- *Type:* string

Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}

---

### AclAuthMethodConfigA <a name="AclAuthMethodConfigA" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigA {
    string[] AllowedRedirectUris = null,
    string[] BoundAudiences = null,
    string[] BoundIssuer = null,
    System.Collections.Generic.IDictionary<string, string> ClaimMappings = null,
    string ClockSkewLeeway = null,
    string[] DiscoveryCaPem = null,
    string ExpirationLeeway = null,
    string JwksCaCert = null,
    string JwksUrl = null,
    string[] JwtValidationPubKeys = null,
    System.Collections.Generic.IDictionary<string, string> ListClaimMappings = null,
    string NotBeforeLeeway = null,
    AclAuthMethodConfigOidcClientAssertion OidcClientAssertion = null,
    string OidcClientId = null,
    string OidcClientSecret = null,
    object OidcDisableUserinfo = null,
    string OidcDiscoveryUrl = null,
    object OidcEnablePkce = null,
    string[] OidcScopes = null,
    string[] SigningAlgs = null,
    object VerboseLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | A list of allowed values that can be used for the redirect URI. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | List of auth claims that are valid for login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundIssuer">BoundIssuer</a></code> | <code>string[]</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mappings of claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>string</code> | Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>string[]</code> | PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.expirationLeeway">ExpirationLeeway</a></code> | <code>string</code> | Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksCaCert">JwksCaCert</a></code> | <code>string</code> | PEM encoded CA cert for use by the TLS client used to talk with the JWKS server. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | JSON Web Key Sets url for authenticating signatures. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwtValidationPubKeys">JwtValidationPubKeys</a></code> | <code>string[]</code> | List of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings">ListClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mappings of list claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>string</code> | Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientAssertion">OidcClientAssertion</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a></code> | oidc_client_assertion block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId">OidcClientId</a></code> | <code>string</code> | The OAuth Client ID configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret">OidcClientSecret</a></code> | <code>string</code> | The OAuth Client Secret configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDisableUserinfo">OidcDisableUserinfo</a></code> | <code>object</code> | Nomad will not make a request to the identity provider to get OIDC UserInfo. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>string</code> | The OIDC Discovery URL, without any .well-known component (base path). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcEnablePkce">OidcEnablePkce</a></code> | <code>object</code> | Nomad include PKCE challenge in OIDC auth requests. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | List of OIDC scopes. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs">SigningAlgs</a></code> | <code>string[]</code> | A list of supported signing algorithms. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.verboseLogging">VerboseLogging</a></code> | <code>object</code> | Enable OIDC verbose logging on the Nomad server. |

---

##### `AllowedRedirectUris`<sup>Optional</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; set; }
```

- *Type:* string[]

A list of allowed values that can be used for the redirect URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#allowed_redirect_uris AclAuthMethod#allowed_redirect_uris}

---

##### `BoundAudiences`<sup>Optional</sup> <a name="BoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; set; }
```

- *Type:* string[]

List of auth claims that are valid for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#bound_audiences AclAuthMethod#bound_audiences}

---

##### `BoundIssuer`<sup>Optional</sup> <a name="BoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundIssuer"></a>

```csharp
public string[] BoundIssuer { get; set; }
```

- *Type:* string[]

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#bound_issuer AclAuthMethod#bound_issuer}

---

##### `ClaimMappings`<sup>Optional</sup> <a name="ClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mappings of claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#claim_mappings AclAuthMethod#claim_mappings}

---

##### `ClockSkewLeeway`<sup>Optional</sup> <a name="ClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.clockSkewLeeway"></a>

```csharp
public string ClockSkewLeeway { get; set; }
```

- *Type:* string

Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#clock_skew_leeway AclAuthMethod#clock_skew_leeway}

---

##### `DiscoveryCaPem`<sup>Optional</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem"></a>

```csharp
public string[] DiscoveryCaPem { get; set; }
```

- *Type:* string[]

PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#discovery_ca_pem AclAuthMethod#discovery_ca_pem}

---

##### `ExpirationLeeway`<sup>Optional</sup> <a name="ExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.expirationLeeway"></a>

```csharp
public string ExpirationLeeway { get; set; }
```

- *Type:* string

Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#expiration_leeway AclAuthMethod#expiration_leeway}

---

##### `JwksCaCert`<sup>Optional</sup> <a name="JwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksCaCert"></a>

```csharp
public string JwksCaCert { get; set; }
```

- *Type:* string

PEM encoded CA cert for use by the TLS client used to talk with the JWKS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#jwks_ca_cert AclAuthMethod#jwks_ca_cert}

---

##### `JwksUrl`<sup>Optional</sup> <a name="JwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; set; }
```

- *Type:* string

JSON Web Key Sets url for authenticating signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#jwks_url AclAuthMethod#jwks_url}

---

##### `JwtValidationPubKeys`<sup>Optional</sup> <a name="JwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwtValidationPubKeys"></a>

```csharp
public string[] JwtValidationPubKeys { get; set; }
```

- *Type:* string[]

List of PEM-encoded public keys to use to authenticate signatures locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#jwt_validation_pub_keys AclAuthMethod#jwt_validation_pub_keys}

---

##### `ListClaimMappings`<sup>Optional</sup> <a name="ListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mappings of list claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#list_claim_mappings AclAuthMethod#list_claim_mappings}

---

##### `NotBeforeLeeway`<sup>Optional</sup> <a name="NotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.notBeforeLeeway"></a>

```csharp
public string NotBeforeLeeway { get; set; }
```

- *Type:* string

Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#not_before_leeway AclAuthMethod#not_before_leeway}

---

##### `OidcClientAssertion`<sup>Optional</sup> <a name="OidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientAssertion"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertion OidcClientAssertion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

oidc_client_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_client_assertion AclAuthMethod#oidc_client_assertion}

---

##### `OidcClientId`<sup>Optional</sup> <a name="OidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId"></a>

```csharp
public string OidcClientId { get; set; }
```

- *Type:* string

The OAuth Client ID configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_client_id AclAuthMethod#oidc_client_id}

---

##### `OidcClientSecret`<sup>Optional</sup> <a name="OidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret"></a>

```csharp
public string OidcClientSecret { get; set; }
```

- *Type:* string

The OAuth Client Secret configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_client_secret AclAuthMethod#oidc_client_secret}

---

##### `OidcDisableUserinfo`<sup>Optional</sup> <a name="OidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDisableUserinfo"></a>

```csharp
public object OidcDisableUserinfo { get; set; }
```

- *Type:* object

Nomad will not make a request to the identity provider to get OIDC UserInfo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_disable_userinfo AclAuthMethod#oidc_disable_userinfo}

---

##### `OidcDiscoveryUrl`<sup>Optional</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl"></a>

```csharp
public string OidcDiscoveryUrl { get; set; }
```

- *Type:* string

The OIDC Discovery URL, without any .well-known component (base path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_discovery_url AclAuthMethod#oidc_discovery_url}

---

##### `OidcEnablePkce`<sup>Optional</sup> <a name="OidcEnablePkce" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcEnablePkce"></a>

```csharp
public object OidcEnablePkce { get; set; }
```

- *Type:* object

Nomad include PKCE challenge in OIDC auth requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_enable_pkce AclAuthMethod#oidc_enable_pkce}

---

##### `OidcScopes`<sup>Optional</sup> <a name="OidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; set; }
```

- *Type:* string[]

List of OIDC scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#oidc_scopes AclAuthMethod#oidc_scopes}

---

##### `SigningAlgs`<sup>Optional</sup> <a name="SigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs"></a>

```csharp
public string[] SigningAlgs { get; set; }
```

- *Type:* string[]

A list of supported signing algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#signing_algs AclAuthMethod#signing_algs}

---

##### `VerboseLogging`<sup>Optional</sup> <a name="VerboseLogging" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.verboseLogging"></a>

```csharp
public object VerboseLogging { get; set; }
```

- *Type:* object

Enable OIDC verbose logging on the Nomad server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#verbose_logging AclAuthMethod#verbose_logging}

---

### AclAuthMethodConfigOidcClientAssertion <a name="AclAuthMethodConfigOidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigOidcClientAssertion {
    string KeySource,
    string[] Audience = null,
    System.Collections.Generic.IDictionary<string, string> ExtraHeaders = null,
    string KeyAlgorithm = null,
    AclAuthMethodConfigOidcClientAssertionPrivateKey PrivateKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keySource">KeySource</a></code> | <code>string</code> | The source of the key Nomad will use to sign the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.audience">Audience</a></code> | <code>string[]</code> | List of audiences to accept the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.extraHeaders">ExtraHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional headers to include on the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Algorithm of the key used to sign the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.privateKey">PrivateKey</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a></code> | private_key block. |

---

##### `KeySource`<sup>Required</sup> <a name="KeySource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keySource"></a>

```csharp
public string KeySource { get; set; }
```

- *Type:* string

The source of the key Nomad will use to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#key_source AclAuthMethod#key_source}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.audience"></a>

```csharp
public string[] Audience { get; set; }
```

- *Type:* string[]

List of audiences to accept the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#audience AclAuthMethod#audience}

---

##### `ExtraHeaders`<sup>Optional</sup> <a name="ExtraHeaders" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.extraHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional headers to include on the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#extra_headers AclAuthMethod#extra_headers}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Algorithm of the key used to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#key_algorithm AclAuthMethod#key_algorithm}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.privateKey"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertionPrivateKey PrivateKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

private_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#private_key AclAuthMethod#private_key}

---

### AclAuthMethodConfigOidcClientAssertionPrivateKey <a name="AclAuthMethodConfigOidcClientAssertionPrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigOidcClientAssertionPrivateKey {
    string KeyId = null,
    string KeyIdHeader = null,
    string PemCert = null,
    string PemCertFile = null,
    string PemKey = null,
    string PemKeyFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyId">KeyId</a></code> | <code>string</code> | Specific 'kid' header to set on the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyIdHeader">KeyIdHeader</a></code> | <code>string</code> | Name of the header the IDP will use to find the cert to verify the JWT signature. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCert">PemCert</a></code> | <code>string</code> | An x509 certificate PEM to derive a key ID header. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCertFile">PemCertFile</a></code> | <code>string</code> | Path to an x509 certificate PEM on Nomad servers to derive a key ID header. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKey">PemKey</a></code> | <code>string</code> | RSA private key PEM to use to sign the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKeyFile">PemKeyFile</a></code> | <code>string</code> | Path to an RSA private key PEM on Nomad servers to use to sign the JWT. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Specific 'kid' header to set on the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#key_id AclAuthMethod#key_id}

---

##### `KeyIdHeader`<sup>Optional</sup> <a name="KeyIdHeader" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyIdHeader"></a>

```csharp
public string KeyIdHeader { get; set; }
```

- *Type:* string

Name of the header the IDP will use to find the cert to verify the JWT signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#key_id_header AclAuthMethod#key_id_header}

---

##### `PemCert`<sup>Optional</sup> <a name="PemCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCert"></a>

```csharp
public string PemCert { get; set; }
```

- *Type:* string

An x509 certificate PEM to derive a key ID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#pem_cert AclAuthMethod#pem_cert}

---

##### `PemCertFile`<sup>Optional</sup> <a name="PemCertFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCertFile"></a>

```csharp
public string PemCertFile { get; set; }
```

- *Type:* string

Path to an x509 certificate PEM on Nomad servers to derive a key ID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#pem_cert_file AclAuthMethod#pem_cert_file}

---

##### `PemKey`<sup>Optional</sup> <a name="PemKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKey"></a>

```csharp
public string PemKey { get; set; }
```

- *Type:* string

RSA private key PEM to use to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#pem_key AclAuthMethod#pem_key}

---

##### `PemKeyFile`<sup>Optional</sup> <a name="PemKeyFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKeyFile"></a>

```csharp
public string PemKeyFile { get; set; }
```

- *Type:* string

Path to an RSA private key PEM on Nomad servers to use to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/acl_auth_method#pem_key_file AclAuthMethod#pem_key_file}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodConfigAOutputReference <a name="AclAuthMethodConfigAOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.putOidcClientAssertion">PutOidcClientAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetAllowedRedirectUris">ResetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences">ResetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundIssuer">ResetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings">ResetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClockSkewLeeway">ResetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem">ResetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetExpirationLeeway">ResetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksCaCert">ResetJwksCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksUrl">ResetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwtValidationPubKeys">ResetJwtValidationPubKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings">ResetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetNotBeforeLeeway">ResetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientAssertion">ResetOidcClientAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientId">ResetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientSecret">ResetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDisableUserinfo">ResetOidcDisableUserinfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDiscoveryUrl">ResetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcEnablePkce">ResetOidcEnablePkce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes">ResetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs">ResetSigningAlgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetVerboseLogging">ResetVerboseLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOidcClientAssertion` <a name="PutOidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.putOidcClientAssertion"></a>

```csharp
private void PutOidcClientAssertion(AclAuthMethodConfigOidcClientAssertion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.putOidcClientAssertion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

---

##### `ResetAllowedRedirectUris` <a name="ResetAllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetAllowedRedirectUris"></a>

```csharp
private void ResetAllowedRedirectUris()
```

##### `ResetBoundAudiences` <a name="ResetBoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences"></a>

```csharp
private void ResetBoundAudiences()
```

##### `ResetBoundIssuer` <a name="ResetBoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundIssuer"></a>

```csharp
private void ResetBoundIssuer()
```

##### `ResetClaimMappings` <a name="ResetClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings"></a>

```csharp
private void ResetClaimMappings()
```

##### `ResetClockSkewLeeway` <a name="ResetClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClockSkewLeeway"></a>

```csharp
private void ResetClockSkewLeeway()
```

##### `ResetDiscoveryCaPem` <a name="ResetDiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem"></a>

```csharp
private void ResetDiscoveryCaPem()
```

##### `ResetExpirationLeeway` <a name="ResetExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetExpirationLeeway"></a>

```csharp
private void ResetExpirationLeeway()
```

##### `ResetJwksCaCert` <a name="ResetJwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksCaCert"></a>

```csharp
private void ResetJwksCaCert()
```

##### `ResetJwksUrl` <a name="ResetJwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksUrl"></a>

```csharp
private void ResetJwksUrl()
```

##### `ResetJwtValidationPubKeys` <a name="ResetJwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwtValidationPubKeys"></a>

```csharp
private void ResetJwtValidationPubKeys()
```

##### `ResetListClaimMappings` <a name="ResetListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings"></a>

```csharp
private void ResetListClaimMappings()
```

##### `ResetNotBeforeLeeway` <a name="ResetNotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetNotBeforeLeeway"></a>

```csharp
private void ResetNotBeforeLeeway()
```

##### `ResetOidcClientAssertion` <a name="ResetOidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientAssertion"></a>

```csharp
private void ResetOidcClientAssertion()
```

##### `ResetOidcClientId` <a name="ResetOidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientId"></a>

```csharp
private void ResetOidcClientId()
```

##### `ResetOidcClientSecret` <a name="ResetOidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientSecret"></a>

```csharp
private void ResetOidcClientSecret()
```

##### `ResetOidcDisableUserinfo` <a name="ResetOidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDisableUserinfo"></a>

```csharp
private void ResetOidcDisableUserinfo()
```

##### `ResetOidcDiscoveryUrl` <a name="ResetOidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDiscoveryUrl"></a>

```csharp
private void ResetOidcDiscoveryUrl()
```

##### `ResetOidcEnablePkce` <a name="ResetOidcEnablePkce" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcEnablePkce"></a>

```csharp
private void ResetOidcEnablePkce()
```

##### `ResetOidcScopes` <a name="ResetOidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes"></a>

```csharp
private void ResetOidcScopes()
```

##### `ResetSigningAlgs` <a name="ResetSigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs"></a>

```csharp
private void ResetSigningAlgs()
```

##### `ResetVerboseLogging` <a name="ResetVerboseLogging" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetVerboseLogging"></a>

```csharp
private void ResetVerboseLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertion">OidcClientAssertion</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference">AclAuthMethodConfigOidcClientAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput">AllowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput">BoundAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuerInput">BoundIssuerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput">ClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeewayInput">ClockSkewLeewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput">DiscoveryCaPemInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeewayInput">ExpirationLeewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCertInput">JwksCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrlInput">JwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeysInput">JwtValidationPubKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput">ListClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeewayInput">NotBeforeLeewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertionInput">OidcClientAssertionInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput">OidcClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput">OidcClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfoInput">OidcDisableUserinfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput">OidcDiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkceInput">OidcEnablePkceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput">OidcScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput">SigningAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLoggingInput">VerboseLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuer">BoundIssuer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeeway">ExpirationLeeway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCert">JwksCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeys">JwtValidationPubKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings">ListClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId">OidcClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret">OidcClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfo">OidcDisableUserinfo</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkce">OidcEnablePkce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs">SigningAlgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLogging">VerboseLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OidcClientAssertion`<sup>Required</sup> <a name="OidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertion"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertionOutputReference OidcClientAssertion { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference">AclAuthMethodConfigOidcClientAssertionOutputReference</a>

---

##### `AllowedRedirectUrisInput`<sup>Optional</sup> <a name="AllowedRedirectUrisInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput"></a>

```csharp
public string[] AllowedRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `BoundAudiencesInput`<sup>Optional</sup> <a name="BoundAudiencesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput"></a>

```csharp
public string[] BoundAudiencesInput { get; }
```

- *Type:* string[]

---

##### `BoundIssuerInput`<sup>Optional</sup> <a name="BoundIssuerInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuerInput"></a>

```csharp
public string[] BoundIssuerInput { get; }
```

- *Type:* string[]

---

##### `ClaimMappingsInput`<sup>Optional</sup> <a name="ClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClockSkewLeewayInput`<sup>Optional</sup> <a name="ClockSkewLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeewayInput"></a>

```csharp
public string ClockSkewLeewayInput { get; }
```

- *Type:* string

---

##### `DiscoveryCaPemInput`<sup>Optional</sup> <a name="DiscoveryCaPemInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput"></a>

```csharp
public string[] DiscoveryCaPemInput { get; }
```

- *Type:* string[]

---

##### `ExpirationLeewayInput`<sup>Optional</sup> <a name="ExpirationLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeewayInput"></a>

```csharp
public string ExpirationLeewayInput { get; }
```

- *Type:* string

---

##### `JwksCaCertInput`<sup>Optional</sup> <a name="JwksCaCertInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCertInput"></a>

```csharp
public string JwksCaCertInput { get; }
```

- *Type:* string

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrlInput"></a>

```csharp
public string JwksUrlInput { get; }
```

- *Type:* string

---

##### `JwtValidationPubKeysInput`<sup>Optional</sup> <a name="JwtValidationPubKeysInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeysInput"></a>

```csharp
public string[] JwtValidationPubKeysInput { get; }
```

- *Type:* string[]

---

##### `ListClaimMappingsInput`<sup>Optional</sup> <a name="ListClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NotBeforeLeewayInput`<sup>Optional</sup> <a name="NotBeforeLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeewayInput"></a>

```csharp
public string NotBeforeLeewayInput { get; }
```

- *Type:* string

---

##### `OidcClientAssertionInput`<sup>Optional</sup> <a name="OidcClientAssertionInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertionInput"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertion OidcClientAssertionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

---

##### `OidcClientIdInput`<sup>Optional</sup> <a name="OidcClientIdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput"></a>

```csharp
public string OidcClientIdInput { get; }
```

- *Type:* string

---

##### `OidcClientSecretInput`<sup>Optional</sup> <a name="OidcClientSecretInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput"></a>

```csharp
public string OidcClientSecretInput { get; }
```

- *Type:* string

---

##### `OidcDisableUserinfoInput`<sup>Optional</sup> <a name="OidcDisableUserinfoInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfoInput"></a>

```csharp
public object OidcDisableUserinfoInput { get; }
```

- *Type:* object

---

##### `OidcDiscoveryUrlInput`<sup>Optional</sup> <a name="OidcDiscoveryUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput"></a>

```csharp
public string OidcDiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `OidcEnablePkceInput`<sup>Optional</sup> <a name="OidcEnablePkceInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkceInput"></a>

```csharp
public object OidcEnablePkceInput { get; }
```

- *Type:* object

---

##### `OidcScopesInput`<sup>Optional</sup> <a name="OidcScopesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput"></a>

```csharp
public string[] OidcScopesInput { get; }
```

- *Type:* string[]

---

##### `SigningAlgsInput`<sup>Optional</sup> <a name="SigningAlgsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput"></a>

```csharp
public string[] SigningAlgsInput { get; }
```

- *Type:* string[]

---

##### `VerboseLoggingInput`<sup>Optional</sup> <a name="VerboseLoggingInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLoggingInput"></a>

```csharp
public object VerboseLoggingInput { get; }
```

- *Type:* object

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; }
```

- *Type:* string[]

---

##### `BoundAudiences`<sup>Required</sup> <a name="BoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; }
```

- *Type:* string[]

---

##### `BoundIssuer`<sup>Required</sup> <a name="BoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuer"></a>

```csharp
public string[] BoundIssuer { get; }
```

- *Type:* string[]

---

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClockSkewLeeway`<sup>Required</sup> <a name="ClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeeway"></a>

```csharp
public string ClockSkewLeeway { get; }
```

- *Type:* string

---

##### `DiscoveryCaPem`<sup>Required</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem"></a>

```csharp
public string[] DiscoveryCaPem { get; }
```

- *Type:* string[]

---

##### `ExpirationLeeway`<sup>Required</sup> <a name="ExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeeway"></a>

```csharp
public string ExpirationLeeway { get; }
```

- *Type:* string

---

##### `JwksCaCert`<sup>Required</sup> <a name="JwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCert"></a>

```csharp
public string JwksCaCert { get; }
```

- *Type:* string

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; }
```

- *Type:* string

---

##### `JwtValidationPubKeys`<sup>Required</sup> <a name="JwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeys"></a>

```csharp
public string[] JwtValidationPubKeys { get; }
```

- *Type:* string[]

---

##### `ListClaimMappings`<sup>Required</sup> <a name="ListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NotBeforeLeeway`<sup>Required</sup> <a name="NotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeeway"></a>

```csharp
public string NotBeforeLeeway { get; }
```

- *Type:* string

---

##### `OidcClientId`<sup>Required</sup> <a name="OidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId"></a>

```csharp
public string OidcClientId { get; }
```

- *Type:* string

---

##### `OidcClientSecret`<sup>Required</sup> <a name="OidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret"></a>

```csharp
public string OidcClientSecret { get; }
```

- *Type:* string

---

##### `OidcDisableUserinfo`<sup>Required</sup> <a name="OidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfo"></a>

```csharp
public object OidcDisableUserinfo { get; }
```

- *Type:* object

---

##### `OidcDiscoveryUrl`<sup>Required</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl"></a>

```csharp
public string OidcDiscoveryUrl { get; }
```

- *Type:* string

---

##### `OidcEnablePkce`<sup>Required</sup> <a name="OidcEnablePkce" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkce"></a>

```csharp
public object OidcEnablePkce { get; }
```

- *Type:* object

---

##### `OidcScopes`<sup>Required</sup> <a name="OidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; }
```

- *Type:* string[]

---

##### `SigningAlgs`<sup>Required</sup> <a name="SigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs"></a>

```csharp
public string[] SigningAlgs { get; }
```

- *Type:* string[]

---

##### `VerboseLogging`<sup>Required</sup> <a name="VerboseLogging" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLogging"></a>

```csharp
public object VerboseLogging { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue"></a>

```csharp
public AclAuthMethodConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---


### AclAuthMethodConfigOidcClientAssertionOutputReference <a name="AclAuthMethodConfigOidcClientAssertionOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigOidcClientAssertionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.putPrivateKey">PutPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetExtraHeaders">ResetExtraHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateKey` <a name="PutPrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.putPrivateKey"></a>

```csharp
private void PutPrivateKey(AclAuthMethodConfigOidcClientAssertionPrivateKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.putPrivateKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

---

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetExtraHeaders` <a name="ResetExtraHeaders" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetExtraHeaders"></a>

```csharp
private void ResetExtraHeaders()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKey">PrivateKey</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference">AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeadersInput">ExtraHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySourceInput">KeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audience">Audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeaders">ExtraHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySource">KeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKey"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference PrivateKey { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference">AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference</a>

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audienceInput"></a>

```csharp
public string[] AudienceInput { get; }
```

- *Type:* string[]

---

##### `ExtraHeadersInput`<sup>Optional</sup> <a name="ExtraHeadersInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `KeySourceInput`<sup>Optional</sup> <a name="KeySourceInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySourceInput"></a>

```csharp
public string KeySourceInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKeyInput"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertionPrivateKey PrivateKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audience"></a>

```csharp
public string[] Audience { get; }
```

- *Type:* string[]

---

##### `ExtraHeaders`<sup>Required</sup> <a name="ExtraHeaders" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `KeySource`<sup>Required</sup> <a name="KeySource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySource"></a>

```csharp
public string KeySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.internalValue"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

---


### AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference <a name="AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyIdHeader">ResetKeyIdHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCert">ResetPemCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCertFile">ResetPemCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKey">ResetPemKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKeyFile">ResetPemKeyFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyIdHeader` <a name="ResetKeyIdHeader" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyIdHeader"></a>

```csharp
private void ResetKeyIdHeader()
```

##### `ResetPemCert` <a name="ResetPemCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCert"></a>

```csharp
private void ResetPemCert()
```

##### `ResetPemCertFile` <a name="ResetPemCertFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCertFile"></a>

```csharp
private void ResetPemCertFile()
```

##### `ResetPemKey` <a name="ResetPemKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKey"></a>

```csharp
private void ResetPemKey()
```

##### `ResetPemKeyFile` <a name="ResetPemKeyFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKeyFile"></a>

```csharp
private void ResetPemKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeaderInput">KeyIdHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFileInput">PemCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertInput">PemCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFileInput">PemKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyInput">PemKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeader">KeyIdHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCert">PemCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFile">PemCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKey">PemKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFile">PemKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdHeaderInput`<sup>Optional</sup> <a name="KeyIdHeaderInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeaderInput"></a>

```csharp
public string KeyIdHeaderInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `PemCertFileInput`<sup>Optional</sup> <a name="PemCertFileInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFileInput"></a>

```csharp
public string PemCertFileInput { get; }
```

- *Type:* string

---

##### `PemCertInput`<sup>Optional</sup> <a name="PemCertInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertInput"></a>

```csharp
public string PemCertInput { get; }
```

- *Type:* string

---

##### `PemKeyFileInput`<sup>Optional</sup> <a name="PemKeyFileInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFileInput"></a>

```csharp
public string PemKeyFileInput { get; }
```

- *Type:* string

---

##### `PemKeyInput`<sup>Optional</sup> <a name="PemKeyInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyInput"></a>

```csharp
public string PemKeyInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyIdHeader`<sup>Required</sup> <a name="KeyIdHeader" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeader"></a>

```csharp
public string KeyIdHeader { get; }
```

- *Type:* string

---

##### `PemCert`<sup>Required</sup> <a name="PemCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCert"></a>

```csharp
public string PemCert { get; }
```

- *Type:* string

---

##### `PemCertFile`<sup>Required</sup> <a name="PemCertFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFile"></a>

```csharp
public string PemCertFile { get; }
```

- *Type:* string

---

##### `PemKey`<sup>Required</sup> <a name="PemKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKey"></a>

```csharp
public string PemKey { get; }
```

- *Type:* string

---

##### `PemKeyFile`<sup>Required</sup> <a name="PemKeyFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFile"></a>

```csharp
public string PemKeyFile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.internalValue"></a>

```csharp
public AclAuthMethodConfigOidcClientAssertionPrivateKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

---



