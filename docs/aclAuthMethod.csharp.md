# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-nomad.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method nomad_acl_auth_method}.

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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```csharp
public string MaxTokenTtl { get; set; }
```

- *Type:* string

Defines the maximum life of a token created by this method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The identifier of the ACL Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```csharp
public string TokenLocality { get; set; }
```

- *Type:* string

Defines whether the ACL Auth Method creates a local or global token when performing SSO login.

This field must be set to either "local" or "global".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Defines whether this ACL Auth Method is to be set as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#default AclAuthMethod#default}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TokenNameFormat`<sup>Optional</sup> <a name="TokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat"></a>

```csharp
public string TokenNameFormat { get; set; }
```

- *Type:* string

Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}

---

### AclAuthMethodConfigA <a name="AclAuthMethodConfigA" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new AclAuthMethodConfigA {
    string[] AllowedRedirectUris,
    string OidcClientId,
    string OidcClientSecret,
    string OidcDiscoveryUrl,
    string[] BoundAudiences = null,
    System.Collections.Generic.IDictionary<string, string> ClaimMappings = null,
    string[] DiscoveryCaPem = null,
    System.Collections.Generic.IDictionary<string, string> ListClaimMappings = null,
    string[] OidcScopes = null,
    string[] SigningAlgs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | A list of allowed values that can be used for the redirect URI. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId">OidcClientId</a></code> | <code>string</code> | The OAuth Client ID configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret">OidcClientSecret</a></code> | <code>string</code> | The OAuth Client Secret configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>string</code> | The OIDC Discovery URL, without any .well-known component (base path). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | List of auth claims that are valid for login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mappings of claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>string[]</code> | PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings">ListClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mappings of list claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | List of OIDC scopes. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs">SigningAlgs</a></code> | <code>string[]</code> | A list of supported signing algorithms. |

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; set; }
```

- *Type:* string[]

A list of allowed values that can be used for the redirect URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#allowed_redirect_uris AclAuthMethod#allowed_redirect_uris}

---

##### `OidcClientId`<sup>Required</sup> <a name="OidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId"></a>

```csharp
public string OidcClientId { get; set; }
```

- *Type:* string

The OAuth Client ID configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_client_id AclAuthMethod#oidc_client_id}

---

##### `OidcClientSecret`<sup>Required</sup> <a name="OidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret"></a>

```csharp
public string OidcClientSecret { get; set; }
```

- *Type:* string

The OAuth Client Secret configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_client_secret AclAuthMethod#oidc_client_secret}

---

##### `OidcDiscoveryUrl`<sup>Required</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl"></a>

```csharp
public string OidcDiscoveryUrl { get; set; }
```

- *Type:* string

The OIDC Discovery URL, without any .well-known component (base path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_discovery_url AclAuthMethod#oidc_discovery_url}

---

##### `BoundAudiences`<sup>Optional</sup> <a name="BoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; set; }
```

- *Type:* string[]

List of auth claims that are valid for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#bound_audiences AclAuthMethod#bound_audiences}

---

##### `ClaimMappings`<sup>Optional</sup> <a name="ClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mappings of claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#claim_mappings AclAuthMethod#claim_mappings}

---

##### `DiscoveryCaPem`<sup>Optional</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem"></a>

```csharp
public string[] DiscoveryCaPem { get; set; }
```

- *Type:* string[]

PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#discovery_ca_pem AclAuthMethod#discovery_ca_pem}

---

##### `ListClaimMappings`<sup>Optional</sup> <a name="ListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mappings of list claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#list_claim_mappings AclAuthMethod#list_claim_mappings}

---

##### `OidcScopes`<sup>Optional</sup> <a name="OidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; set; }
```

- *Type:* string[]

List of OIDC scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_scopes AclAuthMethod#oidc_scopes}

---

##### `SigningAlgs`<sup>Optional</sup> <a name="SigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs"></a>

```csharp
public string[] SigningAlgs { get; set; }
```

- *Type:* string[]

A list of supported signing algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#signing_algs AclAuthMethod#signing_algs}

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
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences">ResetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings">ResetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem">ResetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings">ResetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes">ResetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs">ResetSigningAlgs</a></code> | *No description.* |

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

##### `ResetBoundAudiences` <a name="ResetBoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences"></a>

```csharp
private void ResetBoundAudiences()
```

##### `ResetClaimMappings` <a name="ResetClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings"></a>

```csharp
private void ResetClaimMappings()
```

##### `ResetDiscoveryCaPem` <a name="ResetDiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem"></a>

```csharp
private void ResetDiscoveryCaPem()
```

##### `ResetListClaimMappings` <a name="ResetListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings"></a>

```csharp
private void ResetListClaimMappings()
```

##### `ResetOidcScopes` <a name="ResetOidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes"></a>

```csharp
private void ResetOidcScopes()
```

##### `ResetSigningAlgs` <a name="ResetSigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs"></a>

```csharp
private void ResetSigningAlgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput">AllowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput">BoundAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput">ClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput">DiscoveryCaPemInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput">ListClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput">OidcClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput">OidcClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput">OidcDiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput">OidcScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput">SigningAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings">ListClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId">OidcClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret">OidcClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs">SigningAlgs</a></code> | <code>string[]</code> | *No description.* |
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

##### `ClaimMappingsInput`<sup>Optional</sup> <a name="ClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiscoveryCaPemInput`<sup>Optional</sup> <a name="DiscoveryCaPemInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput"></a>

```csharp
public string[] DiscoveryCaPemInput { get; }
```

- *Type:* string[]

---

##### `ListClaimMappingsInput`<sup>Optional</sup> <a name="ListClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

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

##### `OidcDiscoveryUrlInput`<sup>Optional</sup> <a name="OidcDiscoveryUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput"></a>

```csharp
public string OidcDiscoveryUrlInput { get; }
```

- *Type:* string

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

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiscoveryCaPem`<sup>Required</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem"></a>

```csharp
public string[] DiscoveryCaPem { get; }
```

- *Type:* string[]

---

##### `ListClaimMappings`<sup>Required</sup> <a name="ListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

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

##### `OidcDiscoveryUrl`<sup>Required</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl"></a>

```csharp
public string OidcDiscoveryUrl { get; }
```

- *Type:* string

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

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue"></a>

```csharp
public AclAuthMethodConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---



